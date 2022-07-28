import portrait from '../assets/images/portrait.jpg';

const About = () => {
	return (
		<div className='mt-20 grid min-h-[75vh] grid-cols-1 items-center md:grid-cols-3'>
			<div className='text-secondary space-y-8 pr-4 text-left text-lg leading-7 md:col-span-2'>
				<h2 className='text-primary shadow-primary drop-shadow-3xl text-3xl font-bold'>
					About Me 🌸
				</h2>
				<p className=''>
					Hello again! Thanks for scrolling this far!! 🤗 I recently graduated
					from Juno College of Technology (cohort 24 aka uno juno!). I also
					graduated from York University & Sheridan College with a bachelor of
					honors in design.
				</p>
				<p>
					Other than coding, I spend most of my free time playing Animal
					Crossing (add me!) or any other video games. 🤓 I&apos;ve also been
					trying to read more so feel free to reach out to me with any book
					recommendations!
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
