"use client";
import { useState, useEffect } from "react";
import { X, Search } from "lucide-react";

export default function SearchBox({ onSearch, value, onClear }) {
	const [input, setInput] = useState(value || "");

	useEffect(() => {
		setInput(value || "");
	}, [value]);

	const triggerSearch = () => {
		onSearch(input.trim());
	};

	return (
		<div className="relative w-full flex items-center">
			<input
				type="text"
				className="outline-0 w-full border text-yellow-950/70 border-yellow-950/30 px-4 py-2 placeholder:text-yellow-950/40"
				placeholder="search product..."
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>

			

			{/* آیکون سرچ */}
			<button
				type="button"
				onClick={triggerSearch}
				className="absolute right-3 top-2.5"
			>
				<Search size={20} className="text-yellow-800/60" />
			</button>
		</div>
	);
}
