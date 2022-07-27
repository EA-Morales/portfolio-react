import { useState } from 'react';

const ProjectComponent = ({ id, name }) => {
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(!show);
	};

	return (
		<div
			className='z-0 flex h-96 items-center justify-center overflow-hidden rounded-xl bg-red-300 lg:first:col-span-2 lg:last:col-span-2'
			onClick={() => handleClick()}>
			{!show && <div>{name}</div>}
			{show && (
				<div className='relative z-[2] flex h-full w-full items-center justify-center bg-slate-500/25 '>
					hola mundo + {name}
					<p className='absolute top-2 right-5 text-3xl text-white'>x</p>
				</div>
			)}
		</div>
	);
};

export default ProjectComponent;
