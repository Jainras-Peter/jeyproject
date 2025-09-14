"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useOrdersStore } from "../../store/useOrdersStore";
import { formatCurrency } from "../../lib/utils";

const steps = ["Ordered", "Shipped", "Out for Delivery", "Delivered"];

export default function OrdersPage() {
  const { orders, updateOrderStatus } = useOrdersStore();
  const [expandedOrder, setExpandedOrder] = useState<number | null>(null);

  // ✅ Auto-progress orders over time
  useEffect(() => {
    const interval = setInterval(() => {
      orders.forEach((order) => {
        const currentIndex = steps.indexOf(order.status || "Ordered");
        if (currentIndex < steps.length - 1) {
          updateOrderStatus(order.id, steps[currentIndex + 1]);
        }
      });
    }, 10000); // ⏳ every 10 seconds update

    return () => clearInterval(interval);
  }, [orders, updateOrderStatus]);

  if (!orders || orders.length === 0) {
    return (
      <main className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">📦 Your Orders</h1>
        <p className="text-gray-600">No past orders yet. Start shopping!</p>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📦 Your Orders</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg bg-white shadow hover:shadow-md transition"
          >
            {/* ✅ Order Header */}
            <div className="flex justify-between items-center border-b p-4 bg-gray-50">
              <div>
                <p className="font-semibold">Order #{order.id}</p>
                <p className="text-sm text-gray-500">
                  Placed on {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">
                  Status:{" "}
                  <span className="font-semibold text-green-600">
                    {order.status}
                  </span>
                </p>
                <p className="text-sm font-bold">
                  Total: {formatCurrency(order.totalPrice)}
                </p>
              </div>
            </div>

            {/* ✅ Order Items */}
            <div className="p-4 space-y-4">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b pb-4 last:border-b-0"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="rounded-md object-contain border"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-semibold text-green-600">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            {/* ✅ Track Package Button */}
            <div className="p-4 text-right">
              <button
                onClick={() =>
                  setExpandedOrder(expandedOrder === order.id ? null : order.id)
                }
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {expandedOrder === order.id ? "Hide Tracking" : "Track Package"}
              </button>
            </div>

            {/* ✅ Order Tracking Progress */}
            {expandedOrder === order.id && (
              <div className="p-4 bg-gray-50 border-t">
                <h3 className="font-semibold mb-3">📍 Tracking Progress</h3>
                <div className="flex items-center justify-between relative">
                  {steps.map((step, index) => {
                    const currentIndex = steps.indexOf(order.status);
                    const isCompleted = index <= currentIndex;

                    return (
                      <div
                        key={step}
                        className="flex-1 flex flex-col items-center relative"
                      >
                        {/* Circle */}
                        <div
                          className={`w-8 h-8 flex items-center justify-center rounded-full ${
                            isCompleted
                              ? "bg-green-600 text-white"
                              : "bg-gray-300"
                          }`}
                        >
                          {isCompleted ? "✔" : index + 1}
                        </div>
                        {/* Label */}
                        <p
                          className={`mt-2 text-xs font-medium ${
                            isCompleted ? "text-green-600" : "text-gray-500"
                          }`}
                        >
                          {step}
                        </p>
                        {/* Connector */}
                        {index < steps.length - 1 && (
                          <div
                            className={`absolute top-4 left-1/2 w-full h-1 -translate-x-1/2 ${
                              isCompleted ? "bg-green-600" : "bg-gray-300"
                            }`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
