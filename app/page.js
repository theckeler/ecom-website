import H1 from "@/components/H1";
import CTAHero from "@/components/Hero";
import ProductFinder from "@/components/Product/Finder";

import homeJSON from "@/data/home.json";
import TitleFlexGridViews from "@/components/FlexGridViews/TitleFlexGridViews";

export default function Index() {
	return (
		<ul className="pb-20">
			<li className="mb-8">
				<div className="max-w-screen-2xl mx-auto p-2 2xl:py-2 2xl:px-0">
					<CTAHero block={homeJSON.ctaHero[0]} minHeight="xl" />
				</div>
			</li>

			<TitleFlexGridViews
				jsonData={homeJSON.categories}
				title={
					<H1
						title="Product Lineup"
						srOnly="Cub Cadet"
						className="text-center"
					/>
				}
				gridCSS="lg:grid lg:grid-cols-4 gap-2 pb-6 lg:pb-0 overflow-x-auto overflow-scrollbar"
			/>

			<li className="mt-4">
				<div className="bg-gray-300 lg:py-8">
					<ProductFinder className="max-w-screen-2xl mx-auto" />
				</div>
			</li>

			<li className="bg-gray-200 py-10">
				<TitleFlexGridViews
					breakpoint="md"
					jsonData={homeJSON.ctaBlocks}
					title=""
					buttonWide={true}
					gridCSS="max-w-screen-2xl mx-auto flex md:grid md:grid-cols-2 xl:grid-cols-4 gap-2 pb-6 lg:pb-0 overflow-x-auto overflow-scrollbar"
				/>
			</li>

			<li className="max-w-screen-2xl mx-auto py-3 lg:py-8">
				{/* <CTAHero
					block={homeJSON.ctaHero[1]}
					blockWidths={{ l: 4, r: 8 }}
					minHeight="xs"
					reverse
					fullButton
				/> */}

				<CTAHero
					block={homeJSON.ctaHero[2]}
					reverse
					minHeight="lg"
					className="pt-6 px-2 2xl:px-0"
				/>

				{/* <CTAHero
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
				/> */}
			</li>
		</ul>
	);
}
