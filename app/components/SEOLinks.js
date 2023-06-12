export default function SEOLinks() {
	return (
		<ul className="grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 lg:gap-4">
			{[...Array(8)].map((x, i) => (
				<li key={i}>
					<a
						href="#top"
						className="underline flex items-center border p-2 text-xs rounded-2xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 96 960 960"
							className="max-h-6 mr-2">
							<path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" />
						</svg>
						Lorem ipsum dolor sit amet
					</a>
				</li>
			))}
		</ul>
	);
}
