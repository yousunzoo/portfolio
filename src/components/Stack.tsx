import React from 'react';

type TStack = {
	skills: {
		normal: string[];
		important: string[];
	};
	tools: {
		normal: string[];
	};
};
function Stack({ stack }: { stack: TStack }) {
	const { skills, tools } = stack;
	return (
		<div>
			<h3 className='text-[#bfb746] font-bold text-3xl mb-6'>STACK</h3>
			<div className='flex gap-10'>
				<div className='w-1/2'>
					<h4 className='text-white font-bold text-xl mb-4'>SKILLS</h4>
					<ul className='flex flex-wrap gap-x-4 gap-y-2'>
						{skills.important.map((item) => (
							<li key={item} className='text-lg italic px-2 text-[#FF1594]'>
								{item}
							</li>
						))}
						{skills.normal.map((item) => (
							<li key={item} className='px-2 italic text-[#49ce44]'>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className='w-1/2'>
					<h4 className='text-white font-bold text-xl mb-4'>TOOLS</h4>
					<ul className='flex flex-wrap gap-x-4 gap-y-1'>
						{tools.normal.map((item) => (
							<li key={item} className='py-1 text-lg px-2 italic text-[#ffe477]'>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Stack;
