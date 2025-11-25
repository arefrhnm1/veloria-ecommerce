"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import ProductCard from "../../../components/ProductCard";
import { AlignRight, ArrowRight, MoveRight } from "lucide-react";

export default function ProductList({ products }) {
	if (!products || !products.length) return <p>محصولی یافت نشد</p>;

	return (
		<div className="container mx-auto flex gap-5">
			<h3 className="text-yellow-800/50 font-bold  text-3xl">
				P<br />R<br />O<br />D<br />U<br />C<br />T<br />S<br />
				<MoveRight size={50}/>
			</h3>
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				centeredSlides={true}
				className="w-full h-full "
			>
				{products.map((i) => (
					<SwiperSlide key={i.id} className="w-[250px]! ">
						<ProductCard {...i} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
