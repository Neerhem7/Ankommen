import { t } from '../../data/translations'

export default function ChecklistTab({ lang, step, checked, onToggle, onComplete, isStepDone }) {
  const total = step.checklist.length
  const done = checked.filter(Boolean).length
  const pct = total > 0 ? (done / total) * 100 : 0
  const allDone = done === total

  return (
    <div className="tab-content-enter px-4 py-4">
      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-600">
            {t(lang, 'checklistProgress', { done, total })}
          </span>
          <span className="font-bold text-primary">{Math.round(pct)}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-accent transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <ul className="flex flex-col gap-2">
        {step.checklist.map((item, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => onToggle(i)}
              className={`flex w-full items-start gap-3 rounded-xl p-3.5 text-left transition active:scale-[0.99] ${
                checked[i]
                  ? 'bg-accent-light ring-1 ring-green-200'
                  : 'bg-white ring-1 ring-slate-200 hover:ring-primary/30'
              }`}
            >
              <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-sm font-bold ${
                checked[i] ? 'bg-accent text-white' : 'bg-slate-100 text-slate-400'
              }`}>
                {checked[i] ? '✓' : ''}
              </span>
              <span className={`text-sm leading-relaxed ${checked[i] ? 'text-green-800 line-through decoration-green-400/50' : 'text-slate-700'}`}>
                {item}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {!isStepDone && (
        <button
          type="button"
          onClick={onComplete}
          disabled={!allDone}
          className={`mt-6 w-full rounded-xl py-3.5 text-sm font-bold transition active:scale-[0.98] ${
            allDone
              ? 'bg-accent text-white hover:bg-green-600'
              : 'cursor-not-allowed bg-slate-100 text-slate-400'
          }`}
        >
          {allDone ? t(lang, 'markComplete') : t(lang, 'allItemsNeeded')}
        </button>
      )}

      {isStepDone && (
        <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-accent-light py-3 text-sm font-semibold text-green-700">
          <span>✓</span> {t(lang, 'statusDone')}
        </div>
      )}
    </div>
  )
}
