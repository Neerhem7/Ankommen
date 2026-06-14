export default function VisaInsightsCard({ insights }) {
  return (
    <div className="space-y-3">
      {insights.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
        >
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
              {item.icon}
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wide text-primary">
                {item.question}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
