const Menu = () => {
	return (
		// TODO refactor menu to not harcoded
		<div>
			<ul className='space-y-4 text-center text-3xl font-bold text-white'>
				<li className='hover:text-menuactive'>Projects</li>
				<li className='hover:text-menuactive'>About me</li>
				<li className='hover:text-menuactive'>Contact</li>
			</ul>
		</div>
	);
};

export default Menu;
