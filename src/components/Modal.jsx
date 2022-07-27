import { createPortal } from 'react-dom';

import Close from '../assets/icons/Close';
import ChevronUp from '../assets/icons/ChevronUp';

const Modal = ({ children, setModal }) => {
	return createPortal(
		<div className='bg-menuprimary fixed inset-0 z-10 flex items-center justify-center'>
			<div
				className='group absolute top-4 right-8'
				onClick={() => setModal(false)}>
				<Close className='w-6 font-bold text-white group-hover:hidden' />
				<ChevronUp className='hidden w-6 font-bold text-white group-hover:block' />
			</div>

			<div className='relative'>{children}</div>
		</div>,
		document.getElementById('modal-container')
	);
};

export default Modal;
