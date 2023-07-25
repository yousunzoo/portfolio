import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';

const GITHUB_LINK = 'https://github.com/yousunzoo';
const BLOG_LINK = 'https://charmming5.tistory.com';

function Archive() {
	return (
		<div>
			<h3 className='text-[#bfb746] font-bold text-3xl mb-6'>ARCHIVE</h3>
			<div className='flex justify-between gap-10'>
				<div className='w-1/2'>
					<Link
						href={GITHUB_LINK}
						target='_blank'
						className='flex italic w-fit gap-2 items-center text-white font-bold text-xl mb-4'>
						<span>Github</span>
						<BiLinkExternal className='text-2xl mb-1' />
					</Link>
				</div>
				<div className='w-1/2'>
					<Link
						href={BLOG_LINK}
						target='_blank'
						className='flex italic w-fit gap-2 items-center text-white font-bold text-xl mb-4'>
						<span>Blog</span>
						<BiLinkExternal className='text-2xl mb-1' />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Archive;
