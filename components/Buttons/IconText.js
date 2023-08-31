export default function IconText({ title, className, icon, onClick }) {
	return (
		<button
			className={`p-2 flex items-center justify-center uppercase min-h-full group ${className}`}
			onClick={onClick}
			aria-label={title}>
			{icon}
			{title}
		</button>
	);
}
