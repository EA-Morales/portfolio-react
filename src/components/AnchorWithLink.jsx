const AnchorWithLink = ({ children, url, className }) => {
	return (
		<a
			className={`${className}`}
			href={url}
			rel='noopener noreferrer'
			target='_blank'>
			{children}
		</a>
	);
};

export default AnchorWithLink;
