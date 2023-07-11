export default function ViewMore({ title, className, addStyle, onClick }) {
	return (
		<button
			className={`px-8 py-4 lg:hover:bg-amber-300 border-amber-300 border flex items-center ${className}`}
			onClick={onClick}
			aria-label="View More">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="26"
				height="26"
				viewBox="0 96 960 960"
				className="mr-2">
				<path d="m480 705 173-173-43-42-130 130-130-130-43 42 173 173Zm0 271q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z" />
			</svg>
			{title}
		</button>
	);
}
