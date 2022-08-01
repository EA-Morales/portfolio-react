import { AiOutlineHtml5, AiOutlineGithub } from 'react-icons/ai';
import { DiCss3, DiSass, DiReact } from 'react-icons/di';
import {
	SiJavascript,
	SiTailwindcss,
	SiFigma,
	SiFirebase,
} from 'react-icons/si';

const MyToolkit = () => {
	const Toolkit = [
		{ name: 'Html 5', icono: <AiOutlineHtml5 /> },
		{ name: 'Css', icono: <DiCss3 /> },
		{ name: 'Sass', icono: <DiSass /> },
		{ name: 'Tailwind css', icono: <SiTailwindcss /> },
		{ name: 'Javascript', icono: <SiJavascript /> },
		{ name: 'React', icono: <DiReact /> },
		{ name: 'Figma', icono: <SiFigma /> },
		{ name: 'Firebase', icono: <SiFirebase /> },
		{ name: 'Github', icono: <AiOutlineGithub /> },
	];

	return (
		<div className='min-h-[55vh]'>
			<h2 className='text-primary shadow-primary drop-shadow-3xl mb-10 text-3xl font-bold'>
				My Toolkit 💻
			</h2>
			<div className='mx-auto flex max-w-3xl flex-wrap justify-center gap-4'>
				{Toolkit.map((tool) => (
					<div
						key={tool.name}
						className='flex aspect-square w-28 flex-col items-center justify-center'>
						<div className='text-secondary text-5xl'>{tool.icono}</div>
						<p className='font-script text-lg'>{tool.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyToolkit;
