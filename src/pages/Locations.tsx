import { useState } from "react";
import {
  LOCATIONS_HERO_URL,
  LOCATIONS_MAP_URL,
  LOCATIONS_MAP_SJ_URL,
  LOCATIONS_MAP_TOGGLE_URL,
  LOCATIONS_MAP_EXPAND_URL,
} from "../constants/assets";

interface LocationData {
  id: string;
  name: string;
  phone: string;
  hours: string;
  mapUrl: string;
}

const LOCATIONS: LocationData[] = [
  {
    id: "heredia",
    name: "HEREDIA",
    phone: "(+506) 1234-5678",
    hours: "10:00am a 5:00pm",
    mapUrl: LOCATIONS_MAP_URL,
  },
  {
    id: "san-jose",
    name: "SAN JOSÉ",
    phone: "(+506) 1234-5678",
    hours: "10:00am a 5:00pm",
    mapUrl: LOCATIONS_MAP_SJ_URL,
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
      className={`w-[624px] h-[110px] rounded-[10px] px-[26px] py-[14px] border-0 outline-none
        text-left cursor-pointer transition-colors duration-200
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
      {/* Hero Banner — 67px header overlap + 328px visible */}
      <div className="relative h-[395px] overflow-hidden">
        <div className="absolute inset-0 opacity-40 overflow-hidden">
          <img
            alt=""
            className="absolute w-full h-[326%] top-[-110%] left-0 object-cover pointer-events-none"
            src={LOCATIONS_HERO_URL}
          />
        </div>
        <p className="relative font-kulim font-bold text-white text-[50px] tracking-[1.8px] text-center leading-normal pt-[143px]">
          ENCUENTRA TU RESTAURANTE
        </p>
      </div>

      {/* Location Content */}
      <div className="px-[100px] pt-[90px] pb-[198px]">
        <div className="flex gap-[40px] items-start">
          {/* Left Column — Restaurant list */}
          <div className="shrink-0 mt-[4px] animate-fade-in-up">
            <p className="font-kulim font-bold text-white text-[34px] tracking-[1.2px] leading-normal">
              RESTAURANTES
            </p>

            <div className="mt-[20px] flex flex-col gap-[16px]">
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

          {/* Right Column — Map */}
          <div className="relative flex-1 h-[376px] rounded-[1px] overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <img
              alt="Mapa de ubicaciones"
              className="w-full h-full object-cover pointer-events-none transition-opacity duration-300"
              src={selected.mapUrl}
            />
            {/* Map/Satellite toggle */}
            <div className="absolute top-[16px] left-[16px]">
              <img
                alt="Mapa / Satélite"
                className="h-[36px] w-[171px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                src={LOCATIONS_MAP_TOGGLE_URL}
              />
            </div>
            {/* Expand button */}
            <div className="absolute top-[16px] right-[10px]">
              <img
                alt="Expandir mapa"
                className="h-[38px] w-[40px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                src={LOCATIONS_MAP_EXPAND_URL}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
