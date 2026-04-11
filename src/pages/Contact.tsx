import { useState, type FormEvent } from "react";

const BG_FOOD = "/assets/sections/contact-bg.jpg";


interface InfoItemProps {
  icon?: string;
  iconElement?: React.ReactNode;
  title: string;
  titleSize?: string;
  lines: string[];
}

function InfoItem({ icon, iconElement, title, titleSize = "text-[20px]", lines }: InfoItemProps) {
  return (
    <div className="flex gap-[16px] items-start">
      <div className="w-[44px] h-[44px] shrink-0 mt-[2px] flex items-center justify-center">
        {iconElement ?? <img alt="" className="w-full h-full object-contain" src={icon} />}
      </div>
      <div>
        <p className={`font-kulim font-bold text-[#d9d9d9] ${titleSize} tracking-[0.6px] leading-normal`}>
          {title}
        </p>
        <div className="font-kulim font-normal text-[#d9d9d9] text-[15px] tracking-[0.75px] leading-normal mt-[4px]">
          {lines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", detail: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.detail || !form.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", detail: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section className="w-full bg-[#0C1011]">
      {/* Hero Banner */}
      <div className="relative min-h-[clamp(18rem,28vw,18rem)] overflow-hidden flex items-center justify-center">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
          src={BG_FOOD}
        />
        <p className="relative font-kulim font-bold text-white text-[clamp(2rem,3.8vw,3.125rem)] tracking-[1.8px] text-center leading-normal">
          CONTÁCTANOS
        </p>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1700px] mx-auto px-[clamp(1rem,5vw,6.25rem)] pt-[clamp(2.5rem,5vw,3.75rem)] pb-[clamp(3rem,7vw,6.25rem)]">
        <div className="flex gap-[clamp(2rem,8vw,10rem)]">
          {/* Left Column — Info */}
          <div className="flex-1 max-w-[40.625rem] animate-fade-in-up">
            <p className="font-kulim font-bold text-[#d9d9d9] text-[clamp(1.5rem,2.6vw,2.125rem)] tracking-[1.2px] leading-normal">
              PONTE EN CONTACTO
            </p>
            <p className="font-kulim font-normal text-[#d9d9d9] text-[15px] tracking-[0.75px] leading-normal mt-[clamp(0.75rem,1.5vw,1.25rem)]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
              pellentesque sem placerat. In id cursus mi pretium tellus duis convallis pellentesque sem
              placerat. In id cursus pellentesquet. Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
              duis convallis pellentesque sem placerat. In id cursus pellentesquet.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-y-[clamp(1.25rem,2.5vw,1.875rem)] gap-x-[clamp(1rem,1.5vw,1.25rem)] mt-[clamp(2rem,4vw,3.125rem)]">
              <InfoItem
                iconElement={
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                }
                title="UBICACIÓN"
                lines={["Heredia, Costa Rica", "San José, Costa Rica"]}
              />
              <InfoItem
                iconElement={
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                title="CONTACTO"
                lines={["(+506) 1234-5678", "(+506) 1234-5678"]}
              />
              <InfoItem
                iconElement={
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="22,4 12,13 2,4" />
                  </svg>
                }
                title="RESERVACIÓNES"
                lines={["Bunkr@restaurant.com"]}
              />
              <InfoItem
                iconElement={
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                title="HORARIOS"
                lines={["Abierto de 10:00am a 9:00pm", "Cerrado de 10:00pm a 9:00am"]}
              />
            </div>

            {/* Social */}
            <div className="mt-[clamp(1.75rem,3vw,2.5rem)]">
              <p className="font-kulim font-normal text-white text-[15px] tracking-[0.75px] leading-normal">
                FOLLOW US
              </p>
              <div className="flex gap-[16px] mt-[10px] items-center">
                <a href="#" className="transition-opacity hover:opacity-70" aria-label="Facebook">
                  <svg width="12" height="22" viewBox="0 0 12 22" fill="#df9a1b" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 22V12h3.2l.5-3.7H7.5V5.7c0-1 .3-1.8 1.8-1.8H11.5V.6C11.1.5 9.9.3 8.4.3 5.4.3 3.3 2.1 3.3 5.5v2.8H0V12h3.3v10H7.5z" />
                  </svg>
                </a>
                <a href="#" className="transition-opacity hover:opacity-70" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#df9a1b" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-2.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                  </svg>
                </a>
                <a href="#" className="transition-opacity hover:opacity-70" aria-label="X">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#df9a1b" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="flex-1 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <p className="font-kulim font-bold text-white text-[clamp(1.5rem,2.6vw,2.125rem)] tracking-[1.2px] leading-normal">
              TU INFORMACIÓN
            </p>
            <p className="font-kulim font-normal text-[#df9a1b] text-[15px] tracking-[0.75px] leading-normal mt-[4px]">
              Let us know how to get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-[24px] flex flex-col gap-[22px]">
              {/* Name + Email row */}
              <div className="flex gap-[20px]">
                <div className="flex-1">
                  <label className="font-kulim font-normal text-white text-[15px] tracking-[0.75px] leading-normal block mb-[8px]">
                    NOMBRE*
                  </label>
                  <input
                    type="text"
                    placeholder="John Cena"
                    value={form.name}
                    onChange={set("name")}
                    className="w-full h-[48px] bg-[#181c1d] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] font-kulim font-normal text-[15px] text-white placeholder-[#525252] tracking-[0.75px] px-[16px] border-0 outline-none transition-all duration-200 focus:shadow-[0px_0px_0px_2px_rgba(223,154,27,0.4)] focus:text-[#df9a1b]"
                  />
                </div>
                <div className="flex-1">
                  <label className="font-kulim font-normal text-white text-[15px] tracking-[0.75px] leading-normal block mb-[8px]">
                    CORREO ELECTRONICO*
                  </label>
                  <input
                    type="email"
                    placeholder="email@gmail.com"
                    value={form.email}
                    onChange={set("email")}
                    className="w-full h-[48px] bg-[#181c1d] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] font-kulim font-normal text-[15px] text-white placeholder-[#525252] tracking-[0.75px] px-[16px] border-0 outline-none transition-all duration-200 focus:shadow-[0px_0px_0px_2px_rgba(223,154,27,0.4)] focus:text-[#df9a1b]"
                  />
                </div>
              </div>

              {/* Detail */}
              <div>
                <label className="font-kulim font-normal text-white text-[15px] tracking-[0.75px] leading-normal block mb-[8px]">
                  DETALLE*
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  value={form.detail}
                  onChange={set("detail")}
                  className="w-full h-[48px] bg-[#181c1d] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] font-kulim font-normal text-[15px] text-white placeholder-[#525252] tracking-[0.75px] px-[16px] border-0 outline-none transition-all duration-200 focus:shadow-[0px_0px_0px_2px_rgba(223,154,27,0.4)] focus:text-[#df9a1b]"
                />
              </div>

              {/* Comments */}
              <div>
                <label className="font-kulim font-normal text-white text-[15px] tracking-[0.75px] leading-normal block mb-[8px]">
                  COMENTARIOS / PREGUNTAS*
                </label>
                <textarea
                  placeholder="Comentario por hacer"
                  value={form.message}
                  onChange={set("message")}
                  className="w-full h-[145px] bg-[#181c1d] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] font-kulim font-normal text-[15px] text-white placeholder-[#525252] tracking-[0.75px] px-[16px] py-[12px] border-0 outline-none resize-none transition-all duration-200 focus:shadow-[0px_0px_0px_2px_rgba(223,154,27,0.4)] focus:text-[#df9a1b]"
                />
              </div>

              {/* Submit + Status */}
              <div className="flex items-center gap-[16px]">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="h-[48px] px-[32px] bg-[#f3731c] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] font-kulim font-semibold text-[16px] text-white tracking-[2.4px] leading-normal cursor-pointer border-0 outline-none transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "ENVIANDO..." : "CONTACTANOS"}
                </button>

                {status === "success" && (
                  <p className="font-kulim text-[15px] text-green-400 tracking-[0.75px] animate-fade-in-up">
                    Mensaje enviado correctamente.
                  </p>
                )}
                {status === "error" && (
                  <p className="font-kulim text-[15px] text-red-400 tracking-[0.75px] animate-fade-in-up">
                    Por favor completa todos los campos.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
