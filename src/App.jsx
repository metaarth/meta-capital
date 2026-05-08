import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import ScrollToTop from '@/components/layout/ScrollToTop'
import Home from '@/pages/Home/Home'
import About from '@/pages/About/About'
import Services from '@/pages/Services/Services'
import InvestmentProducts from '@/pages/InvestmentProducts/InvestmentProducts'
import InvestmentPhilosophy from '@/pages/InvestmentPhilosophy/InvestmentPhilosophy'
import Performance from '@/pages/Performance/Performance'
import AIF from '@/pages/AIF/AIF'
import Journey from '@/pages/Journey/Journey'
import Team from '@/pages/Team/Team'
import PartnerWithUs from '@/pages/PartnerWithUs/PartnerWithUs'
import WhyUs from '@/pages/WhyUs/WhyUs'
import Contact from '@/pages/Contact/Contact'
import Terms from '@/pages/Terms/Terms'
import Privacy from '@/pages/Privacy/Privacy'
import Blog from '@/pages/Blog/Blog'
import { PageSkeleton } from '@/components/ui/skeleton'

const BlogPost = lazy(() => import('@/pages/Blog/BlogPost'))

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/investment-philosophy" element={<InvestmentPhilosophy />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/aif" element={<AIF />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/investment-products" element={<InvestmentProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/:slug"
            element={
              <Suspense fallback={<PageSkeleton />}>
                <BlogPost />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  )
}
