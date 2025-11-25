"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import ProductCard from "@/components/ProductCard";

const data = [
	{
		id: 1,
		title: "Aurora Linen Shirt",
		img: "https://images.unsplash.com/photo-1681337150861-717596b6ffd4?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: 298,
	},
	{
		id: 2,
		title: "Velora Silk Blouse",
		img: "https://images.unsplash.com/photo-1681337150861-717596b6ffd4?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: 699,
	},
	{
    id: 3,
		title: "Sera Classic Cotton Tee",
		img: "https://images.unsplash.com/photo-1681337150861-717596b6ffd4?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 132,
	},
  {
		id: 1,
		title: "title 1",
		img: "https://images.unsplash.com/photo-1681337150861-717596b6ffd4?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: 298,
	},
	{
		id: 2,
		title: "title 2",
		img: "https://images.unsplash.com/photo-1681337150861-717596b6ffd4?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: 699,
	},
	{
    id: 3,
		title: "title 3",
		img: "https://images.unsplash.com/photo-1681337150861-717596b6ffd4?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 132,
	},
  {
		id: 1,
		title: "title 1",
		img: "https://images.unsplash.com/photo-1681337150861-717596b6ffd4?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: 298,
	},
	{
		id: 2,
		title: "title 2",
		img: "https://images.unsplash.com/photo-1681337150861-717596b6ffd4?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: 699,
	},
	{
    id: 3,
		title: "title 3",
		img: "https://images.unsplash.com/photo-1681337150861-717596b6ffd4?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 132,
	},
  
];

export default function ProductList() {
	return (
		<>
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				centeredSlides={true}
				className="w-full h-full"
			>
				{data.map((i) => (
					<SwiperSlide key={i.id} className="w-[250px]!">
						<ProductCard {...i} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
