import ChevronDown from '../assets/icons/ChevronDown';
import avatar from '../assets/images/avatar.png';

const Hero = () => {
	return (
		<div className='relative grid min-h-[95vh] content-center'>
			<div className='grid-col-1 grid content-center items-center md:grid-cols-6'>
				<div className='mb-1 pr-8 text-left md:col-span-4 md:mb-0'>
					<h1 className='text-primary shadow-primary drop-shadow-3xl mb-8 text-3xl font-bold md:text-5xl'>
						Hello im agustin 👋🏻
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
					<p className='text-secondary text-lg md:text-xl'>
						Currently working as a Freelance react developer ⚛️
					</p>
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
