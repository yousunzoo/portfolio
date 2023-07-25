'use client';
import { sendContactEmail } from '@/service/contact';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Banner from './Banner';
import Loading from './Loading';

function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [banner, setBanner] = useState<{ message: string; state: 'success' | 'error' } | null>(null);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const handleSendEmail = (data: FieldValues) => {
		const { name, from, subject, message } = data;
		setIsSubmitting(true);
		sendContactEmail({ name, from, subject, message })
			.then(() => {
				setBanner({
					message: '메일이 성공적으로 전송되었습니다.',
					state: 'success',
				});
				reset();
			})
			.catch(() => {
				setBanner({
					message: '메일 전송에 실패했습니다. 다시 시도해주세요.',
					state: 'error',
				});
			})
			.finally(() => {
				setIsSubmitting(false);
				setTimeout(() => {
					setBanner(null);
				}, 2000);
			});
	};
	return (
		<>
			<form
				onSubmit={handleSubmit((data) => handleSendEmail(data))}
				className='relative w-full py-8 bg-black bg-opacity-40'>
				<div className='px-8'>
					<label htmlFor='name' className='label'>
						Your Name <span className='h-4 text-sm text-red-500'>*</span>
					</label>
					<input
						type='text'
						autoComplete='off'
						id='name'
						className='input'
						placeholder='이름'
						{...register('name', { required: true })}
					/>
					<p className='mb-4 h-4 text-sm text-red-500'>{errors?.name ? '이름을 입력해주세요.' : ''}</p>
					<label htmlFor='from' className='label'>
						Email <span className='h-4 text-sm text-red-500'>*</span>
					</label>
					<input
						type='text'
						autoComplete='off'
						id='from'
						className='input'
						placeholder='example@test.com'
						{...register('from', { required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ })}
					/>
					<p className='mb-4 h-4 text-sm text-red-500'>{errors?.from ? '올바른 이메일 형식을 입력해주세요.' : ''}</p>
					<label htmlFor='subject' className='label'>
						Title <span className='h-4 text-sm text-red-500'>*</span>
					</label>
					<input
						type='text'
						autoComplete='off'
						id='subject'
						className='input'
						placeholder='제목을 입력해주세요'
						{...register('subject', { required: true })}
					/>
					<p className='mb-4 h-4 text-sm text-red-500'>{errors?.subject ? '제목은 필수 입력사항입니다.' : ''}</p>

					<label htmlFor='message' className='pb-4 label'>
						Message <span className='h-4 text-sm text-red-500'>*</span>
					</label>
					<textarea
						id='message'
						className='resize-none w-full h-11 input'
						placeholder='내용을 입력해주세요'
						{...register('message', { required: true })}
					/>
					<p className='mb-4 h-4 text-sm text-red-500'>{errors?.message ? '내용은 필수 입력사항입니다.' : ''}</p>
				</div>
				<button
					disabled={isSubmitting}
					className='mx-auto flex h-12 w-[180px] items-center transition-all ease-in duration-300 justify-center rounded-lg border-2 border-emerald-800 text-white hover:bg-emerald-900'>
					Send Message
				</button>
			</form>
			{isSubmitting && <Loading />}
			{banner && <Banner banner={banner} />}
		</>
	);
}

export default ContactForm;
