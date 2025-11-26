"use client";

export default function LoadMoreButton({ onClick }) {
  return (
    <div className="w-full flex justify-center mt-6">
      <button
        onClick={onClick}
        className="px-4 py-2 bg-yellow-800/70 text-white hover:bg-yellow-900"
      >
        Load More
      </button>
    </div>
  );
}
