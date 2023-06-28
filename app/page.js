import H1 from "@/components/H1";
import CTAHero from "@/components/Hero";
import ProductFinder from "@/components/Product/Finder";
import ProductCard from "@/components/Product/Card";

import homeJSON from "@/data/home.json";

export default function Index() {
	return (
		<>
			<ul className="pb-20">
				<li className="mb-8">
					<div className="max-w-screen-2xl mx-auto p-3">
						<CTAHero block={homeJSON.ctaHero[0]} minHeight="xl" />
					</div>
				</li>

				<li className="">
					<div className="max-w-screen-2xl mx-auto p-3">
						<H1
							title="Product Lineup"
							srOnly="Cub Cadet"
							className="mb-8 text-center"
						/>

						<ul className="flex lg:grid lg:grid-cols-4 gap-2 pb-6 lg:pb-0 overflow-x-auto overflow-scrollbar">
							{homeJSON.categories.map(function (block, i) {
								return (
									<li
										className={`min-w-[250px] ${block.span && "lg:col-span-2"}`}
										key={i}>
										<ProductCard
											block={block}
											className="h-full"
											style={{ backgroundColor: "#ecedee" }}
										/>
									</li>
								);
							})}
						</ul>
					</div>
				</li>

				<li className="mt-4">
					<div className="bg-gray-300 p-3 lg:py-8">
						<ProductFinder className="max-w-screen-2xl mx-auto" />
					</div>
				</li>

				<li className="bg-gray-200 p-4 lg:p-8">
					<ul className="max-w-screen-2xl mx-auto flex md:grid md:grid-cols-2 xl:grid-cols-3 gap-2 pb-6 lg:pb-0 overflow-x-auto overflow-scrollbar">
						{homeJSON.ctaBlocks.map(function (block, i) {
							return (
								<li
									className={`min-w-[250px] ${block.span && "lg:col-span-2"}`}
									key={i}>
									<ProductCard
										block={block}
										className="h-full"
										style={{ backgroundColor: "#ecedee" }}
									/>
								</li>
							);
						})}
					</ul>
				</li>

				<li className="max-w-screen-2xl mx-auto py-3 lg:py-8">
					<CTAHero
						block={homeJSON.ctaHero[1]}
						blockWidths={{ l: 4, r: 8 }}
						minHeight="xs"
						reverse
						fullButton
					/>

					<CTAHero
						block={homeJSON.ctaHero[2]}
						reverse
						minHeight="lg"
						className="mt-6"
					/>

					<CTAHero
						block={homeJSON.ctaHero[1]}
						blockWidths={{ l: 6, r: 6 }}
						minHeight="xs"
						className="mt-6"
					/>

					<CTAHero
						block={homeJSON.ctaHero[2]}
						blockWidths={{ l: 8, r: 4 }}
						minHeight="xs"
						className="mt-6"
					/>

					<CTAHero
						block={homeJSON.ctaHero[1]}
						blockWidths={{ l: 9, r: 3 }}
						minHeight="xs"
						className="mt-6"
					/>
				</li>
			</ul>
		</>
	);
}
