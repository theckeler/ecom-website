"use client";

export default function LinksOutput({
	links,
	row = false,
	alignRight = false,
}) {
	return (
		<ul
			className={`${row && "sm:flex items-center"} ${alignRight && "ml-auto"}`}>
			{links.map((link, i) => {
				return (
					<li key={i}>
						<a
							className={`flex items-center sm:text-xs underline p-4 w-full ${
								!row && "sm:p-2"
							} ${link.className}`}
							href={
								link.url
									? link.url
									: "?oops=1#Click-the-Zero-Turn-Mowers-link-that-is-the-plp"
							}>
							{link.icon && link.icon}
							<span className={`inline-block w-full ${link.className}`}>
								{link.title}
							</span>
						</a>
					</li>
				);
			})}
		</ul>
	);
}
