import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';

const Homepage = () => {
	return (
		<div className='space-y-6'>
			<Hero />
			<Projects />
			<About />
		</div>
	);
};

export default Homepage;
