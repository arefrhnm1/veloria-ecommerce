import Link from "next/link";
import React from "react";
import AddToCartButton from "./AddToCartButton";



const formatMoney = (num) =>
	num.toLocaleString("en-US", { maximumFractionDigits: 0 });


export default function ProductCard(p) {
	return (
		<Link
			href={`/products/${p.id}`}
			className="group grid justify-items-center w-full h-full border border-yellow-950/30 transition-colors duration-200"
		>
			{/* Image */}
			<div className=" overflow-hidden w-fit aspect-3/4">
				<img
					src={p.image}
					alt={p.title}
					className="object-cover w-full h-full group-hover:scale-[1.05] transition-transform duration-200"
				/>
			</div>

			{/* Info */}
			<div className="px-4 py-4 w-full">
				<h3 className="md:text-xl text-lg tracking-tight text-yellow-950/80  overflow-hidden text-ellipsis whitespace-nowrap">
					{p.title}
				</h3>

				<p className="md:text-sm text-xs text-green-900/60 font-bold mb-6">
					{formatMoney(p.price)} $
				</p>
				<AddToCartButton product={p} />
			</div>
		</Link>
	);
}
