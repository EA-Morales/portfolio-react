const Button = ({ url, name }) => {
	return (
		<a
			className='bg-primary hover:text-primary mt-2 w-fit rounded-lg border-0 py-1 px-4 text-white hover:bg-white'
			href={url}
			rel='noreferrer'
			target='_blank'>
			{name}
		</a>
	);
};

export default Button;
