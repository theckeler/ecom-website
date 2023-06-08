import BreadCrumbs from "@/components/BreadCrumbs";
import H1 from "@/components/H1";
import SEOGreek from "@/components/SEOGreek";
import SEOLinks from "@/components/SEOLinks";
import ProductFinder from "@/product/Finder";
import ProductCategories from "@/product/Categories";

import ridingLawnJSON from "@/data/lawn-mowers";

export default function Index() {
	return (
		<ul className="pb-20">
			<li className="max-w-screen-2xl mx-auto p-3">
				<BreadCrumbs
					crumbs={[{ title: "Home", url: "/" }, { title: "Lawn Mowers" }]}
					cta={{ title: "Buy Stuff", url: "#products" }}
				/>
			</li>

			<li className="max-w-screen-2xl mx-auto p-3">
				<H1
					title="Explore Lawn Mowers"
					srOnly="Cub Cadet"
					className="text-4xl mb-4"
				/>
				<ProductCategories
					categories={ridingLawnJSON.categories}
					className="bg-gray-200"
				/>
			</li>

			<li className="mt-4 bg-gray-300">
				<div className="p-3 lg:py-8 max-w-screen-2xl mx-auto">
					<ProductFinder />
				</div>
			</li>

			<li className="max-w-screen-2xl mx-auto p-3 border-t mt-20 pt-8">
				<h2 className="text-3xl mb-8">Related Searches</h2>
				<SEOLinks />
			</li>

			<li className="max-w-screen-2xl mx-auto p-3 mt-10">
				<SEOGreek />
			</li>
		</ul>
	);
}
