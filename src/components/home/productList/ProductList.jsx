import React from "react";
import SliderProudcts from "./SliderProducts";
import { ChevronsLeft } from "lucide-react";

export default function ProductList({ products }) {
	return (
		<div className="overflow-hidden container mx-auto flex px-4 gap-5">
			<div
				className="flex gap-6 relative items-center"
			>
				<h3 className="text-yellow-800/60  font-bold">
					P
					<br />R
					<br />O
					<br />D
					<br />U
					<br />C
					<br />T
					<br />S
				</h3>
				<span className="animate-bounce-x text-yellow-900/30 ">
					<ChevronsLeft />
				</span>
			</div>

			<SliderProudcts products={products} />
		</div>
	);
}
