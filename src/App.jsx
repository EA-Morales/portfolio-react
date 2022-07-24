import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
	return (
		<div className='container static mx-auto py-4 px-20'>
			<div className='fixed top-4 right-8'>
				<Navbar />
			</div>
			<Homepage />
		</div>
	);
}

export default App;
