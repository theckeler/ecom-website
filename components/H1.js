export default function H1({ title, srOnly, className = null }) {
	return (
		<h1
			className={`text-2xl lg:text-3xl xl:text-4xl dark:text-neutral-200 ${className}`}>
			<span className="sr-only">{srOnly}</span> {title}
		</h1>
	);
}
