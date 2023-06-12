export default function Hamburger({
	className = null,
	fillColor = "fill-black",
	style,
}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -960 960 960"
			className={className}
			style={style}>
			<path
				d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
				fill={fillColor}
			/>
		</svg>
	);
}
