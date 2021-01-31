import Link from 'next/link';

export default function TopBar(props) {
	return (
		<div className='w-full bg-gray-50'>
			<div className='max-w-screen-md m-auto px-4 h-16 flex items-center justify-between'>
				<div className='w-10 h-10'>
					<img src='/logo.svg' alt='' />
				</div>
				<div className='flex'>
					<div className='pl-10'>
						<Link href='/'>Home</Link>
					</div>
					<div className='pl-10'>
						<Link href='/'>About Us</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
