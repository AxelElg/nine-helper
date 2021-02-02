export default function Layout({ children }) {
	return (
		<div className='w-full h-screen flex justify-center items-center'>
			<div className='w-80 h-96 rounded-2xl shadow-2xl overflow-hidden'>{children}</div>
		</div>
	);
}
