import { createContext, useContext, useState, useCallback, useRef } from "react";
import type { ReactNode } from "react";

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: string;
  quantity: number;
  extras: string[];
}

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  bump: number;
}

let nextId = 1;

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [bump, setBump] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const hasOpenedOnce = useRef(false);

  const addItem = useCallback((item: Omit<CartItem, "id">) => {
    setItems((prev) => [...prev, { ...item, id: nextId++ }]);
    setBump((b) => b + 1);
    if (!hasOpenedOnce.current) {
      setIsOpen(true);
      hasOpenedOnce.current = true;
    }
  }, []);

  const removeItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity < 1) return;
    if (quantity > 99) return;
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  const totalPrice = items.reduce((sum, i) => {
    const price = parseFloat(i.price.replace("$", ""));
    return sum + price * i.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{ items, totalItems, totalPrice, isOpen, setIsOpen, addItem, removeItem, updateQuantity, bump }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
