"use client";

import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
	{
		href: "/",
		title: "Home",
	},
	{
		href: "/products",
		title: "Products",
	},
];

export default function Navbar() {
	const pathname = usePathname();

	const items = useCartStore((state) => state.items);
	const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

	return (
		<div className="border-b-2 border-yellow-700 py-8 sticky inset-0 z-10 bg-white/90  backdrop-blur-xl">
			<div className="container mx-auto flex justify-between items-baseline">
				<h3 className="text-6xl font-bold text-yellow-700">VELORIA</h3>
				<div className="flex gap-10">
					{links.map((i) => (
						<Link
							className={`text-xl  font-medium ${
								pathname == i.href
									? "text-yellow-700"
									: "text-yellow-700/50"
							} `}
							key={i.title}
							href={i.href}
						>
							{i.title}
						</Link>
					))}

					<Link
						href="/cart"
						className={`text-xl  font-medium relative ${
							pathname == '/cart'
								? "text-yellow-700"
								: "text-yellow-700/50"
						} `}
					>
						<ShoppingCart />
						<span className="absolute -top-3 -right-4 bg-rose-900 text-white text-sm w-6 h-6 flex items-center justify-center rounded-full">
							{totalCount}
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
