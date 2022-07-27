import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import MyToolkit from '../components/MyToolkit';

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
