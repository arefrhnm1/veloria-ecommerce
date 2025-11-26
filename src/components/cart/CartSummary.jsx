"use client";

import { useCartStore } from "../../store/cartStore";

export default function CartSummary() {
  const items = useCartStore((state) => state.items);
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 border rounded-md bg-gray-50">
      <h2 className="text-lg font-semibold mb-2">Summary</h2>
      <p className="text-gray-700 mb-2">Subtotal: ${total}</p>
      <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
        Checkout
      </button>
    </div>
  );
}
