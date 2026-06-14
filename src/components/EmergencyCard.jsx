import { t } from '../data/translations'

export default function EmergencyCard({ lang }) {
  return (
    <div className="sticky bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[430px] items-start gap-2.5 rounded-xl bg-red-50 px-3.5 py-2.5 ring-1 ring-red-100">
        <span className="text-base leading-none">🆘</span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold text-red-800">{t(lang, 'emergency')}</p>
          <p className="text-[11px] leading-snug text-red-700">{t(lang, 'emergencyNumbers')}</p>
        </div>
      </div>
    </div>
  )
}
