import Image from 'next/image';
import React from 'react';
import profile from '/public/images/profile.png';
function RootPage() {
	return (
		<div className='flex flex-col gap-20 h-full justify-center px-20'>
			<div className='flex w-full'>
				<h3 className='text-7xl text-left w-full font-extrabold text-transparent bg-clip-text bg-text-bg'>
					<p>And I'm</p>
					<p>Front-End</p>
					<p>Developer.</p>
				</h3>
				<Image className='ml-auto' src={profile} width={240} height={240} alt='profile' />
			</div>
			<p className='text-white text-lg leading-8 break-keep font-jeju'>
				<span className='highlight'>함께 성장하는 프론트엔드 개발자 유선주</span>입니다.
				<br />
				<br />
				소통을 중요시 여기며, 함께 문제를 해결하고 성장해나가는 것을 좋아합니다.
				<br />
				개인적인 목표보다는 팀워크에 집중하여, 빠르게 문제를 해결하고 팀 프로젝트의 퀄리티 향상과 완성에 기여하였습니다.
				<br />
				<br />
				<span className='highlight'>꾸준한 학습과 기술 습득</span>에 열정을 가지고 있습니다. 궁금증이 많아 지속적으로
				도전하고, 새로운 기술을 학습하는 것을 즐기고 있습니다. 그리고 학습한 내용을 블로그에 기록하고 공유하는 습관을
				가지고 있습니다.
				<br />
				<br />
				최근에는 SSR에 관심이 생겨 Next.js를 공부하였고, 실제로 SSR을 적용하여 머니브릿지 서비스를 배포한 경험이
				있습니다. <span className='highlight'>더 나은 사용자 경험과 성능을 제공하는 방법을 탐구하고 있습니다.</span>
			</p>
		</div>
	);
}

export default RootPage;
