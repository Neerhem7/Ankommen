import { t } from '../data/translations'
import LanguageToggle from './LanguageToggle'
import ProgressHeader from './ProgressHeader'

function urgencyLabel(lang, urgency) {
  const map = { high: 'urgencyHigh', medium: 'urgencyMedium', low: 'urgencyLow' }
  return t(lang, map[urgency] ?? 'urgencyMedium')
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

export default function JourneyMap({
  lang,
  persona,
  steps,
  stepStatuses,
  doneCount,
  onLangChange,
  onOpenStep,
  onBack,
}) {
  const welcomeKey = persona === 'student' ? 'welcomeStudent' : persona === 'work' ? 'welcomeWork' : 'welcomeVisitor'

  return (
    <div className="flex min-h-full flex-col">
      <header className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBack}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100"
            aria-label={t(lang, 'back')}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-lg font-bold text-primary">{t(lang, 'appName')}</h1>
          </div>
        </div>
        <LanguageToggle lang={lang} onChange={onLangChange} />
      </header>

      <ProgressHeader lang={lang} doneCount={doneCount} totalSteps={steps.length} />

      <main className="flex-1 px-4 py-5 pb-28">
        <h2 className="text-xl font-bold text-slate-800">{t(lang, welcomeKey)}</h2>
        <p className="mt-1 text-sm text-slate-500">{t(lang, 'journeyIntro')}</p>
        {persona === 'visitor' && (
          <p className="mt-2 rounded-lg bg-teal-50 px-3 py-2 text-xs text-teal-700 ring-1 ring-teal-100">
            {t(lang, 'visitorNote')}
          </p>
        )}

        <h3 className="mb-4 mt-6 text-sm font-semibold uppercase tracking-wide text-slate-400">
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
                    status === 'current' ? 'bg-primary text-white' :
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

                    <p className="mt-2 text-xs font-medium text-slate-400">
                      ⏱ {urgencyLabel(lang, step.urgency)}
                    </p>

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
      </main>
    </div>
  )
}
