export const VISA_CATEGORIES = {
  student: 'student',
  work: 'work',
  tourist: 'tourist',
}

export const SAMPLE_VISAS = {
  student: {
    visaType: 'National Visa — Study (§16b AufenthG)',
    validFrom: '2025-09-01',
    validUntil: '2027-08-31',
    entryType: 'Multiple',
    workPermission: '120 full days or 240 half days/year',
    city: 'Berlin',
    permitNumber: 'DE-BER-2025-884712',
    category: 'student',
    holderName: 'Maria Santos',
    nationality: 'Brazil',
  },
  work: {
    visaType: 'EU Blue Card (§18b AufenthG)',
    validFrom: '2026-03-15',
    validUntil: '2029-03-14',
    entryType: 'Multiple',
    workPermission: 'Unlimited — tied to sponsoring employer',
    city: 'Munich',
    permitNumber: 'DE-MUC-2026-331205',
    category: 'work',
    holderName: 'James Okonkwo',
    nationality: 'Nigeria',
  },
  tourist: {
    visaType: 'Schengen Short-Stay Visa (Type C)',
    validFrom: '2026-06-01',
    validUntil: '2026-08-30',
    entryType: 'Single',
    workPermission: 'Not permitted',
    city: 'Berlin',
    permitNumber: 'DE-SHN-2026-019443',
    category: 'tourist',
    holderName: 'Yuki Tanaka',
    nationality: 'Japan',
  },
}

export function getSampleVisa(category) {
  return { ...SAMPLE_VISAS[category] }
}

export function parseDaysUntil(dateStr) {
  const end = new Date(dateStr)
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  end.setHours(0, 0, 0, 0)
  return Math.ceil((end - now) / (1000 * 60 * 60 * 24))
}
