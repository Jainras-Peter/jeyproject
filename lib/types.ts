// lib/types.ts

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // in cents
  image: string;
  category: string;
  stock: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Order = {
  id: string;
  items: CartItem[];
  total: number; // in cents
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: string; // ISO date
};

export type AnalyticsData = {
  salesByDay: { date: string; total: number }[];
  topProducts: { product: Product; sales: number }[];
  revenue: number;
  customers: number;
};
