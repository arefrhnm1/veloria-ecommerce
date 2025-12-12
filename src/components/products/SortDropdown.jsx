"use client";

import { ArrowDownNarrowWide } from "lucide-react";

export default function SortDropdown({ sort, setSort }) {
	return (
		<div className="mb-4 flex items-center text-sm">
			<label className="mr-2 text-yellow-900/60">
				<ArrowDownNarrowWide />
			</label>
			<select
				value={sort}
				onChange={(e) => setSort(e.target.value)}
				className="border border-yellow-950/30 px-2 py-1 rounded text-yellow-950/80 outline-0"
			>
				<option className="text-yellow-950/80" value="priceLow">
					Low → High
				</option>
				<option className="text-yellow-950/80" value="priceHigh">
					High → Low
				</option>
			</select>
		</div>
	);
}
