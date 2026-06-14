import { t } from '../data/translations'

export default function ProgressHeader({ lang, doneCount, totalSteps, showProgress = true }) {
  const pct = totalSteps > 0 ? (doneCount / totalSteps) * 100 : 0

  return (
    <div className="border-b border-slate-200 bg-white px-4 py-3">
      {showProgress && (
        <>
          <p className="text-sm font-medium text-slate-600">
            {t(lang, 'stepOf', { done: doneCount, total: totalSteps })}
          </p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${pct}%` }}
            />
          </div>
        </>
      )}
    </div>
  )
}
