import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { SiDiscord } from 'react-icons/si';

const Contact = () => {
	return (
		<div className='bg-contactbackground min-h-[95vh]' id='contact'>
			<div className='container my-8 mx-auto grid grid-cols-1 px-8 pt-24 md:grid-cols-3 lg:px-20'>
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
						<a
							href='https://www.linkedin.com/in/eduardo-agustin-morales/'
							rel='noopener noreferrer'
							target='_blank'>
							<FaLinkedinIn className='text-primary hover:text-primaryaccent text-2xl' />
						</a>
						<a
							href='https://github.com/EA-Morales'
							rel='noopener noreferrer'
							target='_blank'>
							<FaGithub className='text-primary hover:text-primaryaccent text-2xl' />
						</a>
						<a
							href='https://discordapp.com/users/L3GOL4S#1616'
							rel='noopener noreferrer'
							target='_blank'>
							<SiDiscord className='text-primary hover:text-primaryaccent text-2xl' />
						</a>
						<a href='mailto:eduardo.agustin.morales@gmail.com'>
							<HiMail className='text-primary hover:text-primaryaccent text-2xl' />
						</a>
					</div>
				</div>
				<div className='12 mx-auto mt-4 flex w-full flex-col space-y-4 md:col-span-2 md:mt-0 md:px-20'>
					<input
						className='ring-ringprimary rounded-sm py-2 px-4 ring-2'
						placeholder='name'
						type='text'
					/>
					<input
						className='ring-ringprimary rounded-sm py-2 px-4 ring-2'
						placeholder='email'
						type='email'
					/>
					<textarea
						className='ring-ringprimary rounded-sm py-2 px-4 ring-2'
						cols='30'
						id=''
						name=''
						placeholder='message'
						rows='10'
					/>
					<button
						disabled
						className='bg-primary hover:text-primary hover:border-ringprimary w-fit rounded-lg border-0 py-2 px-4 text-white hover:border-2 hover:bg-white'>
						SEND MESSAGE
					</button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
