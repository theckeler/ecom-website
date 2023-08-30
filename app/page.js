import H1 from "@/components/H1";
import H2 from "@/components/H2";
import CTAHero from "@/components/Hero";
import ProductFinder from "@/components/Product/Finder";

import homeJSON from "@/data/home.json";
import TitleFlexGridViews from "@/components/FlexGridViews/TitleFlexGridViews";
import IconGridView from "@/icons/GridView";
import FlexView from "@/icons/FlexView";
import Articles from "@/components/Articles/Articles";
import articlesData from "@/data/articles.json";

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
		<>
			<CTAHero
				className="max-w-screen-2xl mx-auto 2xl:p-2 mb-8"
				block={homeJSON.ctaHero[0]}
				minHeight="xl"
			/>

			<TitleFlexGridViews
				card={{ className: "" }}
				jsonData={homeJSON.categories}
				title={
					<H1
						title="Product Lineup"
						srOnly="Cub Cadet"
						className="lg:text-center mb-4"
					/>
				}
				gridCSS="lg:grid lg:grid-cols-4 gap-2 pb-6 overflow-x-auto overflow-scrollbar"
				buttons={buttons}
			/>

			<div className="mt-4 bg-gray-300 dark:bg-neutral-700 lg:py-8">
				<ProductFinder className="max-w-screen-2xl mx-auto p-2" />
			</div>

			<div className="bg-gray-200 dark:bg-neutral-600 py-4 lg:py-10">
				<TitleFlexGridViews
					card={{ className: "" }}
					breakpoint="md"
					jsonData={homeJSON.ctaBlocks}
					title={null}
					buttonWide={true}
					gridCSS="max-w-screen-2xl mx-auto flex md:grid md:grid-cols-2 xl:grid-cols-4 gap-2  overflow-x-auto overflow-scrollbar"
					buttons={buttons}
				/>
			</div>

			<div className="max-w-screen-2xl mx-auto py-3 lg:py-8">
				<CTAHero
					block={homeJSON.ctaHero[2]}
					reverse
					minHeight="lg"
					className="2xl:px-2"
				/>

				<CTAHero
					block={homeJSON.ctaHero[1]}
					blockWidths={{ l: 8, r: 4 }}
					minHeight="xl"
					className="mt-6 2xl:px-2"
				/>
			</div>

			<div className="bg-neutral-200 py-3 lg:py-8">
				<TitleFlexGridViews
					className="max-w-screen-2xl mx-auto p-2"
					jsonData={articlesData}
					card={{ className: "bg-gray-100" }}
					limitNum={4}
					breakpoint="md"
					title={null}
					gridCSS="max-w-screen-2xl mx-auto flex md:grid md:grid-cols-2 xl:grid-cols-4 gap-2 pb-6 lg:pb-0 overflow-x-auto overflow-scrollbar"
					buttons={buttons}
				/>
			</div>
		</>
	);
}
