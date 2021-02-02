import Layout from '../components/Layout';
import BottomNav from '../components/BottomNav';
import BlockScreen from '../components/BlockScreen';
import AboutScreen from '../components/AboutScreen';
import { useState } from 'react';

export default function Home() {
	const [dir, setDir] = useState('block');

	return (
		<Layout>
			{dir === 'block' ? <BlockScreen /> : <AboutScreen />}
			<BottomNav dir={dir} setDir={setDir} />
		</Layout>
	);
}
