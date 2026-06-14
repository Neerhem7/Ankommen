const STYLES = {
  critical: 'bg-red-50 ring-red-200 border-l-red-500',
  high: 'bg-amber-50 ring-amber-200 border-l-amber-500',
  medium: 'bg-blue-50 ring-blue-200 border-l-blue-500',
  low: 'bg-slate-50 ring-slate-200 border-l-slate-400',
  warning: 'bg-amber-50 ring-amber-200 border-l-amber-500',
  urgent: 'bg-red-50 ring-red-200 border-l-red-500',
  info: 'bg-blue-50 ring-blue-200 border-l-blue-500',
  future: 'bg-violet-50 ring-violet-200 border-l-violet-400',
}

export default function AlertCard({ alert }) {
  const style = STYLES[alert.priority] ?? STYLES[alert.type] ?? STYLES.medium

  return (
    <div className={`rounded-xl border-l-4 p-3.5 ring-1 ${style} transition hover:shadow-sm`}>
      <div className="flex gap-3">
        <span className="text-xl leading-none">{alert.icon}</span>
        <div className="min-w-0">
          <p className="text-sm font-bold text-slate-800">{alert.title}</p>
          <p className="mt-0.5 text-xs leading-relaxed text-slate-600">{alert.body}</p>
        </div>
      </div>
    </div>
  )
}
