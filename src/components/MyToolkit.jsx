import { AiOutlineHtml5, AiOutlineGithub } from 'react-icons/ai';
import { DiCss3, DiSass, DiReact } from 'react-icons/di';
import {
	SiJavascript,
	SiTailwindcss,
	SiFigma,
	SiFirebase,
} from 'react-icons/si';

const MyToolkit = () => {
	return (
		<div className='h-[75vh]'>
			<h2 className='text-primary shadow-primary drop-shadow-3xl mb-10 text-3xl font-bold'>
				My Toolkit 💻
			</h2>
			<div className='mx-auto flex max-w-3xl flex-wrap justify-center gap-4'>
				<div className='flex aspect-square w-28 flex-col items-center justify-center'>
					<AiOutlineHtml5 className='text-secondary' size='3em' />
					<p className='font-script text-lg'>Html 5</p>
				</div>
				<div className='flex aspect-square w-28 flex-col items-center justify-center'>
					<DiCss3 className='text-secondary' size='3em' />
					<p className='font-script text-lg'>Css</p>
				</div>
				<div className='flex aspect-square w-28 flex-col items-center justify-center'>
					<DiSass className='text-secondary' size='3em' />
					<p className='font-script text-lg'>Sass</p>
				</div>
				<div className='flex aspect-square w-28 flex-col items-center justify-center'>
					<SiTailwindcss className='text-secondary' size='3em' />
					<p className='font-script text-lg'>Tailwind css</p>
				</div>
				<div className='flex aspect-square w-28 flex-col items-center justify-center'>
					<SiJavascript className='text-secondary rounded-xl' size='3em' />
					<p className='font-script text-lg'>Javascript</p>
				</div>
				<div className='flex aspect-square w-28 flex-col items-center justify-center'>
					<DiReact className='text-secondary rounded-xl' size='3em' />
					<p className='font-script text-lg'>React</p>
				</div>
				<div className='flex aspect-square w-28 flex-col items-center justify-center'>
					<SiFigma className='text-secondary rounded-xl' size='3em' />
					<p className='font-script text-lg'>Figma</p>
				</div>
				<div className='flex aspect-square w-28 flex-col items-center justify-center'>
					<SiFirebase className='text-secondary rounded-xl' size='3em' />
					<p className='font-script text-lg'>Firebase</p>
				</div>
				<div className='flex aspect-square w-28 flex-col items-center justify-center'>
					<AiOutlineGithub className='text-secondary rounded-xl' size='3em' />
					<p className='font-script text-lg'>Github</p>
				</div>
			</div>
		</div>
	);
};

export default MyToolkit;
