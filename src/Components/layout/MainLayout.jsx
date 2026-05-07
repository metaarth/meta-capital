import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { animate, inView, stagger } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTopButton from '@/components/layout/ScrollToTopButton'

export default function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    const main = document.getElementById('main-content')
    if (!main) return undefined

    const sections = Array.from(main.querySelectorAll('section'))
    if (!sections.length) return undefined

    const stops = sections.map((section) =>
      inView(
        section,
        () => {
          animate(
            section,
            { opacity: [0, 1], y: [26, 0] },
            { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
          )

          const children = section.querySelectorAll(':scope > *')
          if (children.length) {
            animate(
              children,
              { opacity: [0.85, 1], y: [12, 0] },
              { duration: 0.45, delay: stagger(0.04), ease: 'easeOut' }
            )
          }
        },
        { amount: 0.18, margin: '0px 0px -10% 0px' }
      )
    )

    return () => {
      stops.forEach((stop) => stop && stop())
    }
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}
