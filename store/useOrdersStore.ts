import { create } from "zustand";
// import { CartItem } from "./useCartStore"; // Import if it's in another file, or redefine it here

interface Order {
  id: string;
  // items: CartItem[];
  totalPrice: number;
  date: string;
  customer: {
    name: string;
    email: string;
    address: string;
    city: string;
    postal: string;
  };
  status: string;
}

interface OrdersStore {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: string) => void;
}

export const useOrdersStore = create<OrdersStore>((set) => ({
  orders: [],
  addOrder: (order) =>
    set((state) => ({
      orders: [...state.orders, { ...order, status: "Ordered" }],
    })),
  updateOrderStatus: (orderId, status) =>
    set((state) => ({
      orders: state.orders.map((o) =>
        o.id === orderId ? { ...o, status } : o
      ),
    })),
}));
