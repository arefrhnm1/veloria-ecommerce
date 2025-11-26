"use client";

import { useCartStore } from "../../store/cartStore";
import { useState } from "react";

const formatMoney = (num) =>
	num.toLocaleString("en-US", { maximumFractionDigits: 0 });

export default function CartSummary() {
	const items = useCartStore((state) => state.items);

	// جمع تعداد کل محصولات
	const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

	// جمع مبلغ
	const subtotal = items.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	// کد تخفیف — فعلاً ساده
	const [code, setCode] = useState("");
	const [discount, setDiscount] = useState(0);

	const applyCode = () => {
		if (code.toLowerCase() === "veloria10") {
			setDiscount(subtotal * 0.1); // 10 درصد
		} else {
			setDiscount(0);
		}
	};

	const total = subtotal - discount;

	return (
		<div className="p-4 border border-yellow-950/30 bg-yellow-200/10 space-y-3">
			<h2 className="text-lg font-semibold text-yellow-900/80">
				Summary
			</h2>

			<div className="flex justify-between text-sm text-yellow-900/70">
				<span>Items</span>
				<span>{totalItems}</span>
			</div>

			<div className="flex justify-between text-sm text-yellow-900/70">
				<span>Subtotal</span>
				<span>${formatMoney(subtotal)}</span>
			</div>

			<div className="flex justify-between text-sm text-yellow-900/70">
				<span>Shipping</span>
				<span>Free</span>
			</div>

			{/* Discount code */}
			<div className="space-y-2 pt-2">
				<label className="text-sm text-yellow-900/70">
					Discount Code
				</label>
				<div className="flex gap-2">
					<input
						type="text"
						value={code}
						onChange={(e) => setCode(e.target.value)}
						placeholder="Enter code"
						className="flex-1 px-2 py-1 border border-yellow-900/30 bg-transparent outline-none text-yellow-900/80"
					/>
					<button
						onClick={applyCode}
						className="px-3 bg-yellow-700/50 text-yellow-50 hover:bg-yellow-800"
					>
						Apply
					</button>
				</div>

				{discount > 0 && (
					<div className="flex justify-between text-sm text-green-700">
						<span>Discount</span>
						<span>- ${formatMoney(discount)}</span>
					</div>
				)}
			</div>

			<hr className="border-yellow-900/20" />

			<div className="flex justify-between font-semibold text-yellow-900/80 text-base">
				<span>Total</span>
				<span>${formatMoney(total)}</span>
			</div>

			<button className="w-full text-white py-2 bg-yellow-800/70 hover:bg-yellow-900 mt-2">
				Checkout
			</button>
		</div>
	);
}
