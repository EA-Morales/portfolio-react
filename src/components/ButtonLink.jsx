const Button = ({ url, children, className }) => {
	return (
		<a className={`${className}`} href={url} rel='noreferrer' target='_blank'>
			{children}
		</a>
	);
};

export default Button;
