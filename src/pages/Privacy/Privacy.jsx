import SEO from '@/components/seo/SEO'

const SECTIONS = [
  {
    title: '1. Information We Collect',
    points: [
      'Identity and contact details you submit through forms, such as name, email, and phone number.',
      'Information you share when requesting consultations, documents, or investment-related communication.',
      'Technical information such as device/browser data and basic usage analytics for website performance.',
    ],
  },
  {
    title: '2. How We Use Information',
    points: [
      'To respond to your inquiries and provide requested support or product information.',
      'To improve website experience, content quality, and service communication.',
      'To comply with applicable legal, regulatory, and record-keeping obligations.',
    ],
  },
  {
    title: '3. Data Enrichment Consent',
    points: [
      'Where expressly consented by you, Metaarth Capital may process your provided credentials for profile enrichment.',
      'Such processing may involve lawful sources including public records, authorized institutions, and regulated data providers.',
      'Enriched data is used only to assess suitability and offer relevant products, services, and investor communication.',
    ],
  },
  {
    title: '4. Sharing and Disclosure',
    points: [
      'We do not sell personal data.',
      'Data may be shared with trusted service providers, legal advisors, auditors, or regulators where required for service, compliance, or legal obligations.',
      'Any sharing is governed by confidentiality, security, and data minimization standards.',
    ],
  },
  {
    title: '5. Data Security',
    points: [
      'We apply reasonable technical and organizational controls to protect personal information.',
      'Access is restricted to authorized personnel and monitored based on role and necessity.',
      'Despite safeguards, no digital transmission or storage can be guaranteed as absolutely secure.',
    ],
  },
  {
    title: '6. Retention',
    points: [
      'Personal data is retained only for as long as needed for the stated purpose, contractual requirements, and legal/regulatory obligations.',
      'When no longer required, data is deleted, anonymized, or archived as required by law.',
    ],
  },
  {
    title: '7. Your Rights',
    points: [
      'You may request access, correction, or update of personal data held by us, subject to applicable law.',
      'You may withdraw specific consent where processing is consent-based, subject to legal and contractual limits.',
      'For data requests, use the contact details listed on the Contact page.',
    ],
  },
  {
    title: '8. Policy Updates',
    points: [
      'This policy may be updated from time to time to reflect legal, operational, or product changes.',
      'Material updates may be communicated through website notice or direct communication where appropriate.',
    ],
  },
]

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy policy" description="How Metaarth Capital collects, uses, and protects personal information." path="/privacy-policy" />

      <section className="border-b border-stone-200/60 bg-section-mesh py-16 dark:border-stone-800 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent dark:text-accent-bright">Legal</p>
          <h1 className="mt-3 font-display text-3xl font-bold text-navy dark:text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted dark:text-stone-400">
            This policy explains how Metaarth Capital handles personal information shared through this website.
          </p>
        </div>
      </section>

      <section className="bg-section-mesh py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 rounded-2xl border border-stone-200/90 bg-white/95 p-6 shadow-(--shadow-card) dark:border-stone-700 dark:bg-white/5 sm:p-8">
            {SECTIONS.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-xl font-semibold text-navy dark:text-white">{section.title}</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted dark:text-stone-300">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
            <p className="border-t border-stone-200/80 pt-4 text-xs text-muted dark:border-stone-700 dark:text-stone-500">
              Investment in the securities market is subject to market risk. Please read all related documents carefully before investing.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
