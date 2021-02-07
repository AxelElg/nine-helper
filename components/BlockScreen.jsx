import React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function BlockScreen() {
	const router = useRouter();
	const [letter, setLetter] = useState([]);
	const [submitAble, setSubmitAble] = useState(false);

	const setNewLetter = e => {
		const { value } = e.target;
		if (value.length > 0) {
			setLetter(value.split(''));
		} else {
			setLetter([]);
		}
	};

	const submitLetters = () => {
		router.push('/letters/' + letter.join('').toLowerCase());
	};

	useEffect(() => {
		const acceptedQuery = letter.length === 9 && letter.every(e => e.match(/^[a-ö]$/));

		if (acceptedQuery && !submitAble) {
			setSubmitAble(true);
		}

		if (!acceptedQuery && submitAble) {
			setSubmitAble(false);
		}
	}, [letter]);

	return (
		<div className='w-full h-layout-top p-6 flex flex-col items-center justify-evenly'>
			<div className='w-24 h-24 grid grid-cols-3 gap-1 bg-red-400 transform -rotate-12 text-red-400 rounded-xl border-4 border-red-400 overflow-hidden'>
				{[...new Array(9)].map((_e, i) => (
					<input
						id={i}
						key={i}
						className={`${
							i === 4 && 'bg-red-400 text-white'
						} text-center text-md font-bold pointer-events-none uppercase font-serif`}
						type='text'
						defaultValue={letter[i] || ''}
					/>
				))}
			</div>
			<div className='h-24 flex flex-col justify-between'>
				<input
					type='text'
					maxLength='9'
					className=' text-xl px-2 w-full h-10 tracking-widest border-2 border-black rounded font-serif'
					onKeyUp={setNewLetter}
				/>
				<button
					className={`w-full h-10 text-white font-bold rounded ${
						submitAble ? 'bg-black' : 'bg-gray-200 pointer-events-none'
					}`}
					onClick={submitLetters}
				>
					Find Word
				</button>
			</div>
		</div>
	);
}
