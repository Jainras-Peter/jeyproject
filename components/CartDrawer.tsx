// components/CartDrawer.tsx
"use client";
import { useUIStore } from "../store/useUIStore";
import { useCartStore } from "../store/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "../lib/utils";

export default function CartDrawer() {
  const isOpen = useUIStore((s) => s.isCartOpen);
  const close = useUIStore((s) => s.closeCart);
  const { cart, totalItems, totalPrice, increaseQuantity, decreaseQuantity, clearCart} = useCartStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button className="absolute inset-0 bg-black/50" onClick={close} />
      <aside className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white dark:bg-gray-800 shadow-xl p-6 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Your Cart ({totalItems})</h2>
          <button onClick={close} className="text-gray-600">Close</button>
        </div>

        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 relative">
                  <Image src={item.image} alt={item.name} fill className="object-contain rounded" />
                </div>
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">{formatCurrency(item.price)}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                <div>{item.quantity}</div>
                <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 bg-gray-200 rounded">+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-500">Subtotal</div>
              <div className="text-lg font-bold">{formatCurrency(totalPrice)}</div>
            </div>

            <div className="flex gap-2">
              <button onClick={clearCart} className="px-3 py-2 bg-gray-300 rounded">Clear</button>
              <Link href="/checkout" onClick={close} className="px-3 py-2 bg-green-600 text-white rounded">Checkout</Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
