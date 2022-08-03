import ChevronDown from '@/assets/icons/ChevronDown';
import Menu from '@/assets/icons/Menu';

const Navbar = ({ setModal }) => {
	return (
		<div className='group hover:ease-in-out' onClick={() => setModal(true)}>
			<Menu className='text-primary w-6 group-hover:hidden' />
			<ChevronDown className='text-primary hidden w-6 group-hover:block' />
		</div>
	);
};

export default Navbar;
