'use client';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/parallax';
import { usePathname, useRouter } from 'next/navigation';

const dataList = [
	{ title1: 'Hi,', title2: "I'm Seonju", path: '/' },
	{ title1: 'About', title2: 'My Experience', path: '/about' },
	{ title1: 'Check', title2: 'My Works', path: '/portfolio' },
	{ title1: 'My', title2: 'Contacts', path: '/contacts' },
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
		if (activeIndex > -1) swiper.slideTo(activeIndex);
	}, [pathname]);

	return (
		<Swiper
			onSwiper={(swiper) => {
				swiperRef.current = swiper;
			}}
			modules={[EffectCreative]}
			effect='creative'
			enabled={true}
			parallax={true}
			creativeEffect={{
				prev: {
					translate: [0, 0, -400],
				},
				next: {
					translate: ['100%', 0, 0],
				},
			}}
			onSlideChange={({ activeIndex }) => changePage(activeIndex)}
			className='w-2/6 m-0'>
			{dataList.map((item) => (
				<SwiperSlide key={item.path}>
					<div className='flex bg-[#202020] h-full justify-center items-center'>
						<h2 className='text-6xl w-full font-bold px-2 text-white leading-[80px]'>
							<p>{item.title1}</p>
							<p>{item.title2}</p>
						</h2>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default Titles;
