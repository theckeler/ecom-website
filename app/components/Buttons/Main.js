export default function ButtonMain({
	title,
	className,
	href = null,
	noButton = false,
	buttonPadding = "py-4",
	onClick,
	icon,
}) {
	const Type = noButton ? "div" : href ? "a" : "button";

	return (
		<Type
			className={`text-xs ${!icon && buttonPadding} ${className}`}
			href={href}
			onClick={onClick}
			aria-label={title}>
			{icon ? icon : title}
		</Type>
	);
}
