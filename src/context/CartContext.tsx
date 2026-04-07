import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";

export interface CartItem {
  name: string;
  image: string;
  price: string;
  quantity: number;
  extras: string[];
}

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  addItem: (item: CartItem) => void;
  bump: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [bump, setBump] = useState(0);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => [...prev, item]);
    setBump((b) => b + 1);
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, totalItems, addItem, bump }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
