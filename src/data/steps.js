export const PERSONAS = {
  student: { id: 'student', icon: '🎓' },
  work: { id: 'work', icon: '💼' },
  visitor: { id: 'visitor', icon: '✈️' },
}

const stepContent = {
  anmeldung: {
    id: 'anmeldung',
    titleDe: 'Anmeldung',
    titleEn: 'City registration',
    urgency: 'critical',
    checklist: [
      'Passport or national ID (original)',
      'Rental contract (Mietvertrag) — signed by landlord',
      'Wohnungsgeberbestätigung (landlord confirmation form)',
      'Appointment booking confirmation (if required)',
      'Completed Anmeldeformular (registration form)',
    ],
    vocabulary: [
      { word: 'Anmeldeformular', phonetic: 'an-mel-de-for-moo-lar', meaning: 'Registration form', example: 'Haben Sie das Anmeldeformular ausgefüllt?', exampleEn: 'Have you filled in the registration form?' },
      { word: 'Mietvertrag', phonetic: 'meet-fer-trag', meaning: 'Rental contract', example: 'Bitte zeigen Sie mir Ihren Mietvertrag.', exampleEn: 'Please show me your rental contract.' },
      { word: 'Wohnungsgeberbestätigung', phonetic: 'vo-nungs-gay-ber-be-shtay-ti-goong', meaning: 'Landlord confirmation', example: 'Wir brauchen die Wohnungsgeberbestätigung.', exampleEn: 'We need the landlord confirmation.' },
      { word: 'Termin', phonetic: 'ter-meen', meaning: 'Appointment', example: 'Haben Sie einen Termin?', exampleEn: 'Do you have an appointment?' },
      { word: 'Meldebescheinigung', phonetic: 'mel-de-be-shy-ni-goong', meaning: 'Registration certificate', example: 'Sie erhalten Ihre Meldebescheinigung sofort.', exampleEn: 'You will receive your registration certificate immediately.' },
    ],
    roleplay: [
      { speaker: 'clerk', de: 'Guten Morgen, was kann ich für Sie tun?', en: 'Good morning, how can I help you?' },
      { speaker: 'you', de: 'Guten Morgen, ich möchte mich anmelden. Ich bin neu in Berlin.', en: "Good morning, I'd like to register. I'm new in Berlin." },
      { speaker: 'clerk', de: 'Haben Sie alle Unterlagen dabei?', en: 'Do you have all your documents with you?' },
      { speaker: 'you', de: 'Ja, ich habe meinen Reisepass, den Mietvertrag und die Wohnungsgeberbestätigung.', en: 'Yes, I have my passport, rental contract and landlord confirmation.' },
      { speaker: 'clerk', de: 'Gut. Haben Sie das Anmeldeformular ausgefüllt?', en: 'Good. Have you filled in the registration form?' },
      { speaker: 'you', de: 'Nein, noch nicht. Wo bekomme ich das Formular?', en: 'Not yet. Where do I get the form?' },
      { speaker: 'clerk', de: 'Dort drüben am Tisch. Bitte füllen Sie es aus und kommen Sie wieder.', en: 'Over there at the table. Please fill it in and come back.' },
      { speaker: 'clerk', de: 'Ich sehe, dass die Unterschrift Ihres Vermieters auf der Wohnungsgeberbestätigung fehlt.', en: "I see that your landlord's signature is missing on the confirmation form." },
      { speaker: 'you', de: 'Oh, das tut mir leid. Kann ich es nachreichen?', en: "Oh, I'm sorry. Can I submit it afterwards?" },
      { speaker: 'clerk', de: 'Ja, Sie haben 2 Wochen Zeit. Hier ist Ihre Meldebescheinigung.', en: 'Yes, you have 2 weeks. Here is your registration certificate.' },
      { speaker: 'you', de: 'Vielen Dank!', en: 'Thank you very much!' },
    ],
    suggestions: [
      "What if my landlord won't give me the form?",
      'Can I walk in without appointment?',
      "What if I don't speak German?",
    ],
  },

  steuerid: {
    id: 'steuerid',
    titleDe: 'Steueridentifikationsnummer',
    titleEn: 'Tax ID number',
    urgency: 'critical',
    checklist: [
      'Meldebescheinigung (registration certificate)',
      'Passport or ID card',
      'Your registered German address',
      'Mailbox access (letter arrives by post)',
      'Copy of your visa or residence permit',
    ],
    vocabulary: [
      { word: 'Steueridentifikationsnummer', phonetic: 'shtoy-er-i-den-ti-fi-ka-tsi-oons-nu-mer', meaning: 'Tax identification number', example: 'Ihre Steueridentifikationsnummer wird Ihnen zugeschickt.', exampleEn: 'Your tax ID will be sent to you.' },
      { word: 'Finanzamt', phonetic: 'fi-nants-amt', meaning: 'Tax office', example: 'Das Finanzamt schickt Ihnen einen Brief.', exampleEn: 'The tax office will send you a letter.' },
      { word: 'Steuer-ID', phonetic: 'shtoy-er ee-deh', meaning: 'Tax ID (short form)', example: 'Brauchen Sie Ihre Steuer-ID für den Arbeitgeber.', exampleEn: 'You need your tax ID for your employer.' },
      { word: 'Brief', phonetic: 'breef', meaning: 'Letter', example: 'Der Brief kommt automatisch nach der Anmeldung.', exampleEn: 'The letter comes automatically after registration.' },
    ],
    roleplay: [
      { speaker: 'clerk', de: 'Finanzamt, guten Tag. Wie kann ich Ihnen helfen?', en: 'Tax office, good day. How can I help you?' },
      { speaker: 'you', de: 'Guten Tag, ich habe mich vor zwei Wochen angemeldet, aber noch keine Steuer-ID erhalten.', en: "Good day, I registered two weeks ago but haven't received my tax ID yet." },
      { speaker: 'clerk', de: 'Haben Sie Ihre Meldebescheinigung dabei?', en: 'Do you have your registration certificate with you?' },
      { speaker: 'you', de: 'Ja, hier bitte.', en: 'Yes, here you go.' },
      { speaker: 'clerk', de: 'Ich schaue im System nach... Die Nummer wurde bereits verschickt.', en: 'Let me check the system... The number has already been sent.' },
      { speaker: 'you', de: 'An welche Adresse wurde sie geschickt?', en: 'Which address was it sent to?' },
      { speaker: 'clerk', de: 'An Ihre Meldeadresse. Prüfen Sie bitte Ihren Briefkasten.', en: 'To your registered address. Please check your mailbox.' },
      { speaker: 'you', de: 'Vielen Dank für Ihre Hilfe!', en: 'Thank you for your help!' },
    ],
    suggestions: [
      'How long does the tax ID letter take?',
      'Can my employer start without a tax ID?',
      'What if the letter went to the wrong address?',
    ],
  },

  krankenversicherung: {
    id: 'krankenversicherung',
    titleDe: 'Krankenversicherung',
    titleEn: 'Health insurance',
    urgency: 'critical',
    checklist: [
      'Passport and visa/residence permit',
      'Meldebescheinigung (registration certificate)',
      'Proof of enrolment (students) or employment contract (workers)',
      'Bank account details (for SEPA direct debit)',
      'Previous insurance documents (if switching from another EU country)',
    ],
    vocabulary: [
      { word: 'Krankenversicherung', phonetic: 'kran-ken-fer-zi-che-rung', meaning: 'Health insurance', example: 'In Deutschland ist eine Krankenversicherung Pflicht.', exampleEn: 'Health insurance is mandatory in Germany.' },
      { word: 'Gesetzliche Krankenkasse', phonetic: 'ge-zets-li-che kran-ken-kas-se', meaning: 'Public health fund (e.g. TK, AOK)', example: 'Ich möchte mich bei der TK versichern.', exampleEn: 'I would like to insure with TK.' },
      { word: 'Versicherungsbescheinigung', phonetic: 'fer-zi-che-rungs-be-shy-ni-goong', meaning: 'Insurance certificate', example: 'Sie erhalten eine Versicherungsbescheinigung für die Uni.', exampleEn: 'You will receive an insurance certificate for the university.' },
      { word: 'Beitrag', phonetic: 'by-trag', meaning: 'Contribution / premium', example: 'Der monatliche Beitrag beträgt etwa 120 Euro.', exampleEn: 'The monthly contribution is about 120 euros.' },
      { word: 'Gesundheitskarte', phonetic: 'ge-zund-heits-kar-te', meaning: 'Health insurance card', example: 'Ihre Gesundheitskarte kommt per Post.', exampleEn: 'Your health card will arrive by post.' },
    ],
    roleplay: [
      { speaker: 'clerk', de: 'Willkommen bei der Techniker Krankenkasse. Was möchten Sie?', en: 'Welcome to Techniker Krankenkasse. What would you like?' },
      { speaker: 'you', de: 'Ich bin neu in Deutschland und möchte mich versichern. Ich studiere an der HU Berlin.', en: "I'm new in Germany and want to get insured. I study at Humboldt University Berlin." },
      { speaker: 'clerk', de: 'Sind Sie unter 30 und immatrikuliert?', en: 'Are you under 30 and enrolled?' },
      { speaker: 'you', de: 'Ja, ich bin 24 und habe meine Immatrikulationsbescheinigung dabei.', en: 'Yes, I am 24 and have my enrolment certificate with me.' },
      { speaker: 'clerk', de: 'Dann können Sie den studentischen Tarif wählen. Der Beitrag ist ca. 120 Euro monatlich.', en: 'Then you can choose the student rate. The contribution is about 120 euros monthly.' },
      { speaker: 'you', de: 'Gut. Brauche ich eine deutsche Bankverbindung?', en: 'Good. Do I need a German bank account?' },
      { speaker: 'clerk', de: 'Ja, für das SEPA-Lastschriftverfahren. Haben Sie schon ein Konto?', en: 'Yes, for SEPA direct debit. Do you already have an account?' },
      { speaker: 'you', de: 'Noch nicht, aber ich eröffne eins diese Woche.', en: "Not yet, but I'll open one this week." },
      { speaker: 'clerk', de: 'Kein Problem. Wir können den Antrag heute starten.', en: 'No problem. We can start the application today.' },
    ],
    suggestions: [
      'Public vs private insurance — which do I need?',
      'Can I use my home country insurance?',
      'What does student health insurance cost?',
    ],
  },

  schufa: {
    id: 'schufa',
    titleDe: 'Schufa-Auskunft',
    titleEn: 'Credit score report',
    urgency: 'medium',
    checklist: [
      'Passport or ID',
      'Meldebescheinigung with current address',
      'Email address for digital delivery',
      'Payment method (€29.95 for full report)',
      'Previous address history (if lived in Germany before)',
    ],
    vocabulary: [
      { word: 'Schufa', phonetic: 'shoo-fa', meaning: 'German credit bureau', example: 'Die Schufa speichert Ihre Kredithistorie.', exampleEn: 'Schufa stores your credit history.' },
      { word: 'Bonitätsauskunft', phonetic: 'bo-ni-tayts-aus-kunft', meaning: 'Credit report', example: 'Vermieter verlangen oft eine Schufa-Bonitätsauskunft.', exampleEn: 'Landlords often require a Schufa credit report.' },
      { word: 'Negativmerkmal', phonetic: 'ne-ga-teef-merk-mal', meaning: 'Negative entry', example: 'Als Neuankömmling haben Sie meist keine Negativmerkmale.', exampleEn: 'As a newcomer you usually have no negative entries.' },
      { word: 'Datenkopie', phonetic: 'da-ten-ko-pee', meaning: 'Data copy (free annual report)', example: 'Einmal im Jahr können Sie eine kostenlose Datenkopie anfordern.', exampleEn: 'Once a year you can request a free data copy.' },
    ],
    roleplay: [
      { speaker: 'clerk', de: 'Schufa Holding, Kundenservice. Wie kann ich helfen?', en: 'Schufa Holding, customer service. How can I help?' },
      { speaker: 'you', de: 'Ich brauche eine Bonitätsauskunft für eine Wohnungsbewerbung.', en: 'I need a credit report for a flat application.' },
      { speaker: 'clerk', de: 'Haben Sie schon ein Schufa-Konto?', en: 'Do you already have a Schufa account?' },
      { speaker: 'you', de: 'Nein, ich bin neu in Deutschland.', en: "No, I'm new in Germany." },
      { speaker: 'clerk', de: 'Dann empfehle ich die SCHUFA-BonitätsCheck online. Kosten: 29,95 Euro.', en: 'Then I recommend the SCHUFA-BonitätsCheck online. Cost: 29.95 euros.' },
      { speaker: 'you', de: 'Wie lange dauert es, bis ich das Dokument bekomme?', en: 'How long until I receive the document?' },
      { speaker: 'clerk', de: 'Bei Online-Bestellung erhalten Sie es sofort per PDF.', en: 'With online ordering you receive it immediately as a PDF.' },
      { speaker: 'you', de: 'Perfekt, danke schön!', en: 'Perfect, thank you!' },
    ],
    suggestions: [
      'Do I need Schufa as a newcomer?',
      'Free vs paid Schufa report?',
      'How to build credit history in Germany?',
    ],
  },

  bankkonto: {
    id: 'bankkonto',
    titleDe: 'Bankkonto eröffnen',
    titleEn: 'Open a bank account',
    urgency: 'required_soon',
    checklist: [
      'Valid passport',
      'Meldebescheinigung (registration certificate)',
      'Visa or residence permit',
      'Proof of address (utility bill or Anmeldung)',
      'Employment contract or enrolment letter (some banks require)',
      'Smartphone for identity verification (online banks)',
    ],
    vocabulary: [
      { word: 'Girokonto', phonetic: 'gee-ro-kon-to', meaning: 'Current/checking account', example: 'Ich möchte ein Girokonto eröffnen.', exampleEn: 'I would like to open a current account.' },
      { word: 'IBAN', phonetic: 'ee-ban', meaning: 'International bank account number', example: 'Bitte geben Sie mir Ihre IBAN.', exampleEn: 'Please give me your IBAN.' },
      { word: 'EC-Karte', phonetic: 'ay-tsay kar-te', meaning: 'Debit card', example: 'Ihre EC-Karte kommt in 5–7 Werktagen.', exampleEn: 'Your debit card arrives in 5–7 business days.' },
      { word: 'Kontoführungsgebühr', phonetic: 'kon-to-führ-rungs-ge-bühr', meaning: 'Account maintenance fee', example: 'Viele Banken bieten kostenlose Konten für Studenten.', exampleEn: 'Many banks offer free accounts for students.' },
      { word: 'Identifikation', phonetic: 'i-den-ti-fi-ka-tsi-oon', meaning: 'Identity verification', example: 'Die Identifikation erfolgt per Video-Chat.', exampleEn: 'Identification is done via video chat.' },
    ],
    roleplay: [
      { speaker: 'clerk', de: 'Guten Tag, willkommen bei der Sparkasse. Wie kann ich Ihnen helfen?', en: 'Good day, welcome to Sparkasse. How can I help you?' },
      { speaker: 'you', de: 'Guten Tag, ich möchte ein Girokonto eröffnen. Ich bin vor kurzem nach Deutschland gezogen.', en: "Good day, I'd like to open a current account. I recently moved to Germany." },
      { speaker: 'clerk', de: 'Haben Sie Ihre Meldebescheinigung und Ihren Reisepass dabei?', en: 'Do you have your registration certificate and passport with you?' },
      { speaker: 'you', de: 'Ja, hier sind beide Dokumente.', en: 'Yes, here are both documents.' },
      { speaker: 'clerk', de: 'Sind Sie Student oder angestellt?', en: 'Are you a student or employed?' },
      { speaker: 'you', de: 'Ich bin Student an der FU Berlin.', en: 'I am a student at Free University Berlin.' },
      { speaker: 'clerk', de: 'Dann können wir Ihnen ein kostenloses Studentenkonto anbieten.', en: 'Then we can offer you a free student account.' },
      { speaker: 'you', de: 'Brauche ich eine Anfangseinlage?', en: 'Do I need an initial deposit?' },
      { speaker: 'clerk', de: 'Nein, Sie können mit null Euro starten. Ihre Karte kommt in einer Woche.', en: 'No, you can start with zero euros. Your card arrives in one week.' },
    ],
    suggestions: [
      'Best bank for newcomers without Schufa?',
      'Online bank vs branch bank?',
      'Can I open an account before Anmeldung?',
    ],
  },

  uni_einschreibung: {
    id: 'uni_einschreibung',
    titleDe: 'Uni-Einschreibung',
    titleEn: 'University enrolment',
    urgency: 'required_soon',
    checklist: [
      'University admission letter (Zulassungsbescheid)',
      'Passport and visa',
      'Meldebescheinigung',
      'Health insurance certificate (Versicherungsbescheinigung)',
      'Passport-size photos (some universities)',
      'Semester contribution payment proof',
      'Previous degree certificates (translated if required)',
    ],
    vocabulary: [
      { word: 'Immatrikulation', phonetic: 'im-ma-tri-ku-la-tsi-oon', meaning: 'University enrolment', example: 'Die Immatrikulation findet im Studentensekretariat statt.', exampleEn: 'Enrolment takes place at the student office.' },
      { word: 'Matrikelnummer', phonetic: 'ma-tri-kel-nu-mer', meaning: 'Student ID number', example: 'Nach der Einschreibung erhalten Sie Ihre Matrikelnummer.', exampleEn: 'After enrolment you receive your student ID number.' },
      { word: 'Semesterbeitrag', phonetic: 'ze-mes-ter-by-trag', meaning: 'Semester fee', example: 'Der Semesterbeitrag muss vor der Einschreibung bezahlt werden.', exampleEn: 'The semester fee must be paid before enrolment.' },
      { word: 'Studierendenausweis', phonetic: 'shtu-dee-ren-den-aus-veis', meaning: 'Student ID card', example: 'Ihr Studierendenausweis ist auch Ihr Semesterticket.', exampleEn: 'Your student ID is also your semester transit pass.' },
    ],
    roleplay: [
      { speaker: 'clerk', de: 'Studentensekretariat, guten Tag.', en: 'Student office, good day.' },
      { speaker: 'you', de: 'Guten Tag, ich möchte mich für das Wintersemester einschreiben.', en: 'Good day, I would like to enrol for the winter semester.' },
      { speaker: 'clerk', de: 'Haben Sie Ihren Zulassungsbescheid und die Versicherungsbescheinigung?', en: 'Do you have your admission letter and insurance certificate?' },
      { speaker: 'you', de: 'Ja, beides habe ich hier. Den Semesterbeitrag habe ich bereits überwiesen.', en: 'Yes, I have both here. I have already transferred the semester fee.' },
      { speaker: 'clerk', de: 'Sehr gut. Bitte füllen Sie dieses Formular aus.', en: 'Very good. Please fill in this form.' },
      { speaker: 'you', de: 'Wann erhalte ich meinen Studierendenausweis?', en: 'When will I receive my student ID card?' },
      { speaker: 'clerk', de: 'In etwa einer Woche. Sie können ihn im Campus Center abholen.', en: 'In about one week. You can pick it up at the campus center.' },
      { speaker: 'you', de: 'Vielen Dank!', en: 'Thank you very much!' },
    ],
    suggestions: [
      'What if my insurance certificate is delayed?',
      'Can I enrol without a German address?',
      'What is the semester contribution for?',
    ],
  },

  jobsuche: {
    id: 'jobsuche',
    titleDe: 'Jobsuche',
    titleEn: 'Job search & work setup',
    urgency: 'low',
    checklist: [
      'Updated CV in German or English (Europass format recommended)',
      'LinkedIn and XING profiles updated',
      'Work permit / Blue Card documentation ready',
      'Steuer-ID and social security number (Sozialversicherungsnummer)',
      'References from previous employers (translated)',
      'Professional photo for applications (common in Germany)',
    ],
    vocabulary: [
      { word: 'Bewerbung', phonetic: 'be-ver-bung', meaning: 'Job application', example: 'Ich schicke meine Bewerbung per E-Mail.', exampleEn: 'I am sending my application by email.' },
      { word: 'Lebenslauf', phonetic: 'lay-bens-lauf', meaning: 'CV / résumé', example: 'Der Lebenslauf sollte maximal zwei Seiten haben.', exampleEn: 'The CV should be a maximum of two pages.' },
      { word: 'Vorstellungsgespräch', phonetic: 'for-shtel-lungs-ge-spräch', meaning: 'Job interview', example: 'Ich habe nächste Woche ein Vorstellungsgespräch.', exampleEn: 'I have a job interview next week.' },
      { word: 'Arbeitsvertrag', phonetic: 'ar-baits-fer-trag', meaning: 'Employment contract', example: 'Lesen Sie den Arbeitsvertrag sorgfältig durch.', exampleEn: 'Read the employment contract carefully.' },
      { word: 'Probezeit', phonetic: 'pro-be-tsait', meaning: 'Probation period', example: 'Die Probezeit beträgt in der Regel sechs Monate.', exampleEn: 'The probation period is usually six months.' },
    ],
    roleplay: [
      { speaker: 'clerk', de: 'Guten Tag, Sie haben sich bei uns beworben. Nehmen Sie bitte Platz.', en: 'Good day, you applied with us. Please take a seat.' },
      { speaker: 'you', de: 'Guten Tag, vielen Dank für die Einladung. Ich freue mich sehr auf dieses Gespräch.', en: 'Good day, thank you for the invitation. I am very much looking forward to this conversation.' },
      { speaker: 'clerk', de: 'Erzählen Sie mir bitte etwas über Ihre bisherige Berufserfahrung.', en: 'Please tell me about your previous work experience.' },
      { speaker: 'you', de: 'Ich habe fünf Jahre als Softwareentwicklerin gearbeitet, zuletzt in Amsterdam.', en: 'I worked for five years as a software developer, most recently in Amsterdam.' },
      { speaker: 'clerk', de: 'Warum möchten Sie nach Deutschland wechseln?', en: 'Why do you want to move to Germany?' },
      { speaker: 'you', de: 'Ich schätze die Work-Life-Balance und die Möglichkeiten in der Tech-Branche hier.', en: 'I value the work-life balance and the opportunities in the tech industry here.' },
      { speaker: 'clerk', de: 'Haben Sie schon Ihre Arbeitserlaubnis?', en: 'Do you already have your work permit?' },
      { speaker: 'you', de: 'Ja, ich habe eine EU Blue Card mit gültigem Arbeitsvertrag.', en: 'Yes, I have an EU Blue Card with a valid employment contract.' },
      { speaker: 'clerk', de: 'Ausgezeichnet. Wir melden uns innerhalb einer Woche bei Ihnen.', en: 'Excellent. We will get back to you within a week.' },
    ],
    suggestions: [
      'Best job portals for English speakers?',
      'Do I need a German CV format?',
      'How does probation period work in Germany?',
    ],
  },

  simcard: {
    id: 'simcard',
    titleDe: 'SIM-Karte / eSIM',
    titleEn: 'SIM card / eSIM',
    urgency: 'critical',
    checklist: [
      'Unlocked smartphone (or eSIM-compatible device)',
      'Passport for ID verification at shop',
      'Cash or card for prepaid plan (€10–30)',
      'Hotel/hostel address (for registration if asked)',
      'Know your data needs (tourist plans: 10–20 GB typical)',
    ],
    vocabulary: [
      { word: 'Prepaid', phonetic: 'pree-paid', meaning: 'Pay-as-you-go plan', example: 'Ein Prepaid-Tarif braucht keine Schufa.', exampleEn: 'A prepaid plan does not require Schufa.' },
      { word: 'Datenvolumen', phonetic: 'da-ten-vo-lo-men', meaning: 'Data allowance', example: 'Wie viel Datenvolumen ist im Tarif enthalten?', exampleEn: 'How much data is included in the plan?' },
      { word: 'eSIM', phonetic: 'ee-sim', meaning: 'Embedded SIM (digital)', example: 'Mit eSIM brauchen Sie keine physische Karte.', exampleEn: 'With eSIM you do not need a physical card.' },
      { word: 'Aufladen', phonetic: 'auf-la-den', meaning: 'Top up / recharge', example: 'Sie können online oder im Supermarkt aufladen.', exampleEn: 'You can top up online or at the supermarket.' },
    ],
    roleplay: [
      { speaker: 'clerk', de: 'Guten Tag, wie kann ich Ihnen helfen?', en: 'Good day, how can I help you?' },
      { speaker: 'you', de: 'Ich brauche eine Prepaid-SIM für zwei Wochen. Nur Internet, wenig Telefonie.', en: 'I need a prepaid SIM for two weeks. Internet only, little calling.' },
      { speaker: 'clerk', de: 'Wir haben einen Touristen-Tarif: 15 GB für 15 Euro, 28 Tage gültig.', en: 'We have a tourist plan: 15 GB for 15 euros, valid 28 days.' },
      { speaker: 'you', de: 'Funktioniert das auch als eSIM?', en: 'Does that also work as an eSIM?' },
      { speaker: 'clerk', de: 'Ja, ich kann Ihnen einen QR-Code ausdrucken. Ist Ihr Handy entsperrt?', en: 'Yes, I can print you a QR code. Is your phone unlocked?' },
      { speaker: 'you', de: 'Ja. Brauche ich meinen Reisepass?', en: 'Yes. Do I need my passport?' },
      { speaker: 'clerk', de: 'Ja, bitte zur Identifikation. Einen Moment... fertig. Scannen Sie den Code.', en: 'Yes, please for identification. One moment... done. Scan the code.' },
      { speaker: 'you', de: 'Perfekt, es funktioniert schon. Danke!', en: 'Perfect, it is already working. Thanks!' },
    ],
    suggestions: [
      'Best prepaid provider for tourists?',
      'eSIM vs physical SIM in Germany?',
      'Do I need to register my SIM?',
    ],
  },

  travel_insurance: {
    id: 'travel_insurance',
    titleDe: 'Reiseversicherung',
    titleEn: 'Travel insurance',
    urgency: 'critical',
    checklist: [
      'Passport details and travel dates',
      'Coverage for medical emergencies (min. €30,000 in Schengen)',
      'Repatriation coverage included',
      'Policy document (print or digital, in English/German)',
      'Emergency hotline number saved in phone',
      'Credit card travel insurance checked (may already cover you)',
    ],
    vocabulary: [
      { word: 'Reiseversicherung', phonetic: 'rai-ze-fer-zi-che-rung', meaning: 'Travel insurance', example: 'Eine Reiseversicherung ist für Schengen-Visa Pflicht.', exampleEn: 'Travel insurance is mandatory for Schengen visas.' },
      { word: 'Krankenrücktransport', phonetic: 'kran-ken-rük-trans-port', meaning: 'Medical repatriation', example: 'Der Krankenrücktransport ist in der Police enthalten.', exampleEn: 'Medical repatriation is included in the policy.' },
      { word: 'Selbstbeteiligung', phonetic: 'zelbst-be-tei-li-gung', meaning: 'Deductible / excess', example: 'Gibt es eine Selbstbeteiligung bei Arztbesuchen?', exampleEn: 'Is there a deductible for doctor visits?' },
      { word: 'Notfallnummer', phonetic: 'not-fall-nu-mer', meaning: 'Emergency number', example: 'Speichern Sie die Notfallnummer Ihrer Versicherung.', exampleEn: 'Save your insurance emergency number.' },
    ],
    roleplay: [
      { speaker: 'clerk', de: 'Notaufnahme, was ist passiert?', en: 'Emergency room, what happened?' },
      { speaker: 'you', de: 'Ich habe mir den Knöchel verstaucht. Ich bin Tourist und habe eine Reiseversicherung.', en: 'I sprained my ankle. I am a tourist and have travel insurance.' },
      { speaker: 'clerk', de: 'Haben Sie Ihre Versicherungskarte oder Police dabei?', en: 'Do you have your insurance card or policy with you?' },
      { speaker: 'you', de: 'Ja, hier ist die Police auf meinem Handy. Die Nummer ist AXA-Schengen-2024.', en: 'Yes, here is the policy on my phone. The number is AXA-Schengen-2024.' },
      { speaker: 'clerk', de: 'Gut. Wir behandeln Sie jetzt. Die Rechnung geht direkt an die Versicherung.', en: 'Good. We will treat you now. The bill goes directly to the insurance.' },
      { speaker: 'you', de: 'Muss ich etwas im Voraus bezahlen?', en: 'Do I need to pay anything in advance?' },
      { speaker: 'clerk', de: 'Nein, bei direkter Abrechnung nicht. Bewahren Sie alle Belege auf.', en: 'No, not with direct billing. Keep all receipts.' },
      { speaker: 'you', de: 'Vielen Dank!', en: 'Thank you very much!' },
    ],
    suggestions: [
      'Minimum coverage for Schengen visa?',
      'Does my credit card insurance count?',
      'What if I need a doctor as a tourist?',
    ],
  },

  blocked_account: {
    id: 'blocked_account',
    titleDe: 'Sperrkonto-Verifizierung',
    titleEn: 'Blocked account verification',
    urgency: 'required_soon',
    checklist: [
      'Blocked account (Sperrkonto) opened with approved provider',
      'Minimum balance €11,904 (2026 requirement)',
      'Confirmation letter (Eröffnungsbestätigung) from bank',
      'Passport copy submitted to bank',
      'University admission letter (for amount verification)',
      'Monthly withdrawal limit understood (€992/month)',
    ],
    vocabulary: [
      { word: 'Sperrkonto', phonetic: 'shper-kon-to', meaning: 'Blocked account for visa proof', example: 'Für das Visum benötigen Sie ein Sperrkonto.', exampleEn: 'You need a blocked account for the visa.' },
      { word: 'Eröffnungsbestätigung', phonetic: 'er-öff-nungs-be-shy-ni-goong', meaning: 'Account opening confirmation', example: 'Die Eröffnungsbestätigung schicken wir an die Botschaft.', exampleEn: 'We send the confirmation to the embassy.' },
    ],
    roleplay: [
      { speaker: 'clerk', de: 'Guten Tag, Sie möchten ein Sperrkonto eröffnen?', en: 'Good day, you would like to open a blocked account?' },
      { speaker: 'you', de: 'Ja, für mein Studentenvisum. Ich brauche die Bestätigung für die Uni.', en: 'Yes, for my student visa. I need the confirmation for the university.' },
      { speaker: 'clerk', de: 'Der Mindestbetrag ist 11.904 Euro. Haben Sie Ihren Reisepass dabei?', en: 'The minimum amount is 11,904 euros. Do you have your passport with you?' },
      { speaker: 'you', de: 'Ja, hier. Wie lange dauert die Bestätigung?', en: 'Yes, here. How long until I get the confirmation?' },
      { speaker: 'clerk', de: 'Die Eröffnungsbestätigung erhalten Sie sofort per E-Mail.', en: 'You will receive the opening confirmation immediately by email.' },
    ],
    suggestions: [
      'Which blocked account providers are accepted?',
      'Can I use a scholarship instead of Sperrkonto?',
      'How do monthly payouts work?',
    ],
  },

  employment_registration: {
    id: 'employment_registration',
    titleDe: 'Arbeitgeber-Anmeldung',
    titleEn: 'Employment registration',
    urgency: 'required_soon',
    checklist: [
      'Signed employment contract (Arbeitsvertrag)',
      'Tax ID (Steueridentifikationsnummer)',
      'Social security registration (Sozialversicherung)',
      'Health insurance certificate for employer',
      'Blue Card or work permit copy',
      'Bank account for salary payments',
    ],
    vocabulary: [
      { word: 'Sozialversicherungsnummer', phonetic: 'zo-tsi-al-fer-zi-che-rungs-nu-mer', meaning: 'Social security number', example: 'Ihre Sozialversicherungsnummer erhalten Sie von der Krankenkasse.', exampleEn: 'You receive your social security number from your health fund.' },
      { word: 'Lohnsteuer', phonetic: 'lohn-shtoy-er', meaning: 'Payroll tax', example: 'Ihr Arbeitgeber meldet Sie beim Finanzamt an.', exampleEn: 'Your employer registers you with the tax office.' },
    ],
    roleplay: [
      { speaker: 'clerk', de: 'Personalabteilung, guten Tag. Sie sind der neue Mitarbeiter?', en: 'HR department, good day. You are the new employee?' },
      { speaker: 'you', de: 'Ja, ich beginne am Montag. Was brauchen Sie von mir?', en: 'Yes, I start on Monday. What do you need from me?' },
      { speaker: 'clerk', de: 'Steuer-ID, Sozialversicherungsnummer und Krankenversicherungsnachweis.', en: 'Tax ID, social security number, and health insurance proof.' },
      { speaker: 'you', de: 'Hier sind alle Dokumente. Brauche ich noch etwas für die Blue Card?', en: 'Here are all documents. Do I need anything else for the Blue Card?' },
      { speaker: 'clerk', de: 'Nein, wir kümmern uns um die Anmeldung. Willkommen im Team!', en: 'No, we handle the registration. Welcome to the team!' },
    ],
    suggestions: [
      'What if my employer delays registration?',
      'How to get Sozialversicherungsnummer?',
      'Blue Card salary threshold 2026?',
    ],
  },

  residence_renewal: {
    id: 'residence_renewal',
    titleDe: 'Aufenthaltserneuerung',
    titleEn: 'Residence permit renewal',
    urgency: 'recommended',
    checklist: [
      'Current residence permit (Aufenthaltstitel)',
      'Valid passport',
      'Meldebescheinigung (current address)',
      'Proof of continued studies (Immatrikulationsbescheinigung)',
      'Blocked account or new financial proof',
      'Health insurance certificate',
      'Passport photos (biometric)',
      'Ausländerbehörde appointment confirmation',
    ],
    vocabulary: [
      { word: 'Aufenthaltserneuerung', phonetic: 'auf-ent-halts-er-neu-er-ung', meaning: 'Residence permit renewal', example: 'Beantragen Sie die Erneuerung 3 Monate vor Ablauf.', exampleEn: 'Apply for renewal 3 months before expiry.' },
      { word: 'Ausländerbehörde', phonetic: 'aus-len-der-be-hör-de', meaning: 'Immigration office', example: 'Die Ausländerbehörde bearbeitet Ihren Antrag.', exampleEn: 'The immigration office processes your application.' },
    ],
    roleplay: [
      { speaker: 'clerk', de: 'Ausländerbehörde, Sie möchten Ihren Aufenthalt verlängern?', en: 'Immigration office, you want to extend your stay?' },
      { speaker: 'you', de: 'Ja, mein Visum läuft in drei Monaten ab. Ich studiere weiter.', en: 'Yes, my visa expires in three months. I am continuing my studies.' },
      { speaker: 'clerk', de: 'Haben Sie einen aktuellen Immatrikulationsnachweis?', en: 'Do you have current proof of enrolment?' },
      { speaker: 'you', de: 'Ja, und mein Sperrkonto ist aufgefüllt.', en: 'Yes, and my blocked account is funded.' },
      { speaker: 'clerk', de: 'Gut. Wir bearbeiten Ihren Antrag in 6–8 Wochen.', en: 'Good. We will process your application in 6–8 weeks.' },
    ],
    suggestions: [
      'When to book renewal appointment?',
      'What if my permit expires during processing?',
      'Can I travel while renewal is pending?',
    ],
  },

  permanent_residence_tracker: {
    id: 'permanent_residence_tracker',
    titleDe: 'Niederlassungserlaubnis',
    titleEn: 'Permanent residence tracker',
    urgency: 'recommended',
    checklist: [
      'Track months of Blue Card employment (33 months standard)',
      'German language certificate B1 (21 months fast-track)',
      'Pension contributions documented',
      'Secure employment contract ongoing',
      'Rent contract and Anmeldung history',
      'Passport valid 6+ months beyond application date',
    ],
    vocabulary: [
      { word: 'Niederlassungserlaubnis', phonetic: 'nee-der-las-sungs-er-laub-nis', meaning: 'Permanent residence permit', example: 'Nach 33 Monaten können Sie die Niederlassungserlaubnis beantragen.', exampleEn: 'After 33 months you can apply for permanent residence.' },
      { word: 'Blue Card', phonetic: 'bloo kard', meaning: 'EU Blue Card', example: 'Die Blue Card führt schneller zur Niederlassungserlaubnis.', exampleEn: 'The Blue Card leads faster to permanent residence.' },
    ],
    roleplay: [
      { speaker: 'clerk', de: 'Sie fragen nach der Niederlassungserlaubnis?', en: 'You are asking about permanent residence?' },
      { speaker: 'you', de: 'Ja, ich habe seit 30 Monaten eine Blue Card. Was fehlt noch?', en: 'Yes, I have had a Blue Card for 30 months. What is still missing?' },
      { speaker: 'clerk', de: 'Noch 3 Monate und ein B1-Zertifikat für die Schnellverfahren-Route.', en: 'Another 3 months and a B1 certificate for the fast-track route.' },
      { speaker: 'you', de: 'Ich habe B1 bestanden. Wo reiche ich den Antrag ein?', en: 'I have passed B1. Where do I submit the application?' },
      { speaker: 'clerk', de: 'Online über das Ausländerportal. Termin in 4–6 Wochen.', en: 'Online via the immigration portal. Appointment in 4–6 weeks.' },
    ],
    suggestions: [
      'Blue Card to permanent residence timeline?',
      'Do I need B1 for permanent residence?',
      'Can I switch employers during the wait?',
    ],
  },

  emergency_contacts: {
    id: 'emergency_contacts',
    titleDe: 'Notfallkontakte',
    titleEn: 'Emergency contacts & embassy',
    urgency: 'required_soon',
    checklist: [
      'Save 112 (emergency) and 110 (police) in phone',
      'Embassy/consulate contact saved',
      'Copy of passport stored securely (cloud + paper)',
      'Emergency contact person notified of your itinerary',
      'Nearest hospital address bookmarked',
      'Travel insurance emergency hotline saved',
    ],
    vocabulary: [
      { word: 'Notruf', phonetic: 'not-ruf', meaning: 'Emergency call', example: 'Bei Lebensgefahr wählen Sie den Notruf 112.', exampleEn: 'In life-threatening situations dial emergency 112.' },
      { word: 'Botschaft', phonetic: 'bot-shaft', meaning: 'Embassy', example: 'Die Botschaft kann bei verlorenem Pass helfen.', exampleEn: 'The embassy can help with a lost passport.' },
      { word: 'Konsulat', phonetic: 'kon-zu-lat', meaning: 'Consulate', example: 'Das Konsulat ist am Wochenende geschlossen.', exampleEn: 'The consulate is closed on weekends.' },
      { word: 'Fundbüro', phonetic: 'fund-bü-ro', meaning: 'Lost & found office', example: 'Verlorene Gegenstände melden Sie beim Fundbüro.', exampleEn: 'Report lost items at the lost & found office.' },
    ],
    roleplay: [
      { speaker: 'clerk', de: 'Notrufzentrale, was ist Ihr Notfall?', en: 'Emergency center, what is your emergency?' },
      { speaker: 'you', de: 'Mein Freund ist zusammengebrochen. Wir sind am Brandenburger Tor.', en: 'My friend has collapsed. We are at Brandenburg Gate.' },
      { speaker: 'clerk', de: 'Bleiben Sie ruhig. Ist er bei Bewusstsein? Atmet er?', en: 'Stay calm. Is he conscious? Is he breathing?' },
      { speaker: 'you', de: 'Ja, er atmet, aber er reagiert nicht richtig.', en: 'Yes, he is breathing, but he is not responding properly.' },
      { speaker: 'clerk', de: 'Ein Rettungswagen ist unterwegs. Bleiben Sie an der Stelle.', en: 'An ambulance is on the way. Stay where you are.' },
      { speaker: 'you', de: 'Okay, wir warten hier. Wie lange dauert es?', en: 'Okay, we are waiting here. How long will it take?' },
      { speaker: 'clerk', de: 'Ca. 8 Minuten. Gibt es noch etwas?', en: 'About 8 minutes. Is there anything else?' },
      { speaker: 'you', de: 'Nein, danke. Wir warten.', en: 'No, thank you. We are waiting.' },
    ],
    suggestions: [
      'How to find my country embassy in Berlin?',
      'What to do if I lose my passport?',
      'Difference between 110 and 112?',
    ],
  },
}

const ROADMAPS = {
  student: [
    'anmeldung', 'steuerid', 'krankenversicherung', 'blocked_account',
    'bankkonto', 'uni_einschreibung', 'residence_renewal',
  ],
  work: [
    'anmeldung', 'steuerid', 'krankenversicherung',
    'bankkonto', 'employment_registration', 'permanent_residence_tracker',
  ],
  tourist: ['simcard', 'travel_insurance', 'emergency_contacts'],
}

const PERSONA_ALIASES = { visitor: 'tourist' }

function buildRoadmapSteps(ids) {
  return ids.map((id, i) => ({ ...stepContent[id], order: i + 1 }))
}

export function getPersonalizedRoadmap(persona) {
  const key = PERSONA_ALIASES[persona] ?? persona
  const ids = ROADMAPS[key] ?? ROADMAPS.student
  return buildRoadmapSteps(ids)
}

export function getJourneySteps(persona) {
  return getPersonalizedRoadmap(persona)
}

export function getStepById(id) {
  return stepContent[id] ?? null
}
