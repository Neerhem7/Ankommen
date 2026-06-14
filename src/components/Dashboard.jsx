import { t } from '../data/translations'
import LanguageToggle from './LanguageToggle'
import PersonalizedRoadmap from './PersonalizedRoadmap'
import TimelineView from './TimelineView'
import AlertCard from './AlertCard'
import VisaInsightsCard from './VisaInsightsCard'
import { parseDaysUntil } from '../data/visaSamples'

const TABS = [
  { id: 'home', icon: '🏠', labelKey: 'tabHome' },
  { id: 'roadmap', icon: '🗺', labelKey: 'tabRoadmap' },
  { id: 'timeline', icon: '📅', labelKey: 'tabTimeline' },
]

export default function Dashboard({
  lang,
  visaData,
  steps,
  stepStatuses,
  doneCount,
  alerts,
  insights,
  timeline,
  activeTab,
  onTabChange,
  onOpenStep,
  onLangChange,
  onReupload,
}) {
  const daysLeft = parseDaysUntil(visaData.validUntil)

  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-primary">{t(lang, 'appName')}</h1>
            <p className="text-[11px] text-slate-500">
              {visaData.holderName} · {visaData.city}
            </p>
          </div>
          <LanguageToggle lang={lang} onChange={onLangChange} />
        </div>

        {daysLeft > 0 && daysLeft <= 120 && (
          <div className="mt-2 flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 ring-1 ring-amber-100">
            <span>⏳</span>
            <p className="text-xs font-semibold text-amber-800">
              {t(lang, 'expiresIn', { days: daysLeft })}
            </p>
          </div>
        )}
      </header>

      <main className="flex-1 overflow-y-auto">
        {activeTab === 'home' && (
          <div className="tab-content-enter px-4 py-4 pb-28">
            <h2 className="mb-3 text-lg font-extrabold text-slate-800">
              {t(lang, 'visaInsights')}
            </h2>
            <VisaInsightsCard insights={insights} />

            <h2 className="mb-3 mt-6 text-lg font-extrabold text-slate-800">
              {t(lang, 'smartAlerts')}
            </h2>
            <div className="space-y-2.5">
              {alerts.map((a) => (
                <AlertCard key={a.id} alert={a} />
              ))}
            </div>

            <button
              type="button"
              onClick={onReupload}
              className="mt-6 w-full rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
            >
              {t(lang, 'reuploadVisa')}
            </button>
          </div>
        )}

        {activeTab === 'roadmap' && (
          <PersonalizedRoadmap
            lang={lang}
            visaData={visaData}
            steps={steps}
            stepStatuses={stepStatuses}
            doneCount={doneCount}
            onOpenStep={onOpenStep}
          />
        )}

        {activeTab === 'timeline' && (
          <TimelineView lang={lang} timeline={timeline} />
        )}
      </main>

      <nav className="fixed bottom-14 left-1/2 z-40 w-full max-w-[430px] -translate-x-1/2 border-t border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="flex">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`relative flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[10px] font-semibold transition ${
                activeTab === tab.id ? 'text-primary' : 'text-slate-400'
              }`}
            >
              <span className="text-lg leading-none">{tab.icon}</span>
              {t(lang, tab.labelKey)}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-10 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
