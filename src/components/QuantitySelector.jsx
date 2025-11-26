"use client";

import { useCartStore } from "../store/cartStore";

export default function QuantitySelector({ product, min = 1, max = 99 }) {
	console.log(product);

	const { items, updateQuantity, addItem, removeItem } = useCartStore();

	// آیا محصول داخل کارت هست؟
	const cartItem = items.find((item) => item.id === product.id);
	const cartQuantity = cartItem?.quantity || 0;

	const decrease = () => {
		if (cartQuantity === 1) {
			removeItem(product.id);
			return;
		}

		if (cartQuantity > min) {
			updateQuantity(product.id, cartQuantity - 1);
		}
	};

	const increase = () => {
		if (cartQuantity < max) {
			// اگر هنوز توی سبد نیست → اول اضافه کن
			if (!cartItem) {
				addItem({ ...product, quantity: 1 });
			} else {
				updateQuantity(product.id, cartQuantity + 1);
			}
		}
	};

	return (
		<div className="grid grid-cols-3 w-28 border border-yellow-950/30 text-yellow-900/60">
			<button
				onClick={decrease}
				className="flex items-center justify-center py-2  border-r hover:bg-yellow-700/10 border-yellow-950/30"
			>
				-
			</button>

			<span className="flex items-center justify-center py-2 select-none">
				{cartQuantity}
			</span>

			<button
				onClick={increase}
				className="flex items-center justify-center py-2 border-l hover:bg-yellow-700/10 border-yellow-950/30"
			>
				+
			</button>
		</div>
	);
}
