import Nav from '@/components/Nav';
import './globals.css';
import localFont from 'next/font/local';
import Titles from '@/components/Titles';

const gilroy = localFont({
	src: [
		{ path: '../../public/font/Gilroy-Light.woff', weight: '400' },
		{ path: '../../public/font/Gilroy-Regular.woff', weight: '500' },
		{ path: '../../public/font/Gilroy-Medium.woff', weight: '600' },
		{ path: '../../public/font/Gilroy-Bold.woff', weight: '700' },
		{ path: '../../public/font/Gilroy-Heavy.woff', weight: '800' },
	],
	variable: '--font-gilroy',
});

export const metadata = {
	title: '유선주 포트폴리오',
	description: 'Next.js 13 기반으로 만들어진 프론트엔드 개발자 유선주 포트폴리오 사이트',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ko-KR'>
			<body className={`${gilroy.variable} font-sans`}>
				<main className='max-w-screen-2xl flex px-8 min-h-screen'>
					<Nav />
					<section className='w-[88%] flex'>
						<Titles />
						<div className='w-4/6'>{children}</div>
					</section>
				</main>
			</body>
		</html>
	);
}
