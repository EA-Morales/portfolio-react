const Badge = ({ technologie }) => {
	return (
		<div className='rounded-3xl bg-white py-1 px-3'>
			<p className='text-secondary'>{technologie}</p>
		</div>
	);
};

export default Badge;
