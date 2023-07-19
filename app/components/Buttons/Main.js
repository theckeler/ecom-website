export default function ButtonMain({
	title,
	className,
	href = null,
	noButton = false,
	buttonPadding = "py-3",
	onClick,
}) {
	const Type = noButton ? "div" : href ? "a" : "button";

	return (
		<Type
			className={`text-xs ${buttonPadding} ${className}`}
			href={href}
			onClick={onClick}
			aria-label={title}>
			{title}
		</Type>
	);
}
