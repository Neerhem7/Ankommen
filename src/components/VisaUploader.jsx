import { useRef, useState, useCallback } from 'react'
import { t } from '../data/translations'
import LanguageToggle from './LanguageToggle'

const SAMPLES = [
  { id: 'student', label: 'Student visa', emoji: '🎓', color: 'border-blue-200 bg-blue-50' },
  { id: 'work', label: 'Blue Card', emoji: '💼', color: 'border-indigo-200 bg-indigo-50' },
  { id: 'tourist', label: 'Tourist visa', emoji: '✈️', color: 'border-teal-200 bg-teal-50' },
]

export default function VisaUploader({ lang, onUpload, onSampleSelect, onSkip, onLangChange }) {
  const [dragging, setDragging] = useState(false)
  const [preview, setPreview] = useState(null)
  const fileRef = useRef(null)
  const cameraRef = useRef(null)

  const handleFile = useCallback((file) => {
    if (!file) return
    const url = URL.createObjectURL(file)
    setPreview(url)
    onUpload(file, 'student')
  }, [onUpload])

  const onDrop = useCallback((e) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }, [handleFile])

  return (
    <div className="flex min-h-full flex-col">
      <header className="flex items-center justify-between px-4 py-4">
        <div>
          <h1 className="text-xl font-bold text-primary">{t(lang, 'appName')}</h1>
          <p className="text-xs text-slate-500">{t(lang, 'tagline')}</p>
        </div>
        <LanguageToggle lang={lang} onChange={onLangChange} />
      </header>

      <main className="flex-1 px-4 pb-8">
        <div className="mb-6 animate-[fadeIn_0.4s_ease-out]">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-primary">
            Step 0
          </span>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight text-slate-800">
            {t(lang, 'visaTitle')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            {t(lang, 'visaSubtitle')}
          </p>
        </div>

        <div
          role="button"
          tabIndex={0}
          onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          onClick={() => fileRef.current?.click()}
          onKeyDown={(e) => e.key === 'Enter' && fileRef.current?.click()}
          className={`relative mb-4 cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-200 ${
            dragging
              ? 'border-primary bg-blue-50 scale-[1.01]'
              : 'border-slate-300 bg-white hover:border-primary/50 hover:bg-slate-50'
          }`}
        >
          <input
            ref={fileRef}
            type="file"
            accept="image/*,.pdf"
            className="hidden"
            onChange={(e) => handleFile(e.target.files[0])}
          />
          {preview ? (
            <img src={preview} alt="Uploaded document" className="mx-auto max-h-40 rounded-lg object-contain shadow-md" />
          ) : (
            <>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                📄
              </div>
              <p className="font-semibold text-slate-700">{t(lang, 'dragDrop')}</p>
              <p className="mt-1 text-xs text-slate-400">{t(lang, 'fileTypes')}</p>
            </>
          )}
        </div>

        <div className="mb-4 flex gap-3">
          <button
            type="button"
            onClick={() => cameraRef.current?.click()}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-white shadow-md transition hover:bg-primary-dark active:scale-[0.98]"
          >
            <span>📷</span> {t(lang, 'takePhoto')}
          </button>
          <input
            ref={cameraRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={(e) => handleFile(e.target.files[0])}
          />
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-bold text-primary ring-1 ring-primary/30 transition hover:bg-blue-50 active:scale-[0.98]"
          >
            <span>📁</span> {t(lang, 'browse')}
          </button>
        </div>

        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-400">
          {t(lang, 'orTrySample')}
        </p>

        <div className="mb-6 grid grid-cols-3 gap-2">
          {SAMPLES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => onSampleSelect(s.id)}
              className={`rounded-xl border p-3 text-center transition hover:scale-[1.02] active:scale-[0.98] ${s.color}`}
            >
              <span className="text-2xl">{s.emoji}</span>
              <p className="mt-1 text-[10px] font-bold leading-tight text-slate-700">{s.label}</p>
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="mb-2 text-xs font-bold text-slate-600">📋 {t(lang, 'sampleIllustration')}</p>
          <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-[10px] font-bold text-slate-400">AUFENTHALTSTITEL</span>
              <span className="text-lg">🇩🇪</span>
            </div>
            <div className="mt-2 space-y-1 text-[9px] text-slate-500">
              <div className="flex justify-between"><span>Type</span><span className="font-semibold text-slate-700">National Visa — Study</span></div>
              <div className="flex justify-between"><span>Valid until</span><span className="font-semibold text-slate-700">31.08.2027</span></div>
              <div className="flex justify-between"><span>City</span><span className="font-semibold text-slate-700">Berlin</span></div>
            </div>
            <div className="mt-2 h-8 rounded bg-gradient-to-r from-slate-100 to-slate-200" />
          </div>
        </div>

        <p className="mt-4 flex items-start gap-2 text-[11px] leading-relaxed text-slate-400">
          <span className="shrink-0">🔒</span>
          {t(lang, 'privacyNotice')}
        </p>

        <button
          type="button"
          onClick={onSkip}
          className="mt-6 w-full text-center text-sm font-medium text-slate-400 underline-offset-2 hover:text-primary hover:underline"
        >
          {t(lang, 'skipUpload')}
        </button>
      </main>
    </div>
  )
}
