"use client";

import { ArrowDownNarrowWide } from "lucide-react";

export default function SortDropdown({ sort, setSort }) {
	return (
		<div className="mb-4 flex items-center">
			<label className="mr-2 text-yellow-900/80">
				<ArrowDownNarrowWide />
			</label>
			<select
				value={sort}
				onChange={(e) => setSort(e.target.value)}
				className="border border-yellow-950/30 px-2 py-1 rounded text-yellow-950/80 outline-0"
			>
				<option className="text-yellow-950/80" value="priceLow">
					Price: Low → High
				</option>
				<option className="text-yellow-950/80" value="priceHigh">
					Price: High → Low
				</option>
			</select>
		</div>
	);
}
