import { Outlet } from 'react-router-dom'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import { LOGO_URL } from '../constants/assets'

export default function RootLayout() {
  return (
    <div className="relative bg-[#0C1011]">
      <Header logoSrc={LOGO_URL} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
