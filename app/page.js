import H1 from "@/components/H1";
import CTAHero from "@/components/Hero";
import ProductFinder from "@/components/Product/Finder";

import homeJSON from "@/data/home.json";
import TitleFlexGridViews from "@/components/FlexGridViews/TitleFlexGridViews";
import IconGridView from "@/icons/GridView";
import FlexView from "@/icons/FlexView";

export default function Index() {
	const buttons = [
		{
			icon: (
				<FlexView className="reset-views flex items-center justify-center w-10 h-10 p-2 rounded-full bg-amber-400" />
			),
			className: "",
			whatView: "flex",
		},
		{
			icon: (
				<IconGridView className="reset-views flex items-center justify-center w-10 h-10 p-2 rounded-full bg-gray-200" />
			),
			className: "",
			whatView: "grid",
		},
	];

	return (
		<ul className="pb-20">
			<li className="mb-8">
				<div className="max-w-screen-2xl mx-auto p-2">
					<CTAHero block={homeJSON.ctaHero[0]} minHeight="xl" />
				</div>
			</li>

			<li>
				<TitleFlexGridViews
					jsonData={homeJSON.categories}
					title={
						<H1
							title="Product Lineup"
							srOnly="Cub Cadet"
							className="lg:text-center"
						/>
					}
					gridCSS="lg:grid lg:grid-cols-4 gap-2 pb-6 lg:pb-0 overflow-x-auto overflow-scrollbar"
					buttons={buttons}
				/>
			</li>

			<li className="mt-4 bg-gray-300 lg:py-8">
				<div className="max-w-screen-2xl mx-auto p-2">
					<ProductFinder className="" />
				</div>
			</li>

			<li className="bg-gray-200 py-4 lg:py-10">
				<TitleFlexGridViews
					breakpoint="md"
					jsonData={homeJSON.ctaBlocks}
					title={<H1 title="" srOnly="Cub Cadet" className="lg:text-center" />}
					buttonWide={true}
					gridCSS="max-w-screen-2xl mx-auto flex md:grid md:grid-cols-2 xl:grid-cols-4 gap-2 pb-6 lg:pb-0 overflow-x-auto overflow-scrollbar"
					buttons={buttons}
				/>
			</li>

			<li className="max-w-screen-2xl mx-auto py-3 lg:py-8">
				{/* <CTAHero
					block={homeJSON.ctaHero[1]}
					blockWidths={{ l: 4, r: 8 }}
					minHeight="xs"
					reverse
					fullButton
				/>  */}

				<CTAHero
					block={homeJSON.ctaHero[2]}
					reverse
					minHeight="lg"
					className="pt-6 px-2"
				/>

				{/* <CTAHero
					block={homeJSON.ctaHero[1]}
					blockWidths={{ l: 6, r: 6 }}
					minHeight="xs"
					className="mt-6"
				/> */}

				<CTAHero
					block={homeJSON.ctaHero[1]}
					blockWidths={{ l: 8, r: 4 }}
					minHeight="xl"
					className="mt-6 px-2"
				/>

				{/* <CTAHero
					block={homeJSON.ctaHero[1]}
					blockWidths={{ l: 9, r: 3 }}
					minHeight="xs"
					className="mt-6"
				/>  */}
			</li>
		</ul>
	);
}
