"use client";

import { useCartStore } from "../../store/cartStore";
import QuantitySelector from "../QuantitySelector";

export default function CartItem({ item }) {
	const removeItem = useCartStore((state) => state.removeItem);
	const updateQuantity = useCartStore((state) => state.updateQuantity);

	return (
		<div className="flex items-center gap-4 border-b border-gray-200 py-4">
			<img
				src={item.image[0]}
				alt={item.title}
				className="w-24 h-24 object-cover rounded-md"
			/>
			<div className="flex-1">
				<h2 className="text-lg font-semibold">{item.title}</h2>
				<p className="text-gray-500">${item.price}</p>

				<QuantitySelector
				product={item}
				/>
			</div>
			<button
				onClick={() => removeItem(item.id)}
				className="text-red-500 font-bold"
			>
				Remove
			</button>
		</div>
	);
}
