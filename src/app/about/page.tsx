import Archive from '@/components/Archive';
import Education from '@/components/Education';
import Stack from '@/components/Stack';
import { education, stack } from '@/constants/experience';
import Link from 'next/link';
import React from 'react';

function AboutPage() {
	const { skills, tools } = stack;
	return (
		<div className=' px-10 py-12 h-full bg-about-bg bg-cover bg-bottom'>
			<div className='flex flex-col h-full justify-between bg-black bg-opacity-50 p-10'>
				<Education education={education} />
				<Stack stack={stack} />
				<Archive />
			</div>
		</div>
	);
}

export default AboutPage;
