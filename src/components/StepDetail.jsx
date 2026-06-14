import { useState } from 'react'
import { t } from '../data/translations'
import ChecklistTab from './tabs/ChecklistTab'
import VocabularyTab from './tabs/VocabularyTab'
import RoleplayTab from './tabs/RoleplayTab'
import AIChatTab from './tabs/AIChatTab'

const TABS = [
  { id: 'checklist', icon: '📄', labelKey: 'tabChecklist' },
  { id: 'words', icon: '🗣', labelKey: 'tabWords' },
  { id: 'roleplay', icon: '🎭', labelKey: 'tabRoleplay' },
  { id: 'ai', icon: '🤖', labelKey: 'tabAI' },
]

export default function StepDetail({
  lang,
  step,
  checked,
  onToggleChecklist,
  onCompleteStep,
  isStepDone,
  onBack,
}) {
  const [activeTab, setActiveTab] = useState('checklist')

  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-slate-200 bg-white px-4 py-3">
        <button
          type="button"
          onClick={onBack}
          className="mb-2 flex items-center gap-1 text-sm font-medium text-primary"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t(lang, 'back')}
        </button>
        <h1 className="text-xl font-bold text-slate-800">{step.titleDe}</h1>
        <p className="text-sm text-slate-500">{step.titleEn}</p>
      </header>

      <nav className="flex border-b border-slate-200 bg-white">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex flex-1 flex-col items-center gap-0.5 px-1 py-2.5 text-[10px] font-semibold transition ${
              activeTab === tab.id ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <span className="text-base leading-none">{tab.icon}</span>
            <span className="leading-tight">{t(lang, tab.labelKey)}</span>
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary" />
            )}
          </button>
        ))}
      </nav>

      <main className="flex-1 overflow-y-auto pb-28">
        {activeTab === 'checklist' && (
          <ChecklistTab
            lang={lang}
            step={step}
            checked={checked}
            onToggle={onToggleChecklist}
            onComplete={onCompleteStep}
            isStepDone={isStepDone}
          />
        )}
        {activeTab === 'words' && <VocabularyTab step={step} />}
        {activeTab === 'roleplay' && (
          <RoleplayTab
            lang={lang}
            step={step}
            onPracticeAI={() => setActiveTab('ai')}
          />
        )}
        {activeTab === 'ai' && <AIChatTab lang={lang} step={step} />}
      </main>
    </div>
  )
}
