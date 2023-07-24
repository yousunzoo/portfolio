import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';

function ContactsPage() {
	return (
		<div className='flex h-full flex-col justify-center items-center'>
			<div className='w-full bg-form-bg gap-8 p-20 relative'>
				<ContactForm />
			</div>
			<ContactInfo />
		</div>
	);
}

export default ContactsPage;
