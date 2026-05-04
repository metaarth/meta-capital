import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import logoUrl from '@/assets/logo.png'

const footerNav = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Investment philosophy', to: '/investment-philosophy' },
      { label: 'Performance', to: '/performance' },
      { label: 'AIF', to: '/aif' },
    ],
  },
  {
    title: 'Investors',
    links: [
      { label: 'Journey', to: '/journey' },
      { label: 'Services', to: '/services' },
      { label: 'Investment products', to: '/investment-products' },
      { label: 'Insights', to: '/blog' },
    ],
  },
  {
    title: 'Contact',
    links: [{ label: 'Contact us', to: '/contact' }],
  },
]

const DISCLAIMER =
  'Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing. Past performance is not indicative of future results. This website is for information only and does not constitute investment advice or an offer to sell.'

export default function Footer() {
  return (
    <footer
      className="border-t border-stone-700/50 bg-navy text-slate-300"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <img
                src={logoUrl}
                alt="Metaarth Capital"
                className="h-10 w-auto max-w-[220px] object-contain object-left"
                width={220}
                height={44}
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Professional investment management for Ultra-HNIs and family
              offices — disciplined, research-driven strategies with regulatory
              oversight.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              {DISCLAIMER}
            </p>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-slate-400 transition-colors hover:text-gold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-t border-stone-600/50 pt-10 sm:grid-cols-3">
          <div className="flex gap-3 text-sm">
            <MapPin className="mt-0.5 size-4 shrink-0 text-brand-amber" />
            <span>
              Office Space No. Part 8 &amp; 9, Saran Chamber-2, Lucknow — 226001,
              India
            </span>
          </div>
          <div className="flex gap-3 text-sm">
            <Phone className="mt-0.5 size-4 shrink-0 text-brand-amber" />
            <span>
              <a href="tel:+919839906754" className="hover:text-white">
                +91 98399 06754
              </a>
              <span className="mx-1 text-slate-600">·</span>
              <a href="tel:+918299559257" className="hover:text-white">
                +91 82995 59257
              </a>
            </span>
          </div>
          <div className="flex gap-3 text-sm">
            <Mail className="mt-0.5 size-4 shrink-0 text-brand-amber" />
            <a href="mailto:info@metaarth.com" className="hover:text-white">
              info@metaarth.com
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Metaarth Capital. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
