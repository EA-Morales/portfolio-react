import ChevronDown from '../assets/icons/ChevronDown';
import avatar from '../assets/images/avatar.png';

const Hero = () => {
	return (
		<div className='relative grid min-h-[95vh] content-center'>
			<div className='grid grid-cols-6 content-center items-center'>
				<div className='col-span-4 pr-8 text-left'>
					<h1 className='text-primary shadow-primary drop-shadow-3xl mb-8 text-5xl font-bold'>
						Hello im agustin 👋🏻
					</h1>
					<p className='text-secondary text-xl leading-8'>
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
					<p className='text-secondary text-xl'>
						Currently working as a Freelance react developer ⚛️
					</p>
				</div>
				<div className='col-span-2 mx-auto'>
					<img alt='' className='w-56' src={avatar} />
				</div>
			</div>
			<ChevronDown className='text-primaryaccent absolute bottom-0 left-1/2 w-4 animate-bounce' />
		</div>
	);
};

export default Hero;
