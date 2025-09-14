import { create } from "zustand";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: number;
  items: CartItem[];
  total: number;
  date: string;
}

interface CartStore {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  orders: Order[];
  addToCart: (product: CartItem) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  checkout: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  orders: [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);
      let updatedCart;
      if (existing) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }
      return {
        cart: updatedCart,
        totalItems: updatedCart.reduce((sum, i) => sum + i.quantity, 0),
        totalPrice: updatedCart.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        ),
      };
    }),

  increaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        cart: updatedCart,
        totalItems: updatedCart.reduce((sum, i) => sum + i.quantity, 0),
        totalPrice: updatedCart.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        ),
      };
    }),

  decreaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
      return {
        cart: updatedCart,
        totalItems: updatedCart.reduce((sum, i) => sum + i.quantity, 0),
        totalPrice: updatedCart.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        ),
      };
    }),

  clearCart: () =>
    set({
      cart: [],
      totalItems: 0,
      totalPrice: 0,
    }),

  checkout: () =>
    set((state) => {
      if (state.cart.length === 0) return state;
      const newOrder: Order = {
        id: Date.now(),
        items: state.cart,
        total: state.totalPrice,
        date: new Date().toLocaleString(),
      };
      return {
        orders: [...state.orders, newOrder],
        cart: [],
        totalItems: 0,
        totalPrice: 0,
      };
    }),
}));
