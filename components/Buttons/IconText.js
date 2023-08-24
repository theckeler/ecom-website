export default function IconText({ title, className, Icon, onClick }) {
	return (
		<button
			className={`p-2 flex items-center justify-center uppercase min-h-full group ${className}`}
			onClick={onClick}
			aria-label={title}>
			<Icon />
			{title}
		</button>
	);
}
