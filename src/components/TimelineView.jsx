import { t } from '../data/translations'

const BUCKET_CONFIG = [
  { key: 'today', labelKey: 'timelineToday', icon: '🔴', color: 'border-red-400' },
  { key: 'thisWeek', labelKey: 'timelineThisWeek', icon: '🟠', color: 'border-amber-400' },
  { key: 'thisMonth', labelKey: 'timelineThisMonth', icon: '🔵', color: 'border-blue-400' },
  { key: 'future', labelKey: 'timelineFuture', icon: '🟣', color: 'border-violet-400' },
]

function urgencyBadge(urgency) {
  const map = {
    critical: 'bg-red-100 text-red-700',
    high: 'bg-red-100 text-red-700',
    required_soon: 'bg-amber-100 text-amber-700',
    medium: 'bg-amber-100 text-amber-700',
    recommended: 'bg-blue-100 text-blue-700',
    low: 'bg-blue-100 text-blue-700',
  }
  const labels = {
    critical: 'Critical',
    high: 'Critical',
    required_soon: 'Required Soon',
    medium: 'Required Soon',
    recommended: 'Recommended',
    low: 'Recommended',
  }
  return (
    <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${map[urgency] ?? map.recommended}`}>
      {labels[urgency] ?? 'Recommended'}
    </span>
  )
}

export default function TimelineView({ lang, timeline }) {
  const { buckets, permitExpiry } = timeline

  return (
    <div className="px-4 py-4 pb-28">
      <div className="mb-5 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-indigo-600 p-4 text-white shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">
          {t(lang, 'permitExpiry')}
        </p>
        <p className="mt-1 text-2xl font-extrabold">
          {permitExpiry.daysLeft > 0
            ? t(lang, 'expiresIn', { days: permitExpiry.daysLeft })
            : t(lang, 'expired')}
        </p>
        <p className="mt-1 text-sm text-blue-100">{permitExpiry.label}</p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-white transition-all duration-700"
            style={{ width: `${Math.min(100, Math.max(5, (permitExpiry.daysLeft / 365) * 100))}%` }}
          />
        </div>
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-[15px] top-0 w-0.5 bg-gradient-to-b from-red-300 via-amber-300 to-violet-300" />

        <div className="space-y-6">
          {BUCKET_CONFIG.map((bucket) => {
            const items = buckets[bucket.key] ?? []
            if (items.length === 0 && bucket.key !== 'today') return null

            return (
              <div key={bucket.key} className="relative pl-10">
                <div className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm shadow ring-2 ${bucket.color}`}>
                  {bucket.icon}
                </div>
                <h3 className="mb-2 text-sm font-bold text-slate-700">
                  {t(lang, bucket.labelKey)}
                </h3>

                {items.length === 0 ? (
                  <p className="text-xs text-slate-400">{t(lang, 'nothingDue')}</p>
                ) : (
                  <div className="space-y-2">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-bold text-slate-800">{item.titleDe}</p>
                            <p className="text-xs text-slate-500">{item.titleEn}</p>
                          </div>
                          {urgencyBadge(item.urgency)}
                        </div>
                        <p className="mt-1.5 text-xs font-medium text-slate-400">
                          ⏱ {item.deadlineLabel}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
