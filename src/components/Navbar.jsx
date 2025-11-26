"use client";

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

	return (
		<div className="border-b-2 border-yellow-700 py-8 ">
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
				</div>
			</div>
		</div>
	);
}
