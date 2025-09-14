"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../store/useCartStore";

export default function Navbar() {
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          🛍️ MyShop
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="hover:text-blue-500 transition-colors font-medium"
          >
            Home
          </Link>

          <Link
            href="/cart"
            className="relative flex items-center hover:text-blue-500 transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
