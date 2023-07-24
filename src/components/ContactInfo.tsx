import Link from 'next/link';

function ContactInfo() {
	return (
		<div className='bg-[#191919] w-full flex justify-center items-center px-20 flex-grow text-white'>
			<div className='w-full'>
				<h3 className='font-bold text-xl mb-2 text-emerald-700'>CONTACTS</h3>
				<p>
					Email : <Link href='mailto:dpfvmffjqm@gmail.com'>dpfvmffjqm@gmail.com</Link>
				</p>
				<p>Phone : 010-2624-4817</p>
			</div>
		</div>
	);
}

export default ContactInfo;
