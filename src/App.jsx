import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles/App.css';

function App() {
	const [modal, setModal] = useState(false);

	return (
		<>
			<div className='container mx-auto p-4 lg:px-20'>
				<div className='fixed top-4 right-8 z-[2]'>
					<Navbar setModal={setModal} />
				</div>
				<Routes>
					<Route element={<Homepage />} path='/' />
				</Routes>

				{modal && (
					<Modal setModal={setModal}>
						<Menu setModal={setModal} />
					</Modal>
				)}
			</div>
			<Contact />
			<Footer />
		</>
	);
}

export default App;
