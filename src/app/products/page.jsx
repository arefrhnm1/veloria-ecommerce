"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import SidebarFilters from "../../components/products/SideBarFilter";
import SortDropdown from "../../components/products/SortDropdown";
import LoadMoreButton from "../../components/products/LoadMoreButton";
import ProductCard from "../../components/ProductCard";
import SearchBox from "../../components/products/SearchBox";

export default function ProductsPage() {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [query, setQuery] = useState("");

	const defaultFilters = {
		category: [],
		colors: [],
		sizes: [],
		inStock: false,
		priceRange: [0, 10000000],
		sort: "priceLow",
	};

	const [filters, setFilters] = useState(defaultFilters);
	const [loading, setLoading] = useState(true);

	// Fetch
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

	// Filters + search + sort
	useEffect(() => {
		let temp = [...products];

		// Search (only onSubmit)
		if (query.trim() !== "") {
			temp = temp.filter((p) =>
				p.title.toLowerCase().includes(query.toLowerCase())
			);
		}

		// Category filter
		if (filters.category.length > 0) {
			temp = temp.filter((p) => filters.category.includes(p.category));
		}

		// Color filter
		if (filters.colors.length > 0) {
			temp = temp.filter((p) =>
				p.colors.some((color) => filters.colors.includes(color))
			);
		}

		// Size filter
		if (filters.sizes.length > 0) {
			temp = temp.filter((p) =>
				p.sizes.some((size) => filters.sizes.includes(size))
			);
		}

		// In stock
		if (filters.inStock) {
			temp = temp.filter((p) => p.inStock);
		}

		// Price
		temp = temp.filter(
			(p) =>
				p.price >= filters.priceRange[0] &&
				p.price <= filters.priceRange[1]
		);

		// Sort
		if (filters.sort === "priceLow") {
			temp.sort((a, b) => a.price - b.price);
		} else if (filters.sort === "priceHigh") {
			temp.sort((a, b) => b.price - a.price);
		}

		setFilteredProducts(temp);
	}, [products, filters, query]);

	

	// CLEAR ALL → سرچ + فیلترها
	const clearAll = () => {
		setQuery("");
		setFilters(defaultFilters);
		setFilteredProducts(products);
	};

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<p className="text-gray-500 text-lg">Loading...</p>
			</div>
		);
	}

	return (
		<div className="container mx-auto flex flex-col md:flex-row gap-6 mt-10">

			{/* Sidebar (Desktop) */}
			<aside className="w-full md:w-64 md:block hidden">
				<SidebarFilters
				onClear={clearAll}
					filters={filters}
					setFilters={setFilters}
					products={products}
				/>
			</aside>

			{/* Main */}
			<main className="flex-1">

				{/* Mobile Top Filters Row */}
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

				{/* Desktop: Search + Sort */}
				<div className="hidden md:flex justify-between items-center mb-6">
					<div className="w-64">
						<SearchBox onSearch={(val) => setQuery(val)} value={query} onClear={clearAll} />
					</div>

					<div className="flex items-center gap-3">
						{/* CLEAR ALL BUTTON */}
						

						<SortDropdown
							sort={filters.sort}
							setSort={(sort) => setFilters({ ...filters, sort })}
						/>
					</div>
				</div>

				{/* Search for Mobile */}
				<div className="md:hidden mb-4">
					<SearchBox onSearch={(val) => setQuery(val)} value={query} onClear={clearAll} />
				</div>

				{/* EMPTY STATE */}
				{filteredProducts.length === 0 ? (
					<div className="py-20 text-center text-gray-500 text-lg">
						محصولی یافت نشد
					</div>
				) : (
					<>
						{/* Products Grid */}
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
							{filteredProducts.map((p) => (
								<ProductCard key={p.id} {...p} />
							))}
						</div>

					</>
				)}
			</main>
		</div>
	);
}
