import { useEffect, useRef } from 'react';

type BannerData = {
	message: string;
	state: 'success' | 'error';
};
function Banner({ banner: { message, state } }: { banner: BannerData }) {
	const bannerRef = useRef<HTMLParagraphElement | null>(null);
	const isSucess = state === 'success';

	useEffect(() => {
		if (!bannerRef.current) return;
		setTimeout(() => {
			bannerRef.current?.classList.remove('opacity-0');
		}, 100);
		setTimeout(() => {
			bannerRef.current?.classList.add('opacity-0');
		}, 1700);
	}, []);
	return (
		<p
			ref={bannerRef}
			className={`absolute top-1/2 opacity-0 transition-all ease-out duration-200 left-1/2 -translate-x-1/2 text-center font-bold text-white -translate-y-1/2 w-1/2 py-10 rounded-lg mt-4 p-2 bg-opacity-80 ${
				isSucess ? 'bg-green-900' : 'bg-red-900'
			}`}>{`${message}`}</p>
	);
}

export default Banner;
