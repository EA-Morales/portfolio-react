import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Badge from './Badge';
import ButtonLink from './ButtonLink';

const ProjectComponent = ({
	id,
	image,
	title,
	description,
	technologies,
	links,
	animation,
	delay,
}) => {
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(!show);
	};

	AOS.init();

	return (
		<div
			className='z-0 flex h-96 items-center justify-center overflow-hidden rounded-xl bg-red-300 bg-cover bg-center bg-no-repeat shadow-md lg:first:col-span-2 lg:last:col-span-2'
			data-aos={animation}
			data-aos-delay={delay}
			data-aos-duration='250'
			style={{ backgroundImage: `url(${image})` }}
			onClick={() => handleClick()}>
			{show && (
				<div className='relative z-[2] flex h-full w-full items-center justify-center bg-black/80 '>
					<p className='absolute top-2 right-5 text-3xl text-white'>x</p>
					<div className='flex w-3/4 flex-col items-center  space-y-2 md:space-y-6'>
						<h2 className='text-primary text-center text-3xl font-bold'>
							{title}
						</h2>
						<p className='text-center text-white'>{description}</p>
						<div className='flex flex-wrap items-center justify-center gap-2'>
							{technologies.map((technologie) => (
								<Badge key={technologie} technologie={technologie} />
							))}
						</div>
						<div className='flex gap-4'>
							{' '}
							{links.map((link) => (
								<ButtonLink
									key={link.url}
									className='bg-primary hover:text-primary mt-2 w-fit rounded-lg border-0 py-1 px-4 text-white hover:bg-white'>
									{link.name}
								</ButtonLink>
							))}{' '}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProjectComponent;
