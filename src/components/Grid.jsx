import ProjectComponent from '../components/ProjectComponent';
import mockup from '../assets/images/prueba-mockup.png';

const Grid = () => {
	const projects = [
		{
			id: 1,
			image: mockup,
			title: 'Habit Tracker',
			description:
				'A simple React habit tracker that uses firebase database to keep track of your daily habits.',
			technologies: ['javascript', 'react', 'html', 'css'],
			links: [
				{ url: '#', name: 'Live' },
				{ url: '#', name: 'Github' },
			],
		},
		{
			id: 2,
			title: 'Into The Void',
			description:
				'A javascript mini-game application where you are dodging asteroids with your rocket!',
			technologies: ['javascript', 'react', 'html', 'css'],
			links: [
				{ url: '#', name: 'Live' },
				{ url: '#', name: 'Github' },
			],
		},
		{
			id: 3,
			title: 'Beeline',
			description:
				'A web app that uses APIs and datasets to find the nearest bike-share station to you and how many bikes/docks are available.',
			technologies: ['javascript', 'react', 'html', 'css'],
			links: [
				{ url: '#', name: 'Live' },
				{ url: '#', name: 'Github' },
			],
		},
		{
			id: 4,
			title: 'Versus',
			description:
				'A React app that allows users to create anonymous polls. Users can vote and keep track of their polls.',
			technologies: ['javascript', 'react', 'html', 'css'],
			links: [
				{ url: '#', name: 'Live' },
				{ url: '#', name: 'Github' },
			],
		},
	];

	return (
		<div className='grid-col-1 grid gap-8 lg:grid-cols-3'>
			{projects.map((project) => (
				<ProjectComponent
					key={project.id}
					description={project.description}
					id={project.id}
					image={project.image}
					links={project.links}
					technologies={project.technologies}
					title={project.title}
				/>
			))}
		</div>
	);
};

export default Grid;
