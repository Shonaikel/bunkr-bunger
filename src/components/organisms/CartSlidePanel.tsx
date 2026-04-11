import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

export default function CartSlidePanel() {
  const { items, totalPrice, isOpen, setIsOpen, removeItem, updateQuantity } = useCart();
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setIsOpen(false);
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen && !closing) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-[4px]"
        style={{
          animation: closing
            ? "fade-out 0.3s ease forwards"
            : "fade-in 0.3s ease forwards",
        }}
      />

      {/* Panel */}
      <div
        className="relative w-[460px] h-full bg-[#0c1011] flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
        style={{
          animation: closing
            ? "slide-out-right-panel 0.3s ease forwards"
            : "slide-in-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-[30px] py-[20px] border-b border-[#2a2a2a]">
          <div className="flex items-center gap-[12px]">
            <svg viewBox="0 0 29.1556 29.1556" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px]">
              <path d="M8.74667 23.3244C7.14311 23.3244 5.84569 24.6364 5.84569 26.24C5.84569 27.8436 7.14311 29.1556 8.74667 29.1556C10.3502 29.1556 11.6622 27.8436 11.6622 26.24C11.6622 24.6364 10.3502 23.3244 8.74667 23.3244ZM0 0V2.91556H2.91556L8.16356 13.9801L6.19556 17.5516C5.96231 17.9598 5.83111 18.4409 5.83111 18.9511C5.83111 20.5547 7.14311 21.8667 8.74667 21.8667H26.24V18.9511H9.35893C9.15484 18.9511 8.99449 18.7908 8.99449 18.5867L9.03822 18.4117L10.3502 16.0356H21.2107C22.304 16.0356 23.2661 15.4379 23.7618 14.534L28.9806 5.07307C29.0972 4.86898 29.1556 4.62116 29.1556 4.37333C29.1556 3.57156 28.4996 2.91556 27.6978 2.91556H6.13724L4.76693 0H0ZM23.3244 23.3244C21.7209 23.3244 20.4235 24.6364 20.4235 26.24C20.4235 27.8436 21.7209 29.1556 23.3244 29.1556C24.928 29.1556 26.24 27.8436 26.24 26.24C26.24 24.6364 24.928 23.3244 23.3244 23.3244Z" fill="#d9d9d9" />
            </svg>
            <p className="font-kulim font-bold text-white text-[22px] tracking-[0.6px]">Tu Carrito</p>
          </div>
          <button onClick={handleClose} className="text-[#d9d9d9] hover:text-white transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-[20px] py-[20px]">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-[16px] opacity-50">
              <svg viewBox="0 0 29.1556 29.1556" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[60px] h-[60px]">
                <path d="M8.74667 23.3244C7.14311 23.3244 5.84569 24.6364 5.84569 26.24C5.84569 27.8436 7.14311 29.1556 8.74667 29.1556C10.3502 29.1556 11.6622 27.8436 11.6622 26.24C11.6622 24.6364 10.3502 23.3244 8.74667 23.3244ZM0 0V2.91556H2.91556L8.16356 13.9801L6.19556 17.5516C5.96231 17.9598 5.83111 18.4409 5.83111 18.9511C5.83111 20.5547 7.14311 21.8667 8.74667 21.8667H26.24V18.9511H9.35893C9.15484 18.9511 8.99449 18.7908 8.99449 18.5867L9.03822 18.4117L10.3502 16.0356H21.2107C22.304 16.0356 23.2661 15.4379 23.7618 14.534L28.9806 5.07307C29.0972 4.86898 29.1556 4.62116 29.1556 4.37333C29.1556 3.57156 28.4996 2.91556 27.6978 2.91556H6.13724L4.76693 0H0ZM23.3244 23.3244C21.7209 23.3244 20.4235 24.6364 20.4235 26.24C20.4235 27.8436 21.7209 29.1556 23.3244 29.1556C24.928 29.1556 26.24 27.8436 26.24 26.24C26.24 24.6364 24.928 23.3244 23.3244 23.3244Z" fill="#525252" />
              </svg>
              <p className="font-kulim font-bold text-[#7a7a7a] text-[18px] tracking-[0.5px]">Tu carrito está vacío</p>
              <p className="font-kulim font-normal text-[#525252] text-[14px] tracking-[0.4px]">Agrega algunas hamburguesas deliciosas</p>
            </div>
          ) : (
            <div className="flex flex-col gap-[12px]">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1a1a1f] rounded-[12px] p-[16px] flex gap-[16px] items-start animate-fade-in-up"
                >
                  {/* Burger image */}
                  <div className="w-[80px] h-[70px] shrink-0 rounded-[8px] overflow-hidden bg-[#131017]">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-kulim font-bold text-white text-[16px] tracking-[0.5px]">{item.name}</p>
                        <p className="font-kulim font-bold text-[#f3731c] text-[15px] tracking-[0.4px] mt-[2px]">
                          ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                        </p>
                        {item.extras.length > 0 && (
                          <div className="flex flex-wrap gap-[4px] mt-[6px]">
                            {item.extras.map((extra) => (
                              <span
                                key={extra}
                                className="h-[22px] px-[8px] bg-[rgba(243,115,28,0.15)] border border-[#f3731c] rounded-[4px] flex items-center font-kulim font-normal text-[#d9d9d9] text-[11px] tracking-[0.3px]"
                              >
                                {extra}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      {/* Delete */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[#525252] hover:text-[#f3731c] transition-colors cursor-pointer p-[4px]"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-[12px] mt-[10px]">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-[28px] h-[28px] rounded-full bg-[#2a2a2f] flex items-center justify-center text-[#d9d9d9] hover:bg-[#3a3a3f] transition-colors cursor-pointer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                      <p className="font-kulim font-semibold text-white text-[15px] w-[20px] text-center">{item.quantity}</p>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-[28px] h-[28px] rounded-full bg-[#f3731c] flex items-center justify-center text-white hover:opacity-90 transition-opacity cursor-pointer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer — Total + CTA */}
        {items.length > 0 && (
          <div className="px-[30px] pb-[24px] pt-[16px] border-t border-[#2a2a2a]">
            <div className="flex items-center justify-between mb-[16px]">
              <p className="font-kulim font-normal text-[#7a7a7a] text-[16px] tracking-[0.4px]">Total</p>
              <p className="font-kulim font-bold text-[#f3731c] text-[28px] tracking-[1px]">${totalPrice.toFixed(2)}</p>
            </div>
            <button className="w-full h-[48px] bg-[#f3731c] rounded-[25px] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
              <p className="font-kulim font-semibold text-white text-[16px] tracking-[0.5px]">Ver Carrito y Pagar</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
