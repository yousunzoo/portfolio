import React from 'react';
import { BarLoader } from 'react-spinners';

function Loading() {
	return (
		<div className='absolute flex justify-center items-center w-full h-full top-0 left-0 bg-black bg-opacity-40'>
			<BarLoader color='#36d7b7' />
		</div>
	);
}

export default Loading;
