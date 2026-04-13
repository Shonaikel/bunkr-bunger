import { Outlet } from 'react-router-dom'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import CartSlidePanel from '../components/organisms/CartSlidePanel'
import { LOGO_URL } from '../constants/assets'

export default function RootLayout() {
  return (
    <div className="relative bg-[#0C1011] flex flex-col min-h-screen">
      <Header logoSrc={LOGO_URL} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartSlidePanel />
    </div>
  )
}
