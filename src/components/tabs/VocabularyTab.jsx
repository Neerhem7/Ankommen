export default function VocabularyTab({ step }) {
  return (
    <div className="tab-content-enter px-4 py-4">
      <div className="flex flex-col gap-3">
        {step.vocabulary.map((v, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
          >
            <h4 className="text-lg font-bold text-slate-800">{v.word}</h4>
            <p className="mt-0.5 text-sm italic text-slate-400">[{v.phonetic}]</p>
            <p className="mt-2 text-sm font-medium text-primary">→ {v.meaning}</p>
            <div className="mt-3 rounded-xl bg-slate-50 px-3 py-2.5">
              <p className="text-sm text-slate-700">&ldquo;{v.example}&rdquo;</p>
              <p className="mt-1 text-xs text-slate-400">({v.exampleEn})</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
