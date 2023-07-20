import Link from "next/link";

export default function HeaderButton({
	title,
	buttonIcon,
	className = "",
	onClick = null,
	style,
	ariaLabel = { title },
}) {
	const LinkType = onClick ? "button" : Link;

	return (
		<LinkType
			href="?oops=1#Click-the-Zero-Turn-Mowers-link-that-is-the-plp"
			className={`p-2 flex items-center ${className}`}
			style={style}
			aria-label={ariaLabel}
			onClick={onClick}>
			{buttonIcon}
			<span className="hidden xl:block whitespace-nowrap">{title}</span>
		</LinkType>
	);
}
