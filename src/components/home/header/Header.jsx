"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";

const data = [
	{
		title: "Veloria Signature",
		subtitle: "The Essence of Quiet Luxury",
		text: "A curated selection born from delicate craftsmanship and timeless silhouettes. Veloria celebrates elegance that whispers, not shouts — refined pieces designed to elevate your presence with effortless grace.",
	},
	{
		title: "Velvet Minimalism",
		subtitle: "Elegance Woven Into Every Detail",
		text: "Soft textures, clean lines, and a touch of modern femininity. Each piece is crafted to honor your natural beauty while adding a subtle luxury to every moment you wear it.",
	},
	{
		title: "Timeless Femininity",
		subtitle: "Luxury That Feels Like You",
		text: "Soft edges, curated tones, and silhouettes inspired by quiet confidence. Veloria blends minimalist elegance with premium quality to create fashion that feels intimate and unforgettable.",
	},
];

export default function Header() {
	return (
		<Swiper
			style={{
				"--swiper-navigation-color": "#fff",
				"--swiper-pagination-color": "#fff",
			}}
			speed={600}
			parallax={true}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Autoplay, Parallax, Pagination, Navigation]}
			// autoplay={{ delay: 5000 }}
			className="w-full h-[86vh]"
		>
			<div
				slot="container-start"
				className="absolute left-0 top-0 w-[130%] h-full bg-center"
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1681337150861-717596b6ffd4?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
				}}
				data-swiper-parallax="-23%"
			>
				<div className="bg-yellow-950/60 absolute z-10 inset-0"></div>
			</div>
			{data.map((i) => (
				<SwiperSlide className="font-medium text-white box-border px-20 py-30">
					<div className="text-4xl font-semibold" data-swiper-parallax="-300">
						{i.title}
					</div>
					<div className="text-2xl" data-swiper-parallax="-200">
						{i.subtitle}
					</div>
					<div className="font-light max-w-[400px] " data-swiper-parallax="-100">
					<p>
						{i.text}
					</p>
				</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
