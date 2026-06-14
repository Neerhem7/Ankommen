import { getPersonalizedRoadmap } from './steps'
import { parseDaysUntil } from './visaSamples'

const URGENCY_ORDER = { critical: 0, required_soon: 1, recommended: 2 }

export function getPersonaFromVisa(visaData) {
  return visaData?.category ?? 'student'
}

export function generateAlerts(visaData, completedSteps = []) {
  const alerts = []
  const daysLeft = parseDaysUntil(visaData.validUntil)
  const category = visaData.category

  if (daysLeft <= 90 && daysLeft > 0) {
    alerts.push({
      id: 'visa-expiry',
      type: 'warning',
      icon: '⏳',
      title: `Visa expires in ${daysLeft} days`,
      body: `Renewal window opens ~3 months before ${formatDate(visaData.validUntil)}.`,
      priority: daysLeft <= 30 ? 'critical' : 'high',
    })
  }

  if (category !== 'tourist' && !completedSteps.includes('anmeldung')) {
    alerts.push({
      id: 'anmeldung-deadline',
      type: 'urgent',
      icon: '🏛',
      title: 'Anmeldung deadline approaching',
      body: 'Register your address within 14 days of moving in — fines apply after.',
      priority: 'critical',
    })
  }

  if (category !== 'tourist' && !completedSteps.includes('krankenversicherung')) {
    alerts.push({
      id: 'insurance-missing',
      type: 'info',
      icon: '🏥',
      title: 'Health insurance document missing',
      body: 'German law requires health coverage from your first day of residence.',
      priority: 'high',
    })
  }

  if (category === 'student' && !completedSteps.includes('blocked_account')) {
    alerts.push({
      id: 'blocked-account',
      type: 'info',
      icon: '🏦',
      title: 'Verify your blocked account (Sperrkonto)',
      body: 'Universities require proof of €11,904/year financial resources.',
      priority: 'medium',
    })
  }

  if (category === 'work' || category === 'student') {
    const renewalMonths = category === 'student' ? 2 : 3
    alerts.push({
      id: 'renewal-window',
      type: 'future',
      icon: '📅',
      title: `Residence renewal window opens in ${renewalMonths * 6} months`,
      body: 'Book your Ausländerbehörde appointment early — slots fill fast.',
      priority: 'low',
    })
  }

  if (category === 'tourist' && daysLeft <= 14) {
    alerts.push({
      id: 'schengen-limit',
      type: 'warning',
      icon: '✈️',
      title: 'Schengen stay limit',
      body: `Your visa ends ${formatDate(visaData.validUntil)}. Plan departure or extension.`,
      priority: 'critical',
    })
  }

  return alerts.sort((a, b) => {
    const p = { critical: 0, high: 1, medium: 2, low: 3 }
    return (p[a.priority] ?? 9) - (p[b.priority] ?? 9)
  })
}

export function generateInsights(visaData) {
  const daysLeft = parseDaysUntil(visaData.validUntil)
  const cat = visaData.category

  const insights = [
    {
      id: 'work',
      question: 'Can I work?',
      answer: visaData.workPermission,
      icon: '💼',
    },
    {
      id: 'days',
      question: 'How many days left on my permit?',
      answer: daysLeft > 0
        ? `${daysLeft} days remaining (until ${formatDate(visaData.validUntil)})`
        : 'Permit has expired — contact Ausländerbehörde immediately.',
      icon: '📆',
    },
    {
      id: 'reentry',
      question: 'Can I leave and re-enter Germany?',
      answer: visaData.entryType === 'Multiple'
        ? 'Yes — your visa allows multiple entries. Always carry passport + permit.'
        : 'Single entry only — leaving Schengen may invalidate your stay. Check before travel.',
      icon: '🛂',
    },
    {
      id: 'renew',
      question: 'When should I renew?',
      answer: cat === 'tourist'
        ? 'Short-stay visas cannot be renewed in-country. Apply from home country.'
        : `Start 3–4 months before expiry (${formatDate(visaData.validUntil)}). Book Ausländerbehörde early.`,
      icon: '🔄',
    },
  ]

  return insights
}

export function generateTimeline(visaData, steps, completedSteps = []) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const buckets = {
    today: [],
    thisWeek: [],
    thisMonth: [],
    future: [],
  }

  steps.forEach((step, idx) => {
    const done = completedSteps.includes(step.id)
    const deadline = estimateDeadline(step, visaData, idx, today)
    const item = {
      id: step.id,
      titleDe: step.titleDe,
      titleEn: step.titleEn,
      urgency: step.urgency,
      done,
      deadline,
      deadlineLabel: formatDeadlineLabel(deadline, today),
    }

    const daysUntil = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24))

    if (done) return

    if (daysUntil <= 0) buckets.today.push(item)
    else if (daysUntil <= 7) buckets.thisWeek.push(item)
    else if (daysUntil <= 30) buckets.thisMonth.push(item)
    else buckets.future.push(item)
  })

  const permitExpiry = {
    date: visaData.validUntil,
    daysLeft: parseDaysUntil(visaData.validUntil),
    label: formatDate(visaData.validUntil),
  }

  return { buckets, permitExpiry }
}

function estimateDeadline(step, visaData, index, today) {
  const d = new Date(today)
  const urgencyDays = { critical: 3, required_soon: 14, recommended: 45, high: 3, medium: 14, low: 45 }
  const days = urgencyDays[step.urgency] ?? 14
  d.setDate(d.getDate() + days + index * 2)

  if (step.id === 'residence_renewal' || step.id === 'permanent_residence_tracker') {
    const expiry = new Date(visaData.validUntil)
    expiry.setMonth(expiry.getMonth() - 3)
    return expiry
  }

  return d
}

function formatDeadlineLabel(deadline, today) {
  const days = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24))
  if (days <= 0) return 'Due today'
  if (days === 1) return 'Due tomorrow'
  if (days <= 7) return `Due in ${days} days`
  return formatDate(deadline.toISOString().slice(0, 10))
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function buildRoadmap(visaData) {
  const persona = getPersonaFromVisa(visaData)
  return getPersonalizedRoadmap(persona)
}

export function sortByUrgency(steps) {
  return [...steps].sort((a, b) => (URGENCY_ORDER[a.urgency] ?? 9) - (URGENCY_ORDER[b.urgency] ?? 9))
}
