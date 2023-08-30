import BreadCrumbs from "@/components/BreadCrumbs";
import H1 from "@/components/H1";

import IconGridView from "@/icons/GridView";
import FlexView from "@/icons/FlexView";
import ridingLawnJSON from "@/data/snow-blowers";
import TitleFlexGridViews from "@/components/FlexGridViews/TitleFlexGridViews";
import CategoriesFooter from "@/components/Categories/Footer";

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
			<BreadCrumbs
				crumbs={[{ title: "Home", url: "/" }, { title: "Lawn Mowers" }]}
				cta={{ title: "Buy Stuff", url: "#products" }}
				className="max-w-screen-2xl mx-auto p-2"
			/>

			<TitleFlexGridViews
				jsonData={ridingLawnJSON.categories}
				title={
					<H1
						title="Explore Snow Blowers"
						srOnly="Cub Cadet"
						className="lg:text-center mb-4"
					/>
				}
				gridCSS="max-w-screen-2xl mx-auto lg:grid lg:grid-cols-3 gap-2 pb-6 lg:pb-0 overflow-x-auto overflow-scrollbar"
				buttons={buttons}
			/>

			<CategoriesFooter />
		</>
	);
}
