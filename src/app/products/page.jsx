"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import SidebarFilters from "../../components/products/SideBarFilter";
import SortDropdown from "../../components/products/SortDropdown";
import LoadMoreButton from "../../components/products/LoadMoreButton";
import ProductCard from "../../components/ProductCard";

export default function ProductsPage() {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [filters, setFilters] = useState({
		category: [],
		colors: [],
		sizes: [],
		inStock: false,
		priceRange: [0, 10000000],
		sort: "priceLow",
	});
	const [visibleCount, setVisibleCount] = useState(8);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await axios.get(
					"https://69255c4982b59600d7234e6a.mockapi.io/api/v1/products"
				);
				setProducts(res.data);
			} catch (err) {
				console.error(err);
			} finally {
				setLoading(false);
			}
		};
		fetchProducts();
	}, []);

	useEffect(() => {
		let temp = [...products];

		// فیلتر دسته‌بندی
		if (filters.category.length > 0) {
			temp = temp.filter((p) => filters.category.includes(p.category));
		}

		// فیلتر رنگ
		if (filters.colors.length > 0) {
			temp = temp.filter((p) =>
				p.colors.some((color) => filters.colors.includes(color))
			);
		}

		// فیلتر سایز
		if (filters.sizes.length > 0) {
			temp = temp.filter((p) =>
				p.sizes.some((size) => filters.sizes.includes(size))
			);
		}

		// فیلتر موجودی
		if (filters.inStock) {
			temp = temp.filter((p) => p.inStock);
		}

		// فیلتر قیمت
		temp = temp.filter(
			(p) =>
				p.price >= filters.priceRange[0] &&
				p.price <= filters.priceRange[1]
		);

		// سورتینگ
		if (filters.sort === "priceLow") {
			temp.sort((a, b) => a.price - b.price);
		} else if (filters.sort === "priceHigh") {
			temp.sort((a, b) => b.price - a.price);
		}

		setFilteredProducts(temp);
	}, [products, filters]);

	const handleLoadMore = () => setVisibleCount((prev) => prev + 8);
	if(loading){
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    )
  }
	return (
		<div className="container mx-auto flex flex-col md:flex-row gap-6 mt-10">
			{/* Sidebar */}
			<aside className="w-full md:w-64 md:block hidden">
				<SidebarFilters
					filters={filters}
					setFilters={setFilters}
					products={products}
				/>
			</aside>

			{/* Main */}
			<main className="flex-1">
				{/* Filters Row موبایل */}
				<div className="flex md:hidden gap-4 overflow-x-auto mb-4">
					<SidebarFilters
						filters={filters}
						setFilters={setFilters}
						products={products}
					/>
					<SortDropdown
						sort={filters.sort}
						setSort={(sort) => setFilters({ ...filters, sort })}
					/>
				</div>

				{/* Desktop Sort */}
				<div className="hidden md:block mb-4">
					<SortDropdown
						sort={filters.sort}
						setSort={(sort) => setFilters({ ...filters, sort })}
					/>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
					{filteredProducts.slice(0, visibleCount).map((p) => (
						<ProductCard key={p.id} {...p} />
					))}
				</div>

				{/* Load More */}
				{visibleCount < filteredProducts.length && (
					<LoadMoreButton onClick={handleLoadMore} />
				)}
			</main>
		</div>
	);
}
