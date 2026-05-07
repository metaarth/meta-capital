import { Outlet } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
<<<<<<< HEAD
import MutualFundDisclaimer from '@/components/common/MutualFundDisclaimer'
=======
import ScrollToTopButton from '@/components/layout/ScrollToTopButton'
>>>>>>> e2d2c1af9bb2792c024b9c3f82754cd8d48c01ab

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <MutualFundDisclaimer />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}
