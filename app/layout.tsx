"use client";

import "./globals.css";
import Link from "next/link";
import { ShoppingCart, BarChart2, Package, Search, User, Menu, X, Home as HomeIcon } from "lucide-react";
import { useCartStore } from "../store/useCartStore";
import { useOrdersStore } from "../store/useOrdersStore";
import { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const totalItems = useCartStore((state) => state.totalItems);
  const totalOrders = useOrdersStore((state) => state.orders.length);

  // const [query] = useState("");
  // const router = useRouter();

  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   router.push(`/?search=${encodeURIComponent(query)}`);
  // };

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Detect scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen font-sans">
        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 right-0 bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 text-white shadow-md transition-all duration-300 z-50 ${
            scrolled ? "shadow-lg bg-opacity-95" : "bg-opacity-100"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
            {/* Left: Logo */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-extrabold hover:text-yellow-300 transition">
                ✨ Trendify
              </Link>
            </div>

            {/* Right: Links (hidden on small screens) */}
            <div className="hidden sm:flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-1 hover:text-yellow-300 transition transform hover:scale-105">
                <HomeIcon size={20} />
                <span className="text-sm font-medium">Home</span>
              </Link>

              <Link href="/orders" className="relative flex items-center space-x-1 hover:text-yellow-300 transition transform hover:scale-105">
                <Package size={20} />
                <span className="text-sm font-medium">Orders</span>
                {totalOrders > 0 && (
                  <span className="absolute -top-2 -right-3 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {totalOrders}
                  </span>
                )}
              </Link>

              <Link href="/analytics" className="flex items-center space-x-1 hover:text-yellow-300 transition transform hover:scale-105">
                <BarChart2 size={20} />
                <span className="text-sm font-medium">Analytics</span>
              </Link>

              <Link href="/account" className="flex items-center space-x-1 hover:text-yellow-300 transition transform hover:scale-105">
                <User size={20} />
                <span className="text-sm font-medium">Account</span>
              </Link>

              <Link href="/cart" className="relative flex items-center space-x-1 hover:text-yellow-300 transition transform hover:scale-105">
                <ShoppingCart size={22} />
                <span className="text-sm font-medium">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>

            {/* Hamburger menu for small screens */}
            <div className="sm:hidden relative">
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 hover:text-yellow-300 transition">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Dropdown Menu */}
              {menuOpen && (
                <div
                  ref={menuRef}
                  className="absolute right-0 mt-2 w-48 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none animate-fade-in z-50"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <Link href="/" className="block px-4 py-2 hover:text-yellow-300" role="menuitem">
                    Home
                  </Link>
                  <Link href="/orders" className="block px-4 py-2 hover:text-yellow-300" role="menuitem">
                    Orders
                  </Link>
                  <Link href="/analytics" className="block px-4 py-2 hover:text-yellow-300" role="menuitem">
                    Analytics
                  </Link>
                  <Link href="/account" className="block px-4 py-2 hover:text-yellow-300" role="menuitem">
                    Account
                  </Link>
                  <Link href="/cart" className="block px-4 py-2 hover:text-yellow-300" role="menuitem">
                    Cart
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white shadow-inner">
            <div className="max-w-7xl mx-auto flex space-x-6 px-4 py-2 overflow-x-auto scrollbar-hide">
              {["Fashion", "Electronics", "Home & Kitchen", "Sports", "Books", "Toys"].map((category) => (
                <Link
                  key={category}
                  href={`/?category=${category.toLowerCase()}`}
                  className="whitespace-nowrap px-4 py-2 hover:bg-gray-600 rounded-md transition transform hover:scale-105"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="pt-28 p-6">{children}</main>

        <style jsx>{`
          .animate-fade-in {
            animation: fadeIn 0.2s ease-out forwards;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </body>
    </html>
  );
}
