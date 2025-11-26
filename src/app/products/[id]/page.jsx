import QuantitySelector from "../../../components/QuantitySelector";
import AddToCartButton from "../../../components/AddToCartButton";
import React from "react";

export default async function page({ params }) {
	const { id } = await params;

	const res = await fetch(
		`https://69255c4982b59600d7234e6a.mockapi.io/api/v1/products/${id}`,
		{ cache: "no-store" }
	);

	if (!res.ok) {
		throw new Error("Failed to fetch product");
	}

	const p = await res.json();


	return (
		<div className="container mx-auto grid grid-cols-2 w-[90vh] gap-5 mt-20">
			<div className=" col-span-1 overflow-hidden aspect-3/4">
				<img
					className="w-full h-full object-cover border border-yellow-950/30"
					src={p.image}
					alt={p.title}
				/>
			</div>
			<div className="h-full w-full col-span-1 flex flex-col justify-between text-yellow-900/50">
				<div className="grid gap-5">
					<h2 className="text-4xl text-yellow-900/80">{p.title}</h2>
					<span>rating : {p.rating} / 5</span>
					<p className="text">{p.description}</p>

					<span>category : {p.category}</span>
					<span>sizes : {p.sizes.join(" - ")}</span>
					<span>colors : {p.colors.join(" - ")}</span>
					<span>Stock : {p.inStock ? "yes" : "no"}</span>
				</div>
				<div className="grid gap-5">
					<div className="flex justify-between">
						<span>{p.price} $</span>
						<QuantitySelector
							product={p}
						/>
					</div>
					<AddToCartButton product={p} />
				</div>
			</div>
		</div>
	);
}
