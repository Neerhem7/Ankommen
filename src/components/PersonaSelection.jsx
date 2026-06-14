import { t } from '../data/translations'
import LanguageToggle from './LanguageToggle'

const PERSONA_OPTIONS = [
  { id: 'student', icon: '🎓', titleKey: 'personaStudent', descKey: 'personaStudentDesc', color: 'from-blue-500 to-blue-600' },
  { id: 'work', icon: '💼', titleKey: 'personaWork', descKey: 'personaWorkDesc', color: 'from-indigo-500 to-indigo-600' },
  { id: 'visitor', icon: '✈️', titleKey: 'personaVisitor', descKey: 'personaVisitorDesc', color: 'from-teal-500 to-teal-600' },
]

export default function PersonaSelection({ lang, onSelect, onLangChange }) {
  return (
    <div className="flex min-h-full flex-col">
      <header className="flex items-center justify-between px-4 py-4">
        <div>
          <h1 className="text-2xl font-bold text-primary">{t(lang, 'appName')}</h1>
          <p className="text-sm text-slate-500">{t(lang, 'tagline')}</p>
        </div>
        <LanguageToggle lang={lang} onChange={onLangChange} />
      </header>

      <main className="flex flex-1 flex-col px-4 pb-8 pt-4">
        <h2 className="mb-6 text-xl font-semibold leading-snug text-slate-800">
          {t(lang, 'personaQuestion')}
        </h2>

        <div className="flex flex-col gap-4">
          {PERSONA_OPTIONS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelect(p.id)}
              className="group relative overflow-hidden rounded-2xl bg-white p-5 text-left shadow-md ring-1 ring-slate-200 transition hover:shadow-lg hover:ring-primary/30 active:scale-[0.98]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 transition group-hover:opacity-5`} />
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-3xl ring-1 ring-slate-100">
                  {p.icon}
                </span>
                <div className="min-w-0 flex-1 pt-1">
                  <h3 className="text-lg font-bold text-slate-800">{t(lang, p.titleKey)}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{t(lang, p.descKey)}</p>
                </div>
                <svg className="mt-2 h-5 w-5 shrink-0 text-slate-300 transition group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
