import QuantitySelector from "../../../components/QuantitySelector";
import AddToCartButton from "../../../components/AddToCartButton";
import React from "react";

const formatMoney = (num) =>
	num.toLocaleString("en-US", { maximumFractionDigits: 0 });

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
		<div className="container mx-auto grid md:grid-cols-2 md:w-[90vh] md:pt-20 pt-10 gap-5 px-5">
			<div className=" col-span-1 overflow-hidden h-full w-full aspect-3/4">
				<img
					className="w-full h-full object-cover border border-yellow-950/30"
					src={p.image}
					alt={p.title}
				/>
			</div>
			<div className="col-span-1 text-yellow-900/70 grid gap-10">
				<div className="grid grid-cols-3 gap-3">
					<div className="col-span-3 text-xl md:text-2xl font-bold">
						{p.title}
					</div>
					<div className="text-green-900/70 font-bold col-span-2 self-center">
						{formatMoney(p.price)} $
					</div>
					<div className=" col-start-3 col-span-1 justify-self-end">
						<QuantitySelector product={p} />
					</div>
					<div className="col-span-3">
						<AddToCartButton product={p} />
					</div>
				</div>
				<div className="text-yellow-950/30 grid gap-5">
					<span><span className="font-bold">Rating :</span> {p.rating} / 5</span>
					<p className="text">{p.description}</p>

					<span><span className="font-bold">Categories :</span> {p.category}</span>
					<span><span className="font-bold">Sizes :</span> {p.sizes.join(" - ")}</span>
					<span><span className="font-bold">Colors :</span> {p.colors.join(" - ")}</span>
					<span><span className="font-bold">Stock :</span> {p.inStock ? "yes" : "no"}</span>
				</div>
			</div>
		</div>
	);
}