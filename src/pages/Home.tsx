import { Hero, BestBurgers, Information, Services, Location, ActionSection } from "../components";

export default function Home() {
  return (
    <>
      <Hero />
      <BestBurgers />
      <Information className="mt-[80px]" />
      <Services className="mt-[80px]" />
      <Location className="mt-[80px]" />
      <ActionSection />
    </>
  );
}
