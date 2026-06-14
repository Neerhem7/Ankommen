import { t } from '../data/translations'
import ProgressHeader from './ProgressHeader'

function urgencyLabel(lang, urgency) {
  const map = {
    critical: 'urgencyCritical',
    high: 'urgencyCritical',
    required_soon: 'urgencyRequiredSoon',
    medium: 'urgencyRequiredSoon',
    recommended: 'urgencyRecommended',
    low: 'urgencyRecommended',
  }
  return t(lang, map[urgency] ?? 'urgencyRecommended')
}

function urgencyStyle(urgency) {
  const map = {
    critical: 'bg-red-100 text-red-700',
    high: 'bg-red-100 text-red-700',
    required_soon: 'bg-amber-100 text-amber-700',
    medium: 'bg-amber-100 text-amber-700',
    recommended: 'bg-emerald-100 text-emerald-700',
    low: 'bg-emerald-100 text-emerald-700',
  }
  return map[urgency] ?? map.recommended
}

function StatusBadge({ status, lang }) {
  const styles = {
    locked: 'bg-slate-100 text-slate-500',
    current: 'bg-blue-100 text-primary',
    done: 'bg-accent-light text-green-700',
  }
  const labels = {
    locked: t(lang, 'statusLocked'),
    current: t(lang, 'statusCurrent'),
    done: t(lang, 'statusDone'),
  }
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}

export default function PersonalizedRoadmap({
  lang,
  visaData,
  steps,
  stepStatuses,
  doneCount,
  onOpenStep,
}) {
  return (
    <div className="pb-28">
      <ProgressHeader lang={lang} doneCount={doneCount} totalSteps={steps.length} />

      <div className="px-4 py-4">
        <div className="mb-5 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
            {t(lang, 'personalizedFor')}
          </p>
          <p className="mt-1 text-sm font-bold text-slate-800">{visaData.visaType}</p>
          <p className="text-xs text-slate-500">{visaData.city} · {visaData.permitNumber}</p>
        </div>

        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
          {t(lang, 'yourJourney')}
        </h3>

        <div className="relative">
          <div className="absolute bottom-4 left-[23px] top-4 w-0.5 bg-slate-200" />
          <div className="flex flex-col gap-4">
            {steps.map((step, idx) => {
              const status = stepStatuses[step.id] ?? 'locked'
              const isClickable = status === 'current' || status === 'done'

              return (
                <div key={step.id} className="relative flex gap-4">
                  <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold ring-4 ring-slate-50 ${
                    status === 'done' ? 'bg-accent text-white' :
                    status === 'current' ? 'bg-primary text-white shadow-lg shadow-blue-200' :
                    'bg-slate-200 text-slate-500'
                  }`}>
                    {status === 'done' ? '✓' : idx + 1}
                  </div>

                  <div className={`flex-1 rounded-2xl bg-white p-4 shadow-sm ring-1 transition ${
                    status === 'current' ? 'ring-primary/40 shadow-md' : 'ring-slate-200'
                  }`}>
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h4 className="font-bold text-slate-800">{step.titleDe}</h4>
                        <p className="text-sm text-slate-500">{step.titleEn}</p>
                      </div>
                      <StatusBadge status={status} lang={lang} />
                    </div>

                    <span className={`mt-2 inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold ${urgencyStyle(step.urgency)}`}>
                      {urgencyLabel(lang, step.urgency)}
                    </span>

                    {isClickable && (
                      <button
                        type="button"
                        onClick={() => onOpenStep(step.id)}
                        className={`mt-3 w-full rounded-xl py-2.5 text-sm font-semibold transition active:scale-[0.98] ${
                          status === 'current'
                            ? 'bg-primary text-white hover:bg-primary-dark'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {t(lang, 'startStep')}
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
