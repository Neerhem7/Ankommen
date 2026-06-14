import { useState, useRef, useEffect } from 'react'
import { t } from '../../data/translations'

async function sendToAnthropic(messages, stepName) {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY
  if (!apiKey) throw new Error('MISSING_API_KEY')

  const systemPrompt = `You are a helpful German bureaucracy assistant specializing in helping newcomers (students, workers, tourists) navigate German administrative processes. The user is currently on the step: ${stepName}. Answer questions clearly, in simple English. If they ask in another language, respond in that language. Be warm, reassuring, and practical. Give specific advice, not vague tips. If you don't know something, say so honestly.`

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: systemPrompt,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    }),
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err.error?.message ?? `API error ${response.status}`)
  }

  const data = await response.json()
  return data.content?.[0]?.text ?? 'No response received.'
}

export default function AIChatTab({ lang, step }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const bottomRef = useRef(null)
  const stepLabel = `${step.titleDe} (${step.titleEn})`
  const hasApiKey = !!import.meta.env.VITE_ANTHROPIC_API_KEY

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function handleSend(text) {
    const content = (text ?? input).trim()
    if (!content || loading) return

    setInput('')
    setError(null)
    const userMsg = { role: 'user', content }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setLoading(true)

    try {
      const reply = await sendToAnthropic(updated, stepLabel)
      setMessages([...updated, { role: 'assistant', content: reply }])
    } catch (e) {
      if (e.message === 'MISSING_API_KEY') {
        setError(t(lang, 'apiKeyMissing'))
      } else {
        setError(e.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="tab-content-enter flex h-[calc(100vh-220px)] min-h-[400px] flex-col">
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <span className="text-4xl">🤖</span>
            <p className="mt-3 text-sm text-slate-500">
              Ask me anything about <strong>{step.titleDe}</strong>
            </p>
          </div>
        )}

        <div className="flex flex-col gap-3">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'rounded-br-md bg-primary text-white'
                  : 'rounded-bl-md bg-white text-slate-700 ring-1 ring-slate-200'
              }`}>
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-white px-4 py-3 ring-1 ring-slate-200">
                <span className="loading-dot h-2 w-2 rounded-full bg-slate-400" />
                <span className="loading-dot h-2 w-2 rounded-full bg-slate-400" />
                <span className="loading-dot h-2 w-2 rounded-full bg-slate-400" />
              </div>
            </div>
          )}
        </div>
        <div ref={bottomRef} />
      </div>

      {error && (
        <div className="mx-4 mb-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800 ring-1 ring-amber-200">
          {error}
        </div>
      )}

      <div className="border-t border-slate-200 bg-white px-4 py-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t(lang, 'askAnything', { step: step.titleDe })}
            disabled={loading || !hasApiKey}
            className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
          />
          <button
            type="button"
            onClick={() => handleSend()}
            disabled={loading || !input.trim() || !hasApiKey}
            className="shrink-0 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? '...' : t(lang, 'send')}
          </button>
        </div>

        <div className="mt-2.5 flex flex-wrap gap-2">
          {step.suggestions.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSend(s)}
              disabled={loading || !hasApiKey}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600 transition hover:bg-blue-50 hover:text-primary disabled:opacity-50"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
