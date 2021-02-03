export default function Layout({ children }) {
	return (
		<div className='w-full h-screen flex justify-center items-center'>
			<div className='w-80 h-layout-obj rounded-2xl shadow-big overflow-hidden'>{children}</div>
		</div>
	);
}
