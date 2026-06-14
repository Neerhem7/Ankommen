import { t } from '../../data/translations'

function ChatBubble({ speaker, text, align }) {
  const isClerk = speaker === 'clerk'
  return (
    <div className={`flex ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
        isClerk
          ? 'rounded-bl-md bg-slate-100 text-slate-800'
          : 'rounded-br-md bg-primary text-white'
      }`}>
        {text}
      </div>
    </div>
  )
}

export default function RoleplayTab({ lang, step, onPracticeAI }) {
  return (
    <div className="tab-content-enter px-4 py-4">
      <div className="mb-4">
        <h3 className="font-bold text-slate-800">{t(lang, 'roleplayTitle')}</h3>
        <p className="text-sm text-slate-500">{t(lang, 'roleplaySubtitle')}</p>
      </div>

      <div className="mb-3 grid grid-cols-2 gap-2 text-center text-xs font-semibold uppercase tracking-wide text-slate-400">
        <span>{t(lang, 'german')}</span>
        <span>{t(lang, 'english')}</span>
      </div>

      <div className="flex flex-col gap-4">
        {step.roleplay.map((line, i) => (
          <div key={i} className="rounded-2xl bg-white p-3 ring-1 ring-slate-200">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {line.speaker === 'clerk' ? t(lang, 'sachbearbeiter') : t(lang, 'you')}
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="min-w-0">
                <ChatBubble speaker={line.speaker} text={line.de} align={line.speaker === 'you' ? 'right' : 'left'} />
              </div>
              <div className="min-w-0 border-l border-slate-100 pl-3">
                <p className="text-sm leading-relaxed text-slate-600">{line.en}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onPracticeAI}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-indigo-600 py-3.5 text-sm font-bold text-white shadow-md transition hover:shadow-lg active:scale-[0.98]"
      >
        {t(lang, 'practiceWithAI')}
      </button>
    </div>
  )
}
