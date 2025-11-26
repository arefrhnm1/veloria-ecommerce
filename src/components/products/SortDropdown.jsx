"use client";

export default function SortDropdown({ sort, setSort }) {
  return (
    <div className="mb-4">
      <label className="mr-2 text-yellow-900/80">Sort by:</label>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border border-yellow-950/30 px-2 py-1 rounded"
      >
        <option value="priceLow">Price: Low → High</option>
        <option value="priceHigh">Price: High → Low</option>
      </select>
    </div>
  );
}
