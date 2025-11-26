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

	const {
		title,
		image,
		price,
		category,
		description,
		sizes,
		colors,
		inStock,
		rating,
	} = await res.json();

	return (
		<div className="container mx-auto grid grid-cols-2 w-[90vh] gap-5 mt-20">
			<div className=" col-span-1 overflow-hidden aspect-3/4">
				<img
					className="w-full h-full object-cover border border-yellow-950/30"
					src={image}
					alt={title}
				/>
			</div>
			<div className="h-full w-full col-span-1 flex flex-col justify-between text-yellow-900/50">
				<div className="grid gap-5">
					<h2 className="text-4xl text-yellow-900/80">{title}</h2>
          <span>rating :  {rating} / 5</span>
					<p className="text">{description}</p>

					<span>category : {category}</span>
					<span>sizes : {sizes.join(' - ')}</span>
					<span>colors : {colors.join(' - ')}</span>
					<span>Stock : {inStock ? 'yes' : 'no'}</span>
				</div>
				<div className="grid gap-5">
					<div className="flex justify-between">
						<span>{price} $</span>
						<div className="border  border-yellow-950/30 px-4 py-2 flex gap-6">
							<button>-</button>
							<span>3</span>
							<button>+</button>
						</div>
					</div>
					<button className="bg-yellow-800/70 text-white hover:bg-yellow-900 px-4 py-2 w-full">
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
}
