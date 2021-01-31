import Layout from '../../components/Layout';
import wordFinder from '../../components/functions/wordFinder';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Home() {
	const [word, setWord] = useState([]);
	const router = useRouter();
	const { pid } = router.query;

	useEffect(() => {
		pid && setWord(wordFinder(wordFinder(pid.split(''))));
	}, [pid]);

	return <Layout>{word.length > 0 && word}</Layout>;
}
