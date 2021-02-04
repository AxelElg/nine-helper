export default function Layout({ children }) {
	return (
		<div className='w-full h-screen p-6 flex justify-center items-center'>
			<div className='h-layout-obj w-80 rounded-2xl shadow-big overflow-hidden'>{children}</div>
		</div>
	);
}
