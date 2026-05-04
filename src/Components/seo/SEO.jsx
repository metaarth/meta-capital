import { Helmet } from 'react-helmet-async'

const SITE = 'Metaarth Capital'
const DEFAULT_DESC =
  'SEBI-registered investment management for Ultra-HNIs and family offices — mutual funds, SIP, goal-based planning, and disciplined portfolio strategies.'

export default function SEO({
  title,
  description = DEFAULT_DESC,
  path = '/',
  noIndex = false,
}) {
  const pageTitle = title ? `${title} | ${SITE}` : `${SITE} | Smart Investment Strategies`
  const origin =
    typeof window !== 'undefined'
      ? window.location.origin
      : (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '')
  const canonical = origin ? `${origin}${path === '/' ? '' : path}` : null

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
