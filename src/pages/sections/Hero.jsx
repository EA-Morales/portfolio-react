import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { SiDiscord } from 'react-icons/si';

import avatar from '@/assets/images/avatar.png';
import ChevronDown from '@/assets/icons/ChevronDown';
import AnchorWithLink from '@/components/AnchorWithLink';

const Hero = () => {
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
		<div className='relative grid min-h-[95vh] content-center'>
			<div className='grid-col-1 grid content-center items-center md:grid-cols-6'>
				<div className='mb-1 pr-8 text-left md:col-span-4 md:mb-0'>
					<h1 className='text-primary shadow-primary drop-shadow-3xl mb-8 text-3xl font-bold md:text-5xl'>
						Hello i&apos;m agustin 👋🏻
					</h1>
					<p className='text-secondary text-lg leading-8 md:text-xl'>
						A multidisciplinary{' '}
						<span className='text-primary'>Frontend developer</span> and{' '}
						<span className='text-primary'>designer</span>{' '}
						<span className='font-script text-secondaryaccent'>
							(sometimes){' '}
						</span>
						with a passion for creating engaging, entertaining user experiences.
						✨
					</p>
					<br />
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
				<div className='mx-auto md:col-span-2'>
					<img alt='' className='w-36 md:w-56' src={avatar} />
				</div>
			</div>
			<ChevronDown className='text-primaryaccent absolute bottom-0 left-1/2 w-4 animate-bounce' />
		</div>
	);
};

export default Hero;
