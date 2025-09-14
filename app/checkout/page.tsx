"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCartStore } from "../../store/useCartStore";
import { useOrdersStore } from "../../store/useOrdersStore";
import { useRouter } from "next/navigation";
import { formatCurrency } from "../../lib/utils";
import { useEffect, useState } from "react";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  address: z.string().min(5),
  city: z.string().min(2),
  postal: z.string().min(3),
});

type FormData = z.infer<typeof schema>;

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCartStore();
  const { addOrder } = useOrdersStore();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [defaultData, setDefaultData] = useState<FormData | null>(null);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (cart.length === 0) return;
    const saved = localStorage.getItem("checkoutInfo");
    if (saved) {
      const parsed = JSON.parse(saved);
      setDefaultData(parsed);
      // Prefill the form fields
      setValue("name", parsed.name);
      setValue("email", parsed.email);
      setValue("address", parsed.address);
      setValue("city", parsed.city);
      setValue("postal", parsed.postal);
      // Directly place the order if details are saved
      // placeOrder(parsed);
    }
    setLoading(false);
  }, [cart,setValue]);

  const placeOrder = (data: FormData) => {
    const order = {
      id: Date.now().toString(),
      items: cart,
      totalPrice,
      date: new Date().toISOString(),
      customer: { ...data },
      status: "processing",
    };
    addOrder(order);
    clearCart();
    router.push("/orders");
  };

  const onSubmit = (data: FormData) => {
    // Save details for next time
    localStorage.setItem("checkoutInfo", JSON.stringify(data));
    placeOrder(data);
  };

  if (cart.length === 0) {
    return <div className="p-6">Your cart is empty.</div>;
  }

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  // If defaultData exists, don't show the form (order already placed)
  if (defaultData) {
    return <div className="p-6">Order is being processed...</div>;
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Full name</label>
          <input {...register("name")} className="w-full px-3 py-2 rounded border" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input {...register("email")} className="w-full px-3 py-2 rounded border" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium">Address</label>
          <input {...register("address")} className="w-full px-3 py-2 rounded border" />
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <label htmlFor="city" className="block text-sm font-medium">City</label>
            <input {...register("city")} className="w-full px-3 py-2 rounded border" />
          </div>
          <div className="w-36">
            <label htmlFor="postal" className="block text-sm font-medium">Postal</label>
            <input {...register("postal")} className="w-full px-3 py-2 rounded border" />
          </div>
        </div>

        <div className="pt-4 border-t flex justify-between items-center">
          <div>
            <div className="text-sm text-gray-500">Order total</div>
            <div className="text-lg font-bold">{formatCurrency(totalPrice)}</div>
          </div>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Place order</button>
        </div>
      </form>
    </main>
  );
}
