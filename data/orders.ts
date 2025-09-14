// data/orders.ts
import { Order } from "../lib/types";
import products from "./products";

const orders: Order[] = [
  {
    id: "order_1",
    items: [
      { product: products[0], quantity: 1 },
      { product: products[2], quantity: 2 },
    ],
    total: products[0].price * 1 + products[2].price * 2,
    status: "shipped",
    createdAt: "2024-09-01T10:30:00Z",
  },
  {
    id: "order_2",
    items: [{ product: products[1], quantity: 1 }],
    total: products[1].price,
    status: "processing",
    createdAt: "2024-09-03T14:15:00Z",
  },
];

export default orders;
