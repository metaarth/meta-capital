import { Helmet } from 'react-helmet-async'

const SITE = 'Metaarth Capital'
const DEFAULT_DESC =
  'SEBI-registered Category III AIF manager for Ultra-HNIs and family offices, research-driven, disciplined, and governance-led investing.'
const DEFAULT_IMAGE = '/fav.png'

export default function SEO({
  title,
  description = DEFAULT_DESC,
  path = '/',
  noIndex = false,
  image = DEFAULT_IMAGE,
}) {
  const pageTitle = title ? `${title} | ${SITE}` : `${SITE} | Smart Investment Strategies`
  const origin =
    typeof window !== 'undefined'
      ? window.location.origin
      : (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '')
  const canonical = origin ? `${origin}${path === '/' ? '' : path}` : null
  const imageUrl = image?.startsWith('http') ? image : origin ? `${origin}${image}` : image

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {noIndex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow,max-image-preview:large" />
      )}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}
    </Helmet>
  )
}
