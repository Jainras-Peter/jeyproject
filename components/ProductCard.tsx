// components/ProductCard.tsx
"use client";

import Image from "next/image";
import { formatCurrency } from "../lib/utils";
import { useCartStore } from "../store/useCartStore";

type ProductProps = {
  id: number | string;
  name: string;
  description: string;
  price: number;
  image: string;
  discount?: number;
  tag?: string;
  isBestseller?: boolean;  // New property for Bestseller
  category?: string;
};

export default function ProductCard(p: ProductProps) {
  const addToCart = useCartStore((s) => s.addToCart);
  const discountedPrice = p.discount && p.discount > 0 ? Math.round(p.price * (1 - p.discount / 100)) : p.price;

  return (
    <article className="relative border rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition p-4 flex flex-col">

      {/* Discount tag */}
      {p.discount && p.discount > 0 && (
        <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
          {p.discount}% off
        </span>
      )}

      {/* Custom tag */}
      {p.tag && (
        <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded shadow-sm">
          {p.tag}
        </span>
      )}

      {/* Bestseller tag */}
      {p.isBestseller && (
        <span className="absolute top-10 right-3 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded shadow-sm">
          Bestseller
        </span>
      )}

      <div className="relative w-full h-48 mb-4">
        <Image src={p.image} alt={p.name} fill className="object-contain rounded-md bg-white" />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{p.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">{p.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <div>
          {p.discount && p.discount > 0 ? (
            <div className="space-y-0">
              <div className="text-sm text-gray-400 line-through">{formatCurrency(p.price)}</div>
              <div className="text-lg font-bold text-green-600">{formatCurrency(discountedPrice)}</div>
            </div>
          ) : (
            <div className="text-lg font-bold">{formatCurrency(p.price)}</div>
          )}
        </div>

        <button
          onClick={() =>
            addToCart({
              id: p.id,
              name: p.name,
              description: p.description,
              price: p.price,
              image: p.image,
            })
          }
          className="ml-3 inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>
    </article>
  );
}
