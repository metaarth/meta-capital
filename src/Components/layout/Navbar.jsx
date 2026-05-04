import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/context/useTheme'
import { cn } from '@/lib/utils'
import logoUrl from '@/assets/logo.png'

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Investment Philosophy', href: '/investment-philosophy' },
  { name: 'Performance', href: '/performance' },
  { name: 'AIF', href: '/aif' },
  { name: 'Insights', href: '/blog' },
  { name: 'Journey', href: '/journey' },
  { name: 'Contact', href: '/contact' },
]

const desktopLinkClass = ({ isActive }) =>
  cn(
    'whitespace-nowrap rounded-md px-2.5 py-1.5 text-[13px] font-medium transition-all xl:text-sm',
    isActive
      ? 'border border-accent-bright text-navy shadow-sm dark:border-accent-bright dark:text-white'
      : 'border border-transparent text-navy/90 hover:text-accent dark:text-stone-200 dark:hover:text-accent-bright'
  )

const mobileLinkClass = ({ isActive }) =>
  cn(
    'rounded-lg px-3 py-2.5 text-sm font-medium',
    isActive
      ? 'border border-accent-bright bg-accent-bright/10 text-accent dark:text-accent-bright'
      : 'text-stone-800 dark:text-stone-100'
  )

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className="border-b border-stone-200/60 bg-[#fdfcf8]/90 shadow-[var(--shadow-glass)] backdrop-blur-xl dark:border-stone-700/40 dark:bg-[#1c1916]/92"
        role="banner"
      >
        <nav
          className="mx-auto flex min-h-16 items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8"
          aria-label="Primary"
        >
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2 rounded-md outline-none ring-accent/30 focus-visible:ring-2"
          >
            <img
              src={logoUrl}
              alt="Metaarth Capital"
              className="h-11 w-auto object-contain object-left sm:h-12 md:h-[52px]"
              width={260}
              height={52}
            />
          </Link>

          <div className="hidden items-center gap-2 lg:flex xl:gap-3">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} to={link.href} className={desktopLinkClass}>
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="size-5" />
              ) : (
                <Moon className="size-5" />
              )}
            </Button>
            <Button asChild variant="accent" className="hidden sm:inline-flex" size="sm">
              <Link to="/contact">Book consultation</Link>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label="Menu"
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-stone-200 bg-[#fdfcf8]/98 backdrop-blur-xl dark:border-stone-700 dark:bg-[#1c1916]/98 lg:hidden"
          >
            <div className="flex max-h-[min(70vh,520px)] flex-col gap-1 overflow-y-auto px-4 py-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={mobileLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <Button asChild variant="accent" className="mt-2 w-full">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Book consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
