import type { NextPage } from 'next';
import DarkModeToggle from '../components/Navbar/DarkModeToggle';
//----------------------------------------------------------

const Home: NextPage = () => {
	return (
		<>
			<DarkModeToggle />
		</>
	);
};

export default Home;
