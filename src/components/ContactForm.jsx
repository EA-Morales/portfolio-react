import { useForm } from 'react-hook-form';

import Button from '@/components/Button';

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({ mode: 'onChange' });

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	return (
		<form
			className='12 mx-auto mt-4 flex w-full flex-col space-y-4 md:col-span-2 md:mt-0 md:px-20'
			onSubmit={handleSubmit(onSubmit)}>
			<input
				autoComplete='off'
				required={!isValid}
				{...register('Name', { required: true })}
				className='ring-ringprimary focus:outline-primary rounded-sm py-2 px-4 ring-2'
				placeholder='name'
				type='text'
			/>
			{errors.Name && (
				<span className='font-bold text-red-600'>* This field is required</span>
			)}
			<input
				autoComplete='off'
				required={!isValid}
				{...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
				className='ring-ringprimary focus:outline-primary rounded-sm py-2 px-4 ring-2'
				placeholder='email'
				type='email'
			/>
			{errors.Email && (
				<span className='font-bold text-red-600'>* This field is required</span>
			)}
			<textarea
				{...register('Message', { required: true })}
				className='ring-ringprimary focus:outline-primary rounded-sm py-2 px-4 ring-2'
				cols='30'
				placeholder='message'
				rows='10'
			/>

			<Button
				className='bg-primary ring-primary hover:text-primary hover:ring-ringprimary w-fit rounded-lg py-2 px-4 text-white ring-2 hover:bg-white hover:ring-2 disabled:bg-slate-200 disabled:text-slate-700/75 disabled:ring-slate-200'
				disabled={!isValid}
				type='submit'>
				SEND MESSAGE
			</Button>
		</form>
	);
};

export default ContactForm;
