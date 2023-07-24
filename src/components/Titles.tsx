'use client';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { usePathname, useRouter } from 'next/navigation';

const dataList = [
	{ title: "Hi, I'm Seonju", path: '/' },
	{ title: 'About My Experience', path: '/about' },
	{ title: 'Check my works', path: '/portfolio' },
	{
		title: 'My Contacts',
		path: '/contacts',
	},
];

function Titles() {
	const swiperRef = useRef<SwiperCore>();
	const pathname = usePathname();
	const router = useRouter();
	const changePage = (index: number) => {
		const path = dataList[index].path;
		router.push(path);
	};
	useEffect(() => {
		if (!swiperRef.current) return;
		const swiper = swiperRef.current;
		const activeIndex = dataList.findIndex((item) => item.path == pathname);
		swiper.slideTo(activeIndex);
	}, [pathname]);

	return (
		<Swiper
			onSwiper={(swiper) => {
				swiperRef.current = swiper;
			}}
			modules={[EffectFade]}
			effect='creative'
			onSlideChange={({ activeIndex }) => changePage(activeIndex)}
			className='w-1/2 m-0'>
			{dataList.map((item) => (
				<SwiperSlide key={item.title}>
					<div className='flex h-full justify-center items-center'>
						<h2 className='text-6xl w-full font-bold px-2 text-white leading-[80px]'>{item.title}</h2>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default Titles;
