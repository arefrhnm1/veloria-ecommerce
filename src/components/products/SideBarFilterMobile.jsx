"use client";

import { FunnelX, XIcon } from "lucide-react";

export default function SidebarFilterMobile({
	filters,
	setFilters,
	products,
	onClear,
    setOpen
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
		<div className="pt-3 grid">
			<div className="flex mb-7 justify-between items-center">
				<FunnelX
					onClick={() => {
						onClear();
					}}
				/>
                <XIcon
						onClick={() => setOpen(false)}
						size={30}
					/>
			</div>

			{/* Category */}
			<div className="mb-5 pb-5 border-b border-white/50 ">
				<h3 className="text-white/80 text-2xl mb-5">Category</h3>
				{categories.map((cat) => (
					<label key={cat} className="block text-white/50">
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
			<div className="mb-5 pb-5 border-b border-white/50 ">
				<h3 className="text-white/80 text-2xl  mb-5">Colors</h3>
				{colors.map((color) => (
					<label key={color} className="block text-white/50">
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
			<div className="mb-5 pb-5 border-b border-white/50 ">
				<h3 className="text-white/80 text-2xl  mb-5">Sizes</h3>
				{sizes.map((size) => (
					<label key={size} className="block text-white/50">
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
			<div className="">
				<label className="text-white/80 text-xl ">
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
