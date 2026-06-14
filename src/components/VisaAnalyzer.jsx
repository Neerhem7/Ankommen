import { useEffect, useState } from 'react'
import { t } from '../data/translations'

const FIELDS = [
  { key: 'visaType', labelKey: 'fieldVisaType', icon: '📋' },
  { key: 'validFrom', labelKey: 'fieldValidFrom', icon: '📅' },
  { key: 'validUntil', labelKey: 'fieldValidUntil', icon: '📅' },
  { key: 'entryType', labelKey: 'fieldEntryType', icon: '🛂' },
  { key: 'workPermission', labelKey: 'fieldWorkPermission', icon: '💼' },
  { key: 'city', labelKey: 'fieldCity', icon: '🏙' },
  { key: 'permitNumber', labelKey: 'fieldPermitNumber', icon: '🔢' },
]

const SCAN_STEPS = ['Scanning document…', 'Detecting text fields…', 'Extracting visa data…', 'Building your roadmap…']

export default function VisaAnalyzer({ lang, visaData, onComplete }) {
  const [phase, setPhase] = useState('scanning')
  const [scanStep, setScanStep] = useState(0)
  const [revealed, setRevealed] = useState(0)

  useEffect(() => {
    if (phase !== 'scanning') return
    const interval = setInterval(() => {
      setScanStep((s) => {
        if (s >= SCAN_STEPS.length - 1) {
          clearInterval(interval)
          setTimeout(() => setPhase('results'), 400)
          return s
        }
        return s + 1
      })
    }, 700)
    return () => clearInterval(interval)
  }, [phase])

  useEffect(() => {
    if (phase !== 'results') return
    const interval = setInterval(() => {
      setRevealed((r) => {
        if (r >= FIELDS.length) {
          clearInterval(interval)
          return r
        }
        return r + 1
      })
    }, 120)
    return () => clearInterval(interval)
  }, [phase])

  if (phase === 'scanning') {
    return (
      <div className="flex min-h-full flex-col items-center justify-center px-6">
        <div className="relative mb-8">
          <div className="h-28 w-28 animate-pulse rounded-2xl bg-gradient-to-br from-primary/20 to-blue-100 ring-2 ring-primary/30" />
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="animate-scan h-1 w-full bg-primary shadow-[0_0_12px_#2563eb]" />
          </div>
          <span className="absolute -right-2 -top-2 text-3xl">🔍</span>
        </div>
        <h2 className="text-xl font-bold text-slate-800">{t(lang, 'analyzing')}</h2>
        <p className="mt-2 text-sm text-slate-500">{SCAN_STEPS[scanStep]}</p>
        <div className="mt-6 flex gap-1.5">
          {SCAN_STEPS.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-8 rounded-full transition-all duration-300 ${
                i <= scanStep ? 'bg-primary' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-full flex-col px-4 py-6">
      <div className="mb-5 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent-light text-2xl ring-4 ring-green-100">
          ✓
        </div>
        <h2 className="text-xl font-extrabold text-slate-800">{t(lang, 'analysisComplete')}</h2>
        <p className="mt-1 text-sm text-slate-500">
          {visaData.holderName} · {visaData.nationality}
        </p>
      </div>

      <div className="space-y-2.5">
        {FIELDS.map((f, i) => (
          <div
            key={f.key}
            className={`flex items-start gap-3 rounded-xl bg-white p-3.5 shadow-sm ring-1 ring-slate-200 transition-all duration-300 ${
              i < revealed ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            <span className="text-lg">{f.icon}</span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                {t(lang, f.labelKey)}
              </p>
              <p className="text-sm font-semibold text-slate-800">{visaData[f.key]}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onComplete}
        disabled={revealed < FIELDS.length}
        className="mt-8 w-full rounded-2xl bg-primary py-4 text-base font-bold text-white shadow-lg transition hover:bg-primary-dark active:scale-[0.98] disabled:opacity-50"
      >
        {t(lang, 'buildRoadmap')} →
      </button>
    </div>
  )
}
