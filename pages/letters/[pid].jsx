import Layout from '../../components/Layout';
import wordFinder from '../../components/functions/wordFinder;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Letters() {
	const router = useRouter();
	const [word, setWord] = useState([]);
	const { pid } = router.query;

	const goBack = () => {
		router.back();
	};

	useEffect(() => {
		pid && setWord(wordFinder(wordFinder(pid.split(''))));
	}, [pid]);

	return (
		<Layout>
			<div className='w-full h-full'>
				{word.length > 0 ? (
					<>
						<div className=' w-full h-layout-res-top flex flex-col justify-center items-center'>
							<div className='text-red-400 font-serif text-xl font-bold text-center pb-2'>
								Result:
							</div>
							<div className='text-black font-serif text-3xl font-bold text-center'>{word}</div>
						</div>
						<div className='w-full h-24 flex justify-center items-center'>
							<div
								className='h-16 w-16 shadow-medium rounded-full flex justify-center items-center cursor-pointer'
								onClick={goBack}
							>
								<FontAwesomeIcon icon={faAngleLeft} className='text-red-400' size='lg' />
							</div>
						</div>
					</>
				) : (
					<div className=' text-3xl font-serif'>Loading...</div>
				)}
			</div>
		</Layout>
	);
}
