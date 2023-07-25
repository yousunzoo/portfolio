import React from 'react';

function Education({ education }: { education: { title: string; period: string }[] }) {
	return (
		<div>
			<h3 className='text-[#bfb746] font-bold text-3xl mb-6'>EDUCATION</h3>
			<ul>
				{education.map((item) => (
					<li key={item.title} className='flex justify-between w-full mb-4'>
						<p className='font-semibold text-gray-100'>{item.title}</p>
						<p className='text-gray-300'>{item.period}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Education;
