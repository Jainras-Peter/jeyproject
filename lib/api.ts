// lib/api.ts
import { Product, Order, AnalyticsData } from "./types";
import { generateId } from "./utils";
import products from "../data/products";
import orders from "../data/orders";

export async function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => setTimeout(() => resolve(products), 300));
}

export async function fetchProduct(id: string): Promise<Product | null> {
  const all = await fetchProducts();
  return all.find((p) => p.id === id) || null;
}

export async function fetchOrders(): Promise<Order[]> {
  return new Promise((resolve) => setTimeout(() => resolve(orders), 300));
}

export async function createOrder(order: Omit<Order, "id" | "createdAt">): Promise<Order> {
  const newOrder: Order = {
    ...order,
    id: generateId("order"),
    createdAt: new Date().toISOString(),
  };
  orders.push(newOrder);
  return new Promise((resolve) => setTimeout(() => resolve(newOrder), 300));
}

export async function fetchAnalytics(): Promise<AnalyticsData> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          salesByDay: [
            { date: "2024-09-01", total: 30000 },
            { date: "2024-09-02", total: 42000 },
            { date: "2024-09-03", total: 25000 },
          ],
          topProducts: [
            { product: products[0], sales: 120 },
            { product: products[1], sales: 80 },
          ],
          revenue: 100000,
          customers: 240,
        }),
      300
    )
  );
}
