import Image from "next/image";
import Link from "next/link";

import H1 from "@/components/H1";
// import SEOGreek from "@/components/SEOGreek";
// import SEOLinks from "@/components/SEOLinks";
import CTABlock from "@/cta/Block";
import CTAHero from "@/cta/Hero";
import Large from "@/cta/Large";
import ProductBlock from "@/product/Block";
import ProductFinder from "@/product/Finder";
import CategoryCard from "@/cards/Category";

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

						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							<li>
								<Large
									src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw5e9e50e9/images/product-line-landing/Main-Carousel/RidingMow_ProdLineLand_Hero_ZT1-50_01_desktop_1015x630_v1.jpg"
									title="Zero Turn Mowers"
									p="Designed with strength, comfort and the ability to get the
										job done 50% faster than riding tractors, each Cub Cadet
										zero-turn riding mower is engineered to handle a range of
										terrain and cover up to 5 acres, with steering wheel options
										that increase ease. Shop Zero Turn Mowers"
									buttonTitle="Shop Zero Turn Mowers"
									className="bg-amber-400"
									classNameButton="bg-black text-white"
									href="/lawn-mowers/riding-lawn-mowers/zero-turn-mowers"
								/>
							</li>

							<li className="flex flex-col h-full">
								<Large
									src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v4365e2b9a0bd8171c4e7b1cc5a7a2d050fe647e2/pro-2.0/home/hero.jpg"
									title="Commercial Equipment"
									p="We started from scratch by designing every element of our
									commercial line with the professional in mind."
									buttonTitle="Shop Commercial Equipment"
									className="bg-black text-white"
									classNameButton="bg-amber-400 text-black"
									href="#top"
								/>
							</li>
						</ul>

						<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
							{homeJSON.categories.map(function (category, i) {
								return (
									<li
										className=""
										key={i}
										style={{ backgroundColor: "#ecedee" }}>
										<CategoryCard
											src={category.src}
											h2={category.h2}
											h3={category.h3}
											p={category.p}
											href={category.href}
											className="h-full"
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
					<ul className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 max-w-screen-2xl mx-auto">
						<li className="bg-white p-4 lg:p-8">
							<CTABlock
								src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw4fcbb82e/images/product-line-browse/Main-Carousel/CC_Family-UltimaFull-env2023-desktop.jpg"
								title="Find The Right Zero-Turn"
								copy="The Cub Cadet® product finder can help you find the right zero-turn for your yard. Get started here."
								buttonText="Get Started"
								href="#top"
							/>
						</li>
						<li className="bg-amber-400 p-4 lg:p-8">
							<CTABlock
								src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dweda7b4bb/images/product-line-browse/Main-Carousel/53RZ3CSB050_ProX_636_Env_02_v1-1015x630.jpg"
								title="Stand Up To Any Job"
								copy="The PRO X Series™ helps you make the most of every job, with the zero-turn flexibility you need to mow a wider range of properties."
								buttonText="Shop PRO X Series™"
								href="#top"
							/>
						</li>
						<li className="bg-white p-4 lg:p-8 md:col-span-2 xl:col-auto">
							<CTABlock
								src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw76d5a715/images/product-line-browse/Main-Carousel/33ABA7ES710_XT1_Enduro_LT42E_Env_02-1015x630.jpg"
								title="Premium Results, Minimal Maintenance"
								copy="Fully electric with the latest lithium-ion battery technology,
								the Cub Cadet® LT42E delivers the same premium cut as its gas
								counterpart with less maintenance."
								buttonText="Learn More About the Cub Cadet® LT42E"
								href="#top"
							/>
						</li>
					</ul>
				</li>

				<li className="max-w-screen-2xl mx-auto p-3 lg:py-8">
					<CTAHero
						block={homeJSON.ctaHero[2]}
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
						block={homeJSON.ctaHero[2]}
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
						block={homeJSON.ctaHero[2]}
						blockWidths={{ l: 9, r: 3 }}
						minHeight="xs"
						className="mt-6"
					/>
				</li>

				{/* <li className="max-w-screen-2xl mx-auto p-3 mt-20 pt-8">
				<h2 className="text-3xl mb-8 text-center">Recently Viewed</h2>
				<ProductBlock products={homeJSON.recentlyViewed} />
			</li> */}

				{/* <li className="max-w-screen-2xl mx-auto p-3 border-t mt-20 pt-8">
				<SEOLinks />
			</li>

			<li className="max-w-screen-2xl mx-auto p-3 mt-10">
				<SEOGreek />
			</li> */}
			</ul>
		</>
	);
}
