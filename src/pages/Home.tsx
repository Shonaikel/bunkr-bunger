import { Header, Hero, BestBurgers, Information, Services, Location, ActionSection, Footer } from "../components";
import { LOGO_URL, CART_ICON_URL } from "../constants/assets";

export default function Home() {
  return (
    <div className="relative bg-[#0C1011]">
      <Header logoSrc={LOGO_URL} cartIconSrc={CART_ICON_URL} />
      <Hero />
      <BestBurgers />
      <Information className="mt-[80px]" />
      <Services className="mt-[80px]" />
      <Location className="mt-[80px]" />
      <ActionSection />
      <Footer />
    </div>
  );
}
