import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';

const inter = Noto_Sans_KR({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata = {
	title: '유선주 포트폴리오',
	description: 'Next.js 13 기반으로 만들어진 프론트엔드 개발자 유선주 포트폴리오 사이트',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ko-KR'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
