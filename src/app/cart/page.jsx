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
    <div className=" container mx-auto px-8fix(cart): resolve responsiveness issues on cart page
 items-center justify-items-center grid grid-cols-7 pt-20 gap-10">
      <div className="col-span-7 lg:col-span-4 flex flex-col gap-10">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="col-span-7 lg:col-span-3">
        <CartSummary />
      </div>
    </div>
  );
}
