import { HashLink } from 'react-router-hash-link';

const Menu = ({ setModal }) => {
	return (
		// TODO refactor menu to not harcoded
		<div>
			<ul className='space-y-4 text-center text-3xl font-bold text-white'>
				<li>
					<HashLink
						smooth
						className='hover:text-menuactive'
						to={'/#projects'}
						onClick={() => setModal(false)}>
						Projects
					</HashLink>
				</li>
				<li>
					<HashLink
						smooth
						className='hover:text-menuactive'
						to={'/#about'}
						onClick={() => setModal(false)}>
						About me
					</HashLink>
				</li>
				<li>
					<HashLink
						smooth
						className='hover:text-menuactive'
						to={'/#contact'}
						onClick={() => setModal(false)}>
						Contact
					</HashLink>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
