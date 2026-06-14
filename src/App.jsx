import { useState, useMemo, useCallback } from 'react'
import { getSampleVisa } from './data/visaSamples'
import { buildRoadmap, generateAlerts, generateInsights, generateTimeline } from './data/roadmapEngine'
import { getPersonalizedRoadmap } from './data/steps'
import VisaUploader from './components/VisaUploader'
import VisaAnalyzer from './components/VisaAnalyzer'
import PersonaSelection from './components/PersonaSelection'
import Dashboard from './components/Dashboard'
import StepDetail from './components/StepDetail'
import EmergencyCard from './components/EmergencyCard'

const SCREENS = {
  visa_upload: 'visa_upload',
  visa_analyze: 'visa_analyze',
  persona: 'persona',
  dashboard: 'dashboard',
  step: 'step',
}

function computeStepStatuses(steps, completedSteps) {
  const statuses = {}
  let foundCurrent = false
  steps.forEach((step) => {
    if (completedSteps.includes(step.id)) {
      statuses[step.id] = 'done'
    } else if (!foundCurrent) {
      statuses[step.id] = 'current'
      foundCurrent = true
    } else {
      statuses[step.id] = 'locked'
    }
  })
  return statuses
}

function initChecklist(steps) {
  const state = {}
  steps.forEach((s) => {
    state[s.id] = s.checklist.map(() => false)
  })
  return state
}

export default function App() {
  const [screen, setScreen] = useState(SCREENS.visa_upload)
  const [lang, setLang] = useState('en')
  const [visaData, setVisaData] = useState(null)
  const [persona, setPersona] = useState(null)
  const [dashboardTab, setDashboardTab] = useState('home')
  const [activeStepId, setActiveStepId] = useState(null)
  const [completedSteps, setCompletedSteps] = useState([])
  const [checklistState, setChecklistState] = useState({})

  const steps = useMemo(() => {
    if (visaData) return buildRoadmap(visaData)
    if (persona) return getPersonalizedRoadmap(persona)
    return []
  }, [visaData, persona])

  const stepStatuses = useMemo(
    () => computeStepStatuses(steps, completedSteps),
    [steps, completedSteps],
  )

  const alerts = useMemo(
    () => (visaData ? generateAlerts(visaData, completedSteps) : []),
    [visaData, completedSteps],
  )

  const insights = useMemo(
    () => (visaData ? generateInsights(visaData) : []),
    [visaData],
  )

  const timeline = useMemo(
    () => (visaData ? generateTimeline(visaData, steps, completedSteps) : null),
    [visaData, steps, completedSteps],
  )

  const doneCount = completedSteps.length
  const activeStep = steps.find((s) => s.id === activeStepId)

  const enterDashboard = useCallback((data) => {
    const roadmap = buildRoadmap(data)
    setVisaData(data)
    setPersona(data.category)
    setChecklistState(initChecklist(roadmap))
    setCompletedSteps([])
    setDashboardTab('home')
    setScreen(SCREENS.dashboard)
  }, [])

  const handleUpload = useCallback((_file, _hint) => {
    setScreen(SCREENS.visa_analyze)
    setVisaData(getSampleVisa('student'))
  }, [])

  const handleSampleSelect = useCallback((category) => {
    setVisaData(getSampleVisa(category))
    setScreen(SCREENS.visa_analyze)
  }, [])

  const handleAnalysisComplete = useCallback(() => {
    if (visaData) enterDashboard(visaData)
  }, [visaData, enterDashboard])

  const handleSelectPersona = useCallback((id) => {
    const roadmap = getPersonalizedRoadmap(id)
    setPersona(id)
    setVisaData(getSampleVisa(id === 'visitor' ? 'tourist' : id))
    setChecklistState(initChecklist(roadmap))
    setCompletedSteps([])
    setDashboardTab('roadmap')
    setScreen(SCREENS.dashboard)
  }, [])

  const handleToggleChecklist = useCallback((itemIndex) => {
    if (!activeStepId) return
    setChecklistState((prev) => {
      const current = [...(prev[activeStepId] ?? [])]
      current[itemIndex] = !current[itemIndex]
      return { ...prev, [activeStepId]: current }
    })
  }, [activeStepId])

  const handleCompleteStep = useCallback(() => {
    if (!activeStepId || completedSteps.includes(activeStepId)) return
    setCompletedSteps((prev) => [...prev, activeStepId])
    setScreen(SCREENS.dashboard)
    setActiveStepId(null)
  }, [activeStepId, completedSteps])

  const handleReupload = useCallback(() => {
    setVisaData(null)
    setPersona(null)
    setCompletedSteps([])
    setChecklistState({})
    setScreen(SCREENS.visa_upload)
  }, [])

  const showEmergency = screen === SCREENS.dashboard || screen === SCREENS.step

  return (
    <div className="mx-auto min-h-full max-w-[430px] bg-slate-50 shadow-xl">
      {screen === SCREENS.visa_upload && (
        <VisaUploader
          lang={lang}
          onUpload={handleUpload}
          onSampleSelect={handleSampleSelect}
          onSkip={() => setScreen(SCREENS.persona)}
          onLangChange={setLang}
        />
      )}

      {screen === SCREENS.visa_analyze && visaData && (
        <VisaAnalyzer
          lang={lang}
          visaData={visaData}
          onComplete={handleAnalysisComplete}
        />
      )}

      {screen === SCREENS.persona && (
        <PersonaSelection
          lang={lang}
          onSelect={handleSelectPersona}
          onLangChange={setLang}
        />
      )}

      {screen === SCREENS.dashboard && visaData && timeline && (
        <Dashboard
          lang={lang}
          visaData={visaData}
          steps={steps}
          stepStatuses={stepStatuses}
          doneCount={doneCount}
          alerts={alerts}
          insights={insights}
          timeline={timeline}
          activeTab={dashboardTab}
          onTabChange={setDashboardTab}
          onOpenStep={(id) => { setActiveStepId(id); setScreen(SCREENS.step) }}
          onLangChange={setLang}
          onReupload={handleReupload}
        />
      )}

      {screen === SCREENS.step && activeStep && (
        <StepDetail
          lang={lang}
          step={activeStep}
          checked={checklistState[activeStepId] ?? activeStep.checklist.map(() => false)}
          onToggleChecklist={handleToggleChecklist}
          onCompleteStep={handleCompleteStep}
          isStepDone={completedSteps.includes(activeStepId)}
          onBack={() => { setScreen(SCREENS.dashboard); setActiveStepId(null) }}
        />
      )}

      {showEmergency && <EmergencyCard lang={lang} />}
    </div>
  )
}
