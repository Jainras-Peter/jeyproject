"use client";

import { useCartStore } from "../../store/useCartStore";
import Image from "next/image";
import { formatCurrency } from "../../lib/utils";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const {
    cart,
    totalItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const router = useRouter();

  if (cart.length === 0) {
    return (
      <main className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600 mb-6">🛒 Your cart is empty.</p>
        <button
          onClick={() => router.push("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Continue Shopping
        </button>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded-lg shadow bg-white"
          >
            <div className="flex items-center space-x-4">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md object-contain"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">
                  {formatCurrency(item.price)}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    ➖
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    ➕
                  </button>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-blue-600">
                {formatCurrency(item.price * (item.quantity || 1))}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div>
          <p className="text-lg font-semibold">
            Total Items: <span className="text-blue-600">{totalItems}</span>
          </p>
          <p className="text-lg font-semibold">
            Total Price:{" "}
            <span className="text-green-600">{formatCurrency(totalPrice)}</span>
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => router.push("/checkout")}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 font-bold"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </main>
  );
}
