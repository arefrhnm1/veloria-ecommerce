"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./style.css";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Header() {
	return (
		<>
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
				autoplay={{ delay: 5000 }}
				className="mySwiper"
			>
				<div
					slot="container-start"
					className="parallax-bg"
					style={{
						"backgroundImage":
							"url(https://images.unsplash.com/photo-1681337150861-717596b6ffd4?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
					}}
					data-swiper-parallax="-23%"
				>
					<div className="bg-yellow-950/60 absolute z-10 inset-0"></div>
				</div>
				<SwiperSlide>
					<div className="title" data-swiper-parallax="-300">
						Veloria Signature
					</div>
					<div className="subtitle" data-swiper-parallax="-200">
						The Essence of Quiet Luxury
					</div>
					<div className="text" data-swiper-parallax="-100">
						<p>
							A curated selection born from delicate craftsmanship
							and timeless silhouettes. Veloria celebrates
							elegance that whispers, not shouts — refined pieces
							designed to elevate your presence with effortless
							grace.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="title" data-swiper-parallax="-300">
						Velvet Minimalism
					</div>
					<div className="subtitle" data-swiper-parallax="-200">
						Elegance Woven Into Every Detail
					</div>
					<div className="text" data-swiper-parallax="-100">
						<p>
							Soft textures, clean lines, and a touch of modern
							femininity. Each piece is crafted to honor your
							natural beauty while adding a subtle luxury to every
							moment you wear it.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="title" data-swiper-parallax="-300">
						Timeless Femininity
					</div>
					<div className="subtitle" data-swiper-parallax="-200">
						Luxury That Feels Like You
					</div>
					<div className="text" data-swiper-parallax="-100">
						<p>
							Soft edges, curated tones, and silhouettes inspired
							by quiet confidence. Veloria blends minimalist
							elegance with premium quality to create fashion that
							feels intimate and unforgettable.
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
