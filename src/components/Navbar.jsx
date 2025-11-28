"use client";

import {
	House,
	LayoutGridIcon,
	MenuIcon,
	ShoppingCart,
	XIcon,
} from "lucide-react";
import { useCartStore } from "../store/cartStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useAutoCloseOnDesktop } from "../hooks/useAutoCloseOnDesktop";

const links = [
	{
		href: "/",
		title: "Home",
		icon: <House size={18} />,
	},
	{
		href: "/products",
		title: "Products",
		icon: <LayoutGridIcon size={18} />,
	},
];

export default function Navbar() {
	// pathname
	const pathname = usePathname();

	// totoal count
	const items = useCartStore((state) => state.items);
	const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

	// hamber menu state
	const [open, setOpen] = useState(false);

	// close menu on desktop
	useAutoCloseOnDesktop(() => setOpen(false));

	return (
		// nav
		<div className="nav">
			{/* nav items */}
			<div className="nav-items">
				{/* logo */}
				<h3 className="md:text-6xl text-3xl md:order-1 order-2 font-bold text-yellow-700">
					VELORIA
				</h3>
				<div className="md:order-2 flex gap-10">
					{/* links */}
					{links.map((i) => (
						<Link
							className={`text-xl  font-medium hidden md:flex ${
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
					{/* cart icon */}
					<Link
						href="/cart"
						className={`text-xl order-1 md:order-3 font-medium relative ${
							pathname == "/cart"
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

				{/* hamber menu */}
				<MenuIcon
					className="flex md:hidden text-yellow-800 order-4"
					size={30}
					onClick={() => setOpen(true)}
				/>
			</div>

			{/* menu div */}
			<div
				className={`fixed top-0  h-screen w-64 bg-white shadow-2xl text-yellow-700 px-12 py-8 transition-all duration-300
					${open ? "right-0" : "-right-64"}
					`}
			>
				<XIcon
					className="flex justify-self-end"
					onClick={() => setOpen(false)}
					size={30}
				/>
				<ul className="">
					{links.map((i) => (
						<li onClick={() => setOpen(false)} className="mb-3 pb-3 not-last:border-b border-yellow-700/30">
							<Link
								className={`items-baseline gap-3 font-medium flex ${
									pathname == i.href
										? "text-yellow-700"
										: "text-yellow-700/50"
								} `}
								key={i.title}
								href={i.href}
							>
								{i.icon}
								{i.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
