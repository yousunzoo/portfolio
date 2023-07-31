'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules';
import projects from '../../data/projects.json';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

function PortfolioSlides() {
	const swiperRef = useRef<SwiperCore>();
	return (
		<div className='w-full h-full bg-white rounded-xl bg-opacity-80 p-8 font-nanum'>
			<Swiper
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className='h-full'>
				{projects.map((item) => (
					<SwiperSlide key={item.path}>
						<div className='w-full h-full'>
							<div className='w-full h-[360px] relative mb-6'>
								<Image fill priority src={item.preview} alt={item.title} className='object-cover' />
								<Link
									href={item.github}
									target='_blank'
									className=' text-white text-center font-bold text-lg font-sans absolute -bottom-16 right-0 py-2 px-2 w-[200px] bg-[#618FA6] rounded-xl'>
									Github
								</Link>
							</div>
							<div className='flex flex-col gap-2'>
								<p>작업 기간 : {item.period}</p>
								<div className='flex mb-2'>
									<span className='w-20'>기술 스택 : </span>
									<div>
										<div className='mb-2'>
											{item.mainStacks.map((stack) => (
												<span key={stack} className='px-2 py-1 text-sm bg-blue-500 bg-opacity-50 mr-1 rounded-lg'>
													{stack}
												</span>
											))}
										</div>
										<div>
											{item.secStacks.map((stack) => (
												<span key={stack} className='px-2 py-1 text-sm bg-green-500 bg-opacity-50 mr-1 rounded-lg'>
													{stack}
												</span>
											))}
										</div>
									</div>
								</div>
								<ul>
									{item.description.map((desc, index) => (
										<li key={index} className='break-keep mb-2'>
											<p className='flex text-sm'>
												<span className='mr-2'>📌</span>
												<span>{desc}</span>
											</p>
										</li>
									))}
								</ul>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default PortfolioSlides;
