import Link from "next/link";
import React from "react";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard(p) {
	return (
		<Link
			href={`/products/${p.id}`}
			className="group block border border-yellow-950/30 transition-colors duration-200"
		>
			{/* Image */}
			<div className="aspect-3/4 overflow-hidden">
				<img
					src={p.image}
					alt={p.title}
					className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-200"
				/>
			</div>

			{/* Info */}
			<div className="f px-4 py-4">
				<h3 className="text-lg tracking-tight text-yellow-950/80">
					{p.title}
				</h3>

				<p className="text-[14px] font- text-yellow-900/80 mb-6">
					{p.price} $
				</p>
				<AddToCartButton product={p} />
			</div>
		</Link>
	);
}
