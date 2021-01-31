import Head from 'next/head';

export default function Layout({ children }) {
	return (
		<div className='w-full h-screen flex justify-center items-center'>
			<div className='w-80 h-96 rounded-2xl shadow-2xl overflow-hidden'>
				<div className='h-80 w-full flex justify-center items-center'>{children}</div>
				<div className='h-16 w-full flex shadow-2xl justify-around items-center'>
					<div>B</div>
					<div>A</div>
				</div>
			</div>
		</div>
	);
}
