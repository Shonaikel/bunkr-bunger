import { useState } from "react";
import { LOCATIONS_HERO_URL } from "../constants/assets";

interface LocationData {
  id: string;
  name: string;
  phone: string;
  hours: string;
  mapEmbed: string;
}

const LOCATIONS: LocationData[] = [
  {
    id: "heredia",
    name: "HEREDIA",
    phone: "(+506) 1234-5678",
    hours: "10:00am a 5:00pm",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.4!2d-84.1162!3d9.9981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fa8d0a5f1c5d%3A0x0!2sHeredia%2C%20Costa%20Rica!5e0!3m2!1ses!2scr!4v1700000000000",
  },
  {
    id: "san-jose",
    name: "SAN JOSÉ",
    phone: "(+506) 1234-5678",
    hours: "10:00am a 5:00pm",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.0!2d-84.0833!3d9.9333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e342c50d15c5%3A0x5fc0f1dbb80769e0!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1ses!2scr!4v1700000000000",
  },
];

interface LocationCardProps {
  location: LocationData;
  isSelected: boolean;
  onClick: () => void;
}

function LocationCard({ location, isSelected, onClick }: LocationCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full max-w-[39rem] min-h-[clamp(5.5rem,8vw,6.875rem)] rounded-[10px] px-[clamp(1rem,1.6vw,1.625rem)] py-[14px] outline-none
        text-left cursor-pointer transition-all duration-200 border border-[#2a2e2f]
        hover:scale-[1.02] active:scale-[0.98]
        ${isSelected ? "bg-[#222728]" : "bg-[#181c1d] hover:bg-[#1e2223]"}`}
    >
      <p className="font-kulim font-bold text-[#df9a1b] text-[20px] tracking-[0.6px] leading-normal">
        {location.name}
      </p>
      <div className="font-kulim font-normal text-white text-[15px] tracking-[0.75px] leading-normal">
        <p>Telefono: {location.phone}</p>
        <p>Horario: {location.hours}</p>
      </div>
    </button>
  );
}

export default function Locations() {
  const [selectedId, setSelectedId] = useState(LOCATIONS[0].id);
  const selected = LOCATIONS.find((l) => l.id === selectedId) ?? LOCATIONS[0];

  return (
    <section className="w-full bg-[#0C1011]">
      {/* Hero Banner */}
      <div className="relative min-h-[clamp(18rem,28vw,18rem)] overflow-hidden flex items-center justify-center">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
          src={LOCATIONS_HERO_URL}
        />
        <p className="relative font-kulim font-bold text-white text-[clamp(2rem,3.8vw,3.125rem)] tracking-[1.8px] text-center leading-normal">
          ENCUENTRA TU RESTAURANTE
        </p>
      </div>

      {/* Location Content */}
      <div className="max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1700px] mx-auto px-[clamp(1rem,5vw,6.25rem)] pt-[clamp(3rem,6vw,5.625rem)] pb-[clamp(4rem,12vw,12.375rem)]">
        <div className="flex gap-[clamp(1.5rem,3vw,2.5rem)] items-start">
          {/* Left Column — Restaurant list */}
          <div className="shrink-0 mt-[4px] animate-fade-in-up">
            <p className="font-kulim font-bold text-white text-[clamp(1.5rem,2.6vw,2.125rem)] tracking-[1.2px] leading-normal">
              RESTAURANTES
            </p>

            <div className="mt-[clamp(0.75rem,1.5vw,1.25rem)] flex flex-col gap-[clamp(0.75rem,1.2vw,1rem)]">
              {LOCATIONS.map((loc) => (
                <LocationCard
                  key={loc.id}
                  location={loc}
                  isSelected={loc.id === selectedId}
                  onClick={() => setSelectedId(loc.id)}
                />
              ))}
            </div>
          </div>

          {/* Right Column — Google Maps */}
          <div className="relative flex-1 h-[clamp(18rem,26vw,23.5rem)] rounded-[10px] overflow-hidden animate-fade-in-up border border-[#2a2e2f]" style={{ animationDelay: "0.15s" }}>
            <iframe
              key={selected.id}
              title={`Mapa de ${selected.name}`}
              src={selected.mapEmbed}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
