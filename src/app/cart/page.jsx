"use client";

import { useCartStore } from "../../store/cartStore";
import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";

export default function page() {
  const items = useCartStore((state) => state.items);

  if (items.length === 0)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Your cart is empty</p>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      <div className="flex-1 flex flex-col gap-4">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="w-full md:w-1/3">
        <CartSummary />
      </div>
    </div>
  );
}
