import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import BlockSymbol from './svg/BlockSymbol';

export default function Layout({ children }) {
	const [dir, setDir] = useState('block');

	return (
		<div className='w-full h-screen flex justify-center items-center'>
			<div className='w-80 h-96 rounded-2xl shadow-2xl overflow-hidden'>
				<div className='h-80 w-full flex justify-center items-center'>{children}</div>
				<div className='h-16 w-full flex shadow-2xl justify-around items-center'>
					<div
						className='w-16 h-full flex justify-center items-center'
						onClick={() => setDir('block')}
					>
						<div
							className={`flex justify-center items-center rounded-full overflow-visible overflow-visible duration-200 bg-red-400 ${
								dir === 'block' ? 'w-10 h-10' : 'w-0 h-0'
							}`}
						>
							<div
								className={`w-6 overflow-visible ${
									dir === 'block' ? 'text-white' : 'text-red-400'
								}`}
								onClick={() => setDir('about')}
							>
								<BlockSymbol />
							</div>
						</div>
					</div>
					<div
						className='w-16 h-full flex justify-center items-center'
						onClick={() => setDir('about')}
					>
						<div
							className={`flex justify-center items-center rounded-full overflow-visible duration-200 bg-red-400 ${
								dir === 'about' ? 'w-10 h-10' : 'w-0 h-0'
							}`}
						>
							<FontAwesomeIcon
								icon={faQuestion}
								className={dir === 'about' ? 'text-white' : 'text-red-400'}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
