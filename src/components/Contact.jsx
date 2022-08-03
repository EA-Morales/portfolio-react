import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { SiDiscord } from 'react-icons/si';

import AnchorWithLink from './AnchorWithLink';
import ContactForm from './ContactForm';

const Contact = () => {
	const Links = [
		{
			icono: <FaLinkedinIn />,
			url: 'https://www.linkedin.com/in/eduardo-agustin-morales/',
			style: 'text-primary hover:text-primaryaccent text-2xl',
		},
		{
			icono: <FaGithub />,
			url: 'https://github.com/EA-Morales',
			style: 'text-primary hover:text-primaryaccent text-2xl',
		},
		{
			icono: <SiDiscord />,
			url: 'https://discordapp.com/users/L3GOL4S#1616',
			style: 'text-primary hover:text-primaryaccent text-2xl',
		},
		{
			icono: <HiMail />,
			url: 'mailto:eduardo.agustin.morales@gmail.com',
			style: 'text-primary hover:text-primaryaccent text-2xl',
		},
	];

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
					<div className='flex gap-8'>
						{Links.map((link) => (
							<AnchorWithLink
								key={link.url}
								className={link.style}
								url={link.url}>
								{link.icono}
							</AnchorWithLink>
						))}
					</div>
				</div>
				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;
