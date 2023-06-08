export default function Stars({ num = 5, starSize = 20, className }) {
	return (
		<ul className={`flex ${className}`}>
			{[...Array(num)].map((x, i) => (
				<li key={i}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={starSize}
						height={starSize}
						viewBox="0 96 960 960">
						<path d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
					</svg>
				</li>
			))}
		</ul>
	);
}
