const Button = ({
	children,
	type = 'button',
	disabled = false,
	className,
	onClick = () => {},
}) => {
	return (
		<button
			className={`${className}`}
			disabled={disabled}
			type={type}
			onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
