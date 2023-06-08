export default function ScrollButton({
	className,
	onClick,
	buttonType,
	rotate,
}) {
	return (
		<button
			className={`hidden lg:group-hover/buttons:block absolute z-50 top-2/4 -translate-y-2/4 ${className}`}
			id={`related-${buttonType}`}
			onClick={onClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 48 48"
				className={`group/svg w-14 ${!!rotate && "rotate-180"}`}>
				<path
					className="fill-black-900 lg:group-hover/svg:fill-amber-400"
					d="M24 44c-2.7 0-5.3-.5-7.8-1.6-2.4-1-4.6-2.5-6.4-4.3s-3.2-3.9-4.3-6.4S4 26.7 4 24c0-2.8.5-5.4 1.6-7.8s2.5-4.6 4.3-6.4 3.9-3.2 6.4-4.3S21.3 4 24 4c2.8 0 5.4.5 7.8 1.6s4.6 2.5 6.4 4.3 3.2 3.9 4.3 6.4c1.1 2.4 1.6 5 1.6 7.8 0 2.7-.5 5.3-1.6 7.8-1 2.4-2.5 4.6-4.3 6.4s-3.9 3.2-6.4 4.3c-2.4.9-5 1.4-7.8 1.4z"
				/>
				<path
					className="fill-amber-400 lg:group-hover/svg:fill-black"
					d="m24 31.3 7.3-7.3-7.3-7.3-2.1 2.1 3.7 3.7h-9.1v3h9.1l-3.7 3.7z"
				/>
			</svg>
		</button>
	);
}
