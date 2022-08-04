import portrait from '@/assets/images/portrait.jpg';

const About = () => {
	return (
		<div
			className='mt-20 grid min-h-[75vh] grid-cols-1 items-center md:grid-cols-3'
			id='about'>
			<div className='text-secondary space-y-8 pr-4 text-left text-lg leading-7 md:col-span-2'>
				<h2 className='text-primary shadow-primary drop-shadow-3xl text-3xl font-bold'>
					About Me 🌸
				</h2>
				<p className=''>
					<span className='text-primary'>Frontend student</span>, looking for
					the opportunity to gain experience with{' '}
					<span className='text-primary'>
						Javascript, React, frontend frameworks, CSS frameworks, and
						Javascript backend frameworks.
					</span>{' '}
					I like to work in a team, cooperate with everyone, and helping the
					best possible way, with great satisfaction in teaching and learning.
				</p>
				<p>
					I am looking for opportunities to work in web development, which allow
					my intellectual growth and develop my technical knowledge, to grow
					together with the company and my coworkers.
				</p>
			</div>
			<div className='flex items-center justify-center p-6'>
				<img
					alt='image portrait'
					className='max-h-64 rounded-md shadow-md md:max-h-72'
					src={portrait}
				/>
			</div>
		</div>
	);
};

export default About;
