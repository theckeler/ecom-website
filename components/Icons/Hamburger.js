export default function Hamburger({
	className = null,
	fillColor = "fill-black",
}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 96 960 960"
			className={className}>
			<path
				d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
				fill={fillColor}
			/>
		</svg>
	);
}
