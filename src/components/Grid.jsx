import ProjectComponent from '../components/ProjectComponent';

const Grid = () => {
	const projects = [
		{ id: 1, name: 'Project 1' },
		{ id: 2, name: 'Project 2' },
		{ id: 3, name: 'Project 3' },
		{ id: 4, name: 'Project 4' },
	];

	return (
		<div className='grid-col-1 grid gap-8 lg:grid-cols-3'>
			{projects.map((project) => (
				<ProjectComponent
					key={project.id}
					id={project.id}
					name={project.name}
				/>
			))}
		</div>
	);
};

export default Grid;
