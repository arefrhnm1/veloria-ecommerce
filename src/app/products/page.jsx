"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import SearchBox from "../../components/products/SearchBox";
import { FilterIcon } from "lucide-react";
import SidebarFilterMobile from "@/components/products/SideBarFilterMobile";
import SidebarFilters from "@/components/products/SideBarFilter";
import SortDropdown from "@/components/products/SortDropdown";

export default function ProductsPage() {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [query, setQuery] = useState("");

	// hamber menu state
	const [open, setOpen] = useState(false);

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
		<div className="mt-10 container mx-auto px-5">
			<div
				className="
      				grid gap-10
      				grid-cols-4
      				grid-rows-[auto_1fr]

					// mobile
	  				[grid-template-areas:'filters_search_search_search''products_products_products_products']

					// tablet
					md:[grid-template-areas:'filters_search_search_sort''filters_products_products_products']

	  
	
    "
			>
				{/* MOBILE FILTER BUTTON — MUST BE OUTSIDE THE GRID */}
				<button
					className="md:hidden text-yellow-950/70  [grid-area:filters]"
					onClick={() => setOpen(true)}
				>
					<FilterIcon />
				</button>
				{/* mobile: filter */}
				<div
					className={`fixed bottom-0 overflow-y-auto z-40 top-[102px] left-0 w-64 bg-yellow-900/95 shadow-2xl text-white px-12 py-8 transition-all duration-300
    			${open ? "translate-x-0" : "-translate-x-full"}
  `}
				>
					<SidebarFilterMobile
						onClear={clearAll}
						filters={filters}
						setFilters={setFilters}
						products={products}
						setOpen={setOpen}
					/>
				</div>


				{/* DESKTOP FILTERS */}
				<div className="hidden md:flex [grid-area:filters]">
					<SidebarFilters
						onClear={clearAll}
						filters={filters}
						setFilters={setFilters}
						products={products}
					/>
				</div>

				<div className="[grid-area:search]">
					<SearchBox
						onSearch={(val) => setQuery(val)}
						value={query}
						onClear={clearAll}
					/>
				</div>

				<div className="hidden md:flex [grid-area:sort] justify-self-end">
					<SortDropdown
						sort={filters.sort}
						setSort={(sort) => setFilters({ ...filters, sort })}
					/>
				</div>

				<div className="[grid-area:products]">
					{filteredProducts.length === 0 ? (
						<div className="py-20 text-center text-gray-500 text-lg">
						No products found.
						</div>
					) : (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
							{filteredProducts.map((p) => (
								<ProductCard key={p.id} {...p} />
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
