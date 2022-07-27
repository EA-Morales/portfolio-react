import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { SiDiscord } from 'react-icons/si';

const Contact = () => {
	return (
		<div className='bg-contactbackground min-h-[95vh]'>
			<div className='container mx-auto grid grid-cols-1 pt-24 md:grid-cols-3 lg:px-20'>
				<div className='space-y-10'>
					<h2 className='text-primary shadow-primary drop-shadow-3xl  text-3xl font-bold'>
						Let&apos;s Connect! 💌
					</h2>
					<p className='text-secondary pr-4 text-left text-lg'>
						If you ever want to grab a coffee/bubble tea{' '}
						<span className='font-script'>(virtually)</span> or just want a
						quick chat - you can find me on social media or you can send me a
						message here!
					</p>
					<div className='flex justify-center gap-8'>
						<FaLinkedinIn className='text-primary text-2xl' />
						<FaGithub className='text-primary text-2xl' />
						<SiDiscord className='text-primary text-2xl' />
						<HiMail className='text-primary text-2xl' />
					</div>
				</div>
				<div className='col-span-2 space-y-4 pl-20'>
					<input
						className='ring-ringprimary w-full rounded-sm py-2 px-4 ring-2'
						placeholder='name'
						type='text'
					/>
					<input
						className='ring-ringprimary w-full rounded-sm py-2 px-4 ring-2'
						placeholder='email'
						type='email'
					/>
					<textarea
						className='ring-ringprimary w-full rounded-sm py-2 px-4 ring-2'
						cols='30'
						id=''
						name=''
						placeholder='message'
						rows='10'
					/>
					<button className='bg-primary hover:text-primary hover:border-ringprimary rounded-lg border-0 py-2 px-4 text-white hover:border-2 hover:bg-white'>
						SEND MESSAGE
					</button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
