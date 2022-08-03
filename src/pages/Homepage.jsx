import Projects from '@/pages/sections/Projects';
import MyToolkit from '@/components/MyToolkit';
import Hero from '@/pages/sections/Hero';
import About from '@/pages/sections/About';

const Homepage = () => {
	return (
		<div className='space-y-6'>
			<Hero />
			<Projects />
			<About />
			<MyToolkit />
		</div>
	);
};

export default Homepage;
