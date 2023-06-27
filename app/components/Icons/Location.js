export default function Location({
	className = null,
	fillColor = "fill-black",
}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 96 960 960"
			className={className}>
			<path
				d="M480.089 566Q509 566 529.5 545.411q20.5-20.588 20.5-49.5Q550 467 529.411 446.5q-20.588-20.5-49.5-20.5Q451 426 430.5 446.589q-20.5 20.588-20.5 49.5Q410 525 430.589 545.5q20.588 20.5 49.5 20.5ZM480 976Q319 839 239.5 721.5T160 504q0-150 96.5-239T480 176q127 0 223.5 89T800 504q0 100-79.5 217.5T480 976Z"
			/>
		</svg>
	);
}
