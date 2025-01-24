import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  customization?: {
    size?: string;
    color?: string;
    fabric?: string;
    embellishments?: string[];
  };
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  updateCustomization: (itemId: string, customization: CartItem['customization']) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find(
            (i) => 
              i.id === item.id && 
              JSON.stringify(i.customization) === JSON.stringify(item.customization)
          );

          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i === existingItem
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }

          return { items: [...state.items, item] };
        });
      },
      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== itemId),
        })),
      updateQuantity: (itemId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        })),
      updateCustomization: (itemId, customization) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, customization } : item
          ),
        })),
      clearCart: () => set({ items: [] }),
      getTotal: () => {
        const items = get().items;
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);