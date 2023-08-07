import BreadCrumbs from "app/components/BreadCrumbs";
import H1 from "app/components/H1";
import SEOGreek from "app/components/SEOGreek";
import SEOLinks from "app/components/SEOLinks";
import ProductFinder from "app/components/Product/Finder";
import TitleFlexGridViews from "@/components/FlexGridViews/TitleFlexGridViews";
import IconGridView from "@/icons/GridView";
import FlexView from "@/icons/FlexView";

import zeroTurnJSON from "@/data/riding-lawn-mowers.json";

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
			<li className="max-w-screen-2xl mx-auto p-2">
				<BreadCrumbs
					crumbs={[
						{ title: "Home", url: "/" },
						{ title: "Lawn Mowers", url: "/lawn-mowers" },
						{ title: "Riding Lawn Mowers" },
					]}
					cta={{ title: "Buy Stuff", url: "#products" }}
				/>
			</li>

			<li className="max-w-screen-2xl mx-auto">
				<H1
					title="Explore Riding Lawn Mowers"
					srOnly="Cub Cadet"
					className=""
				/>
				<p className="text-sm mt-8 max-w-6xl leading-6">
					A complete lineup of zero-turn mowers, lawn and garden tractors, and
					electric mowers, all featuring the strength and durability that bring
					your lawn to life.
				</p>

				<TitleFlexGridViews
					jsonData={zeroTurnJSON.categories}
					title={<H1 title="" srOnly="Cub Cadet" className="lg:text-center" />}
					gridCSS="lg:grid lg:grid-cols-3 gap-2 pb-6 lg:pb-0 overflow-x-auto overflow-scrollbar"
					buttons={buttons}
				/>
			</li>

			<li className="mt-4 bg-gray-300">
				<div className="p-2 lg:py-8 max-w-screen-2xl mx-auto">
					<ProductFinder />
				</div>
			</li>

			<li className="max-w-screen-2xl mx-auto p-2 border-t mt-20 pt-8">
				<h2 className="text-3xl mb-8">Related Searches</h2>
				<SEOLinks />
			</li>

			<li className="max-w-screen-2xl mx-auto p-2 mt-10">
				<SEOGreek />
			</li>
		</ul>
	);
}
