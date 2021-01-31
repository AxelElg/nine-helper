import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
	const router = useRouter();
	const [letter, _setLetter] = useState([]);

	const setNewLetter = e => {
		const { value, id } = e;
		letter[id] = value;
	};

	const submitLetters = () => {
		const acceptedQuery = letter.every(e => e.match(/^[a-ö]$/));
		console.log(acceptedQuery);
		if (acceptedQuery) {
			router.push(`letters/${letter.join('')}`);
		}
	};

	return (
		<Layout>
			<div className='w-full py-20'>
				<div className='w-32 h-32 m-auto grid grid-cols-3 gap-1 bg-black p-1'>
					{[...new Array(9)].map((_e, i) => (
						<input
							id={i}
							key={i}
							className={`${i === 4 && 'bg-black text-white'} text-center text-3xl`}
							type='text'
							onChange={event => setNewLetter(event.target)}
						/>
					))}
				</div>
				<button className='w-24 m-auto bg-blue-500' onClick={() => submitLetters()}>
					Find Word
				</button>
			</div>
		</Layout>
	);
}
