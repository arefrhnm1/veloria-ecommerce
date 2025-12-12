"use client";

import { Trash2 } from "lucide-react";
import { useCartStore } from "../../store/cartStore";
import QuantitySelector from "../QuantitySelector";

export default function CartItem({ item }) {
	const removeItem = useCartStore((state) => state.removeItem);
	const updateQuantity = useCartStore((state) => state.updateQuantity);

	return (
		<div className="flex items-center gap-4 border border-yellow-950/30 relative p-4">
			<img
				src={item.image[0]}
				alt={item.title}
				className="w-24 h-24 object-cover rounded-md"
			/>
			<div className="flex-1">
				<h2 className="text-sm lg:text-lg font-semibold text-yellow-900/80">
					{item.title}
				</h2>
				<p className="text-sm text-green-700/90">${item.price}</p>
			</div>
			<QuantitySelector product={item}/>
			<button
				onClick={() => removeItem(item.id)}
				className="text-red-700 font-bold p-2 absolute -right-5 bg-white hover:bg-rose-50 -top-5 border border-yellow-950/30"
			>
				<Trash2 />
			</button>
		</div>
	);
}
