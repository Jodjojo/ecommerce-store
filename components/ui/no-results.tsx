///Reusable component that will be used each time a search gives no retyrned result

const NoResults = () => {
	return (
		<div className='flex items-center justify-center h-full w-full text-neutral-500'>
			No results found.
		</div>
	);
};

export default NoResults;
