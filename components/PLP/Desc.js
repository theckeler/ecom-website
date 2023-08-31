import Sort from "@/components/Buttons/Sort";
import Filter from "@/components/Buttons/Filter";
import IconCompare from "@/components/Icons/Compare";
import Compare from "@/components/Compare";

export default function Sticky({ blocks }) {
	return (
		<div className="sticky top-0 md:top-0 z-20 bg-gray-200" id="products">
			<ul className="flex items-center max-w-screen-2xl mx-auto px-3 py-2">
				<li>
					<Sort />
				</li>
				<li className="hidden lg:block">
					<ul className="flex items-center text-sm">
						<li>
							<a
								className="block p-3"
								href="?oops=1#Click-the-Zero-Turn-Mowers-link-that-is-the-plp">
								Ultima Series™ ZT
							</a>
						</li>
						<li>
							<a
								className="block p-3"
								href="?oops=1#Click-the-Zero-Turn-Mowers-link-that-is-the-plp">
								Ultima Series™ ZTS
							</a>
						</li>
						<li>
							<a
								className="block p-3"
								href="?oops=1#Click-the-Zero-Turn-Mowers-link-that-is-the-plp">
								Ultima Series™ ZTX
							</a>
						</li>
						<li>
							<a
								className="block p-3"
								href="?oops=1#Click-the-Zero-Turn-Mowers-link-that-is-the-plp">
								Ultima Series™ ZTXS
							</a>
						</li>
					</ul>
				</li>
				<li className="ml-auto flex">
					<Filter />

					<button
						className="bg-amber-400 p-3 ml-2"
						onClick={(e) => {
							const productFinder = document.querySelector("#product-finder");
							productFinder.scrollIntoView();
						}}
						aria-label="Help Me Decide">
						<ul className="flex items-center">
							<li className="h-6 w-6 mr-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
									<path d="M476 821q18 0 30.5-12.5T519 778q0-18-12.5-30.5T476 735q-18 0-30.5 12.5T433 778q0 18 12.5 30.5T476 821Zm-39-155h69q0-32 9.5-53.5T557 559q29-28 42.5-54.5T613 447q0-57-39-88t-98-31q-57 0-94 28t-54 72l63 26q11-23 31-41t56-18q33 0 50 17t17 41q0 22-12 39.5T499 531q-45 43-53.5 64.5T437 666ZM180 949q-29 0-51-22t-22-51V276q0-29 22-51t51-22h600q29 0 51 22t22 51v600q0 29-22 51t-51 22H180Z" />
								</svg>
							</li>
							<li className="text-xs uppercase">Help Me Decide</li>
						</ul>
					</button>

					<button
						className="hidden bg-red-500 p-3 ml-2"
						id="compare-button"
						onClick={() => {
							document.querySelector("#compare").classList.toggle("hidden");
						}}
						aria-label="Compare">
						<ul className="flex items-center">
							<li className="h-6 w-6 mr-2">
								<IconCompare />
							</li>
							<li className="text-xs uppercase">Compare</li>
						</ul>
					</button>
				</li>
			</ul>
			<section className="hidden" id="compare">
				<Compare className="p-2" />
			</section>
		</div>
	);
}
