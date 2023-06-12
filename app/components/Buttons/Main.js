export default function Button({
	title,
	className,
	addStyle,
	noIcon = false,
	href = null,
	noButton = false,
	buttonPadding = "py-3",
}) {
	const Type = noButton ? "div" : href ? "a" : "button";

	return (
		<Type
			className={`text-sm lg:text-base ${buttonPadding} ${className}`}
			href={href}>
			{title}
		</Type>
	);
}
