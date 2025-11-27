"use client";

import { FunnelX, ListFilter } from "lucide-react";

export default function SidebarFilters({
	filters,
	setFilters,
	products,
	onClear,
}) {
	// استخراج دسته‌ها، رنگ‌ها و سایزهای موجود
	const categories = [...new Set(products.map((p) => p.category))];
	const colors = [...new Set(products.flatMap((p) => p.colors))];
	const sizes = [...new Set(products.flatMap((p) => p.sizes))];

	const toggleFilter = (key, value) => {
		setFilters((prev) => {
			const current = prev[key];
			if (current.includes(value)) {
				return { ...prev, [key]: current.filter((v) => v !== value) };
			} else {
				return { ...prev, [key]: [...current, value] };
			}
		});
	};

	const toggleInStock = () => {
		setFilters((prev) => ({ ...prev, inStock: !prev.inStock }));
	};

	return (
		<div className="p-4 border border-yellow-950/30 mb-4 md:mb-0">
			<div className="flex justify-between">
				<h2 className="font-extrabold mb-4 text-yellow-900/80 ">
					Filters
				</h2>
				<FunnelX
					onClick={() => {
						onClear();
					}}
					className="text-yellow-900/80"
				/>
			</div>

			{/* Category */}
			<div className="mb-3">
				<h3 className="font-bold text-yellow-900/80">Category</h3>
				{categories.map((cat) => (
					<label key={cat} className="block text-yellow-900/60">
						<input
							type="checkbox"
							checked={filters.category.includes(cat)}
							onChange={() => toggleFilter("category", cat)}
							className="mr-2"
						/>
						{cat}
					</label>
				))}
			</div>

			{/* Colors */}
			<div className="mb-3">
				<h3 className="font-bold text-yellow-900/80">Colors</h3>
				{colors.map((color) => (
					<label key={color} className="block text-yellow-900/60">
						<input
							type="checkbox"
							checked={filters.colors.includes(color)}
							onChange={() => toggleFilter("colors", color)}
							className="mr-2"
						/>
						{color}
					</label>
				))}
			</div>

			{/* Sizes */}
			<div className="mb-3">
				<h3 className="font-bold text-yellow-900/80">Sizes</h3>
				{sizes.map((size) => (
					<label key={size} className="block text-yellow-900/60">
						<input
							type="checkbox"
							checked={filters.sizes.includes(size)}
							onChange={() => toggleFilter("sizes", size)}
							className="mr-2"
						/>
						{size}
					</label>
				))}
			</div>

			{/* InStock */}
			<div className="mb-3">
				<label className="text-yellow-900/60">
					<input
						type="checkbox"
						checked={filters.inStock}
						onChange={toggleInStock}
						className="mr-2"
					/>
					In Stock
				</label>
			</div>
		</div>
	);
}
