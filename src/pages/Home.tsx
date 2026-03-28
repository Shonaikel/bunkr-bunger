import { Header } from "../components";
import { LOGO_URL, CART_ICON_URL } from "../constants/assets";

export default function Home() {
  return (
    <div>
      <Header
        logoSrc={LOGO_URL}
        cartIconSrc={CART_ICON_URL}
      />
      <div className="p-8">
        <h1 className="text-3xl font-bold">Home</h1>
        <p className="mt-2 text-gray-500">Welcome to bunkr-bunger.</p>
      </div>
    </div>
  )
}
