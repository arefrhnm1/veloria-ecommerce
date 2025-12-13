"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "@/components/ProductCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, } from 'swiper/modules';


export default function SliderProudcts({ products }) {
	if (!products || !products.length) return <p>No products found.</p>;

	return (
		<Swiper
        freeMode={true}
        modules={[FreeMode]}
			className="z-10"
			breakpoints={{
				0: {
					slidesPerView: 1, // موبایل
					spaceBetween: 20,
				},
				480: {
					slidesPerView: 3, // موبایل بزرگ
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 4, // تبلت
					spaceBetween: 40,
				},
				1024: {
					slidesPerView: 5, // دسکتاپ
					spaceBetween: 40,
				},
			}}
		>
			{products.map((i) => (
				<SwiperSlide key={i.id} className="w-50! sm:w-60! ">
					<ProductCard {...i} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
