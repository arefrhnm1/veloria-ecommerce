"use client";

import { useCartStore } from "../store/cartStore";
import { useState } from "react";

export default function AddToCartButton({ product }) {
	const { items, addItem, removeItem } = useCartStore();

	// آیا محصول در کارت وجود دارد؟
	const cartItem = items.find((item) => item.id === product.id);

	const [added, setAdded] = useState(false);

	const handleAdd = (e) => {
		e.stopPropagation();
		e.preventDefault();

		addItem(product);
		setAdded(true);

		setTimeout(() => setAdded(false), );
	};

	const handleRemove = (e) => {
		e.stopPropagation();
		e.preventDefault();

		removeItem(product.id);
	};

	return (
		<button
			onClick={cartItem ? handleRemove : handleAdd}
			className={`w-full px-4 py-2 text-white text-xs md:text-sm
				${cartItem ? "bg-red-700 hover:bg-red-800" : "bg-yellow-800/70 hover:bg-yellow-900"}`}
		>
			{cartItem ? "Remove from Cart -" : added ? "Added!" : "Add to Cart +"}
		</button>
	);
}
