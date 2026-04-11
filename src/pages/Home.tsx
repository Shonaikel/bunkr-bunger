import { Hero, BestBurgers, OrderMenu, Information, Services, Location, ActionSection } from "../components";

export default function Home() {
  return (
    <>
      <Hero />
      <BestBurgers />
      <OrderMenu />
      <Information className="mt-[clamp(2.5rem,6vw,5rem)]" />
      <Services className="mt-[clamp(2.5rem,6vw,5rem)]" />
      <Location className="mt-[clamp(2.5rem,6vw,5rem)]" />
      <ActionSection />
    </>
  );
}
