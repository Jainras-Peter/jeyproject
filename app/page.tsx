"use client";

import Image from "next/image";
import products from "../data/products";
import { useCartStore } from "../store/useCartStore";
import { formatCurrency } from "../lib/utils";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

export default function HomePage() {
  const addToCart = useCartStore((state) => state.addToCart);
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialSearch = searchParams.get("search") || "";
  const [query, setQuery] = useState(initialSearch);

  const rawCategory = searchParams.get("category") || "all";
  const categoryParam = decodeURIComponent(rawCategory).trim();

  useEffect(() => {
    if (categoryParam.toLowerCase() === "home & kitchen") {
      router.replace(`/?category=home`);
    }
  }, [categoryParam, router]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/?search=${encodeURIComponent(query)}&category=${encodeURIComponent(categoryParam.trim())}`
    );
  };

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      categoryParam.toLowerCase() === "all" ||
      p.category.toLowerCase() === categoryParam.toLowerCase();
    const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <main className="pt-6">
      <div className="max-w-7xl mx-auto p-4">
        <div className="sticky top-[60px]  z-40">
          <form
          onSubmit={handleSearch}
          className="mb-6 flex items-center bg-white rounded-full shadow-sm border border-gray-300 overflow-hidden"
          >
            <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 py-2 px-4 text-sm focus:outline-none"
            />
            <button type="submit" className="p-3 hover:text-blue-600 transition">
            <Search size={20} />
            </button>
          </form>
        </div>


        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 border-b border-gray-300 pb-2">
          Explore Top Deals
        </h1>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-500">No products found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => {
              const discountedPrice = p.discount
                ? p.price - (p.price * p.discount) / 100
                : p.price;

              const isBestseller = p.id === 1 || p.id === 2;

              return (
                <div
                  key={p.id}
                  className="relative border bg-white rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden"
                >
                  {p.discount && (
                    <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
                      {p.discount}% off
                    </span>
                  )}

                  {p.isBestseller && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded shadow-sm">
                      Bestseller
                    </span>
                  )}

                  <Image
                    src={p.image}
                    alt={p.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-contain bg-gray-50"
                  />
                  <div className="p-4">
                    <h2 className="font-semibold text-lg mb-2">{p.name}</h2>
                    <p className="text-sm text-gray-500 mb-4">{p.description}</p>
                    {p.discount ? (
                      <div>
                        <p className="text-sm text-gray-500 line-through">
                          {formatCurrency(p.price)}
                        </p>
                        <p className="text-lg font-bold text-green-600">
                          {formatCurrency(discountedPrice)}
                        </p>
                      </div>
                    ) : (
                      <p className="text-lg font-bold">{formatCurrency(p.price)}</p>
                    )}
                    <button
                      onClick={() => addToCart(p)}
                      className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                      🛒 Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
