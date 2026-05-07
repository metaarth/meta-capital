import SEO from '@/components/seo/SEO'

const TERMS = [
  'The promotional offer is being managed by Metaarth Capital.',
  'This offer entitles you to trade with 0 brokerage charged across all segments for 1st month from the date of account opening up to Rs.1000.',
  'All new accounts opened are eligible for Zero Annual Maintenance Charges (AMC) for the first year from the date of account activation.',
  'This offer can only be availed once per user.',
  'Family account trades cannot be clubbed together for this offer.',
  'This offer is not valid for staff accounts.',
  'This scheme is valid for online channel only.',
  'If the account is transferred to any branch/franchise/remisier after opening an online account, all the above-mentioned schemes and offers will not be applicable.',
  'Brokerage will not exceed the SEBI prescribed limit.',
  'Statutory levies and taxes will be levied to clients as prescribed by the regulators.',
  'Metaarth Capital reserves the right, in its absolute discretion, to change, alter, or discontinue the offer and alter the terms and conditions from time to time, with prior communication to client via email.',
  'In case of any dispute, the decision of Metaarth Capital management will be final and binding.',
  'You hereby grant explicit, irrevocable, and informed consent to Metaarth Capital (the Company) to utilize your provided credentials, namely the mobile number, for the sole purpose of Data Enrichment.',
  'You authorize the Company to access, collate, and process information from public records, authorized financial institutions, third-party databases, and other legal sources to compile a comprehensive profile of your movable and immovable assets (the Enriched Data). This Enriched Data will be used exclusively by the Company to analyze your financial profile and offer customized products, services, and exclusive benefits aligned to your profile.',
  'You acknowledge that the Company shall treat the Enriched Data with strict confidentiality and shall implement and maintain industry-standard technical and organizational measures to ensure the security and privacy of all collected data.',
  'By digitally accepting this authorization content, you confirm you have fully understood the scope of this authorization.',
  'Investment in the securities market is subject to market risk. Please read all related documents carefully before investing.',
]

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & conditions"
        description="Promotional offer terms and conditions."
        path="/terms-and-conditions"
      />

      <section className="border-b border-stone-200/60 bg-section-mesh py-16 dark:border-stone-800 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent dark:text-accent-bright">
            Legal
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-navy dark:text-white sm:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm text-muted dark:text-stone-400">
            Please read these terms carefully before availing the promotional offer.
          </p>
        </div>
      </section>

      <section className="bg-section-mesh py-14 dark:border-stone-800 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-stone-200/90 bg-white/95 p-6 shadow-(--shadow-card) dark:border-stone-700 dark:bg-white/5 sm:p-8">
            <ol className="space-y-3 pl-5 text-sm leading-relaxed text-muted marker:text-accent dark:text-stone-300 dark:marker:text-accent-bright">
              {TERMS.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}
