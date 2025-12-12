export default function Footer() {
	return (
		<footer className="bg-yellow-950 text-neutral-300 p-10 mt-20">
			<div
				className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 
                 border border-white/20"
			>
				{/* BRAND */}
				<div>
					<h2 className="text-5xl font-serif tracking-wide text-yellow-50/80">
						Veloria
					</h2>
					<p className="mt-4  text-yellow-100/40 leading-relaxed">
						Minimal luxury designed for those who appreciate refined
						simplicity.
					</p>
				</div>

				{/* COLLECTIONS */}
				<div>
					<h3 className="font-semibold text-yellow-50/80 mb-4">
						Collections
					</h3>
					<ul className="space-y-2 text-yellow-100/40 text-sm">
						<li>New Arrivals</li>
						<li>Best Sellers</li>
						<li>Premium Wear</li>
						<li>Accessories</li>
					</ul>
				</div>

				{/* CUSTOMER CARE */}
				<div>
					<h3 className="font-semibold text-yellow-50/80 mb-4">
						Customer Care
					</h3>
					<ul className="space-y-2 text-yellow-100/40 text-sm">
						<li>FAQ</li>
						<li>Size Guide</li>
						<li>Shipping & Delivery</li>
						<li>Returns & Exchanges</li>
					</ul>
				</div>

				{/* NEWSLETTER */}
				<div>
					<h3 className=" font-semibold text-yellow-50/80 mb-4">
						Newsletter
					</h3>
					<p className="text-sm text-yellow-100/40 mb-3">
						Join our newsletter for exclusive drops and early
						access.
					</p>
					<div className="flex items-center gap-2">
						<input
							type="email"
							placeholder="Email address"
							className="w-full px-4 py-2 bg-yellow-700/30  text-sm outline-none"
						/>
						<button className="px-4 py-2 bg-white/80 text-yellow-900 text-sm font-medium">
							Join
						</button>
					</div>
				</div>
			</div>

			{/* BOTTOM BAR */}
			<div className="border-t border-white/20 mt-10 py-6 text-center text-xs text-yellow-50/50">
				© {new Date().getFullYear()} Veloria. Crafted for a refined
				lifestyle.
			</div>
		</footer>
	);
}
