import ProjectComponent from '@/components/ProjectComponent';
import prueba from '@/assets/images/prueba.jpg';
import cardSummary from '@/assets/images/card-summary-mockup.jpg';
import moviesPoster from '@/assets/images/movies-poster-mockup.jpg';
import portfolioImage from '@/assets/images/portfolio-react-mockup.jpg';

const Grid = () => {
	const projects = [
		{
			id: 1,
			image: prueba,
			title: 'Portfolio Argentina Programa',
			description:
				'A simple portolio for bootcamp Argentina Programa, made with Angular, database in mysql and springboot as a backend with login and oauth2.',
			technologies: ['html', 'tailwind', 'angular', 'springboot', 'mysql'],
			links: [
				{ url: 'https://portfolio-argentina-programa.web.app', name: 'Live' },
				{ url: 'https://github.com/EA-Morales/Portfolio', name: 'Github' },
			],
			animation: 'fade-right',
			delay: '250',
		},
		{
			id: 2,
			image: cardSummary,
			title: 'Order Summary Component',
			description:
				'Frontend Mentor challenge, made with html and scss, a simple component to show the order summary.',
			technologies: ['Html', 'Sass'],
			links: [
				{
					url: 'https://ea-morales.github.io/order-summary-component-main',
					name: 'Live',
				},
				{
					url: 'https://github.com/EA-Morales/order-summary-component-main',
					name: 'Github',
				},
			],
			animation: 'fade-left',
			delay: '500',
		},
		{
			id: 3,
			image: moviesPoster,
			title: 'Movies Poster',
			description:
				'This challenge was made for Codo a Codo bootcamp, is a simple page with a list of movies and a search bar to search for a movie.',
			technologies: ['html', 'tailwindcss', 'react', 'Api'],
			links: [
				{ url: '#', name: 'Live' },
				{ url: 'https://github.com/EA-Morales/movies-posters', name: 'Github' },
			],
			animation: 'fade-left',
			delay: '750',
		},
		{
			id: 4,
			image: portfolioImage,
			title: 'Portfolio React',
			description:
				'A portfolio made with react, react-router-dom, tailwindcss and styled-components.',
			technologies: ['javascript', 'react', 'html', 'css'],
			links: [
				{ url: '#', name: 'Live' },
				{
					url: 'https://github.com/EA-Morales/portfolio-react',
					name: 'Github',
				},
			],
			animation: 'fade-down',
			delay: '1000',
		},
	];

	return (
		<div className='grid-col-1 grid gap-8 lg:grid-cols-3'>
			{projects.map((project) => (
				<ProjectComponent
					key={project.id}
					animation={project.animation}
					delay={project.delay}
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
