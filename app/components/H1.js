export default function H1({ title, srOnly, className = null }) {
	return (
		<h1 className={`text-3xl lg:text-4xl ${className}`}>
			<span className="sr-only">{srOnly}</span> {title}
		</h1>
	);
}
