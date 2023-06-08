import BreadCrumbs from "@/components/BreadCrumbs";
import H1 from "@/components/H1";
import SEOGreek from "@/components/SEOGreek";
import SEOLinks from "@/components/SEOLinks";
import ProductFinder from "@/product/Finder";
import ProductCategories from "@/product/Categories";

import zeroTurnJSON from "@/data/riding-lawn-mowers.json";

export default function Index() {
	return (
		<ul className="pb-20">
			<li className="max-w-screen-2xl mx-auto p-3">
				<BreadCrumbs
					crumbs={[
						{ title: "Home", url: "/" },
						{ title: "Lawn Mowers", url: "/lawn-mowers" },
						{ title: "Riding Lawn Mowers" },
					]}
					cta={{ title: "Buy Stuff", url: "#products" }}
				/>
			</li>

			<li className="max-w-screen-2xl mx-auto p-3">
				<H1
					title="Explore Riding Lawn Mowers"
					srOnly="Cub Cadet"
					className=""
				/>
				<p className="text-sm my-8 max-w-6xl leading-6">
					A complete lineup of zero-turn mowers, lawn and garden tractors, and
					electric mowers, all featuring the strength and durability that bring
					your lawn to life.
				</p>

				<ProductCategories
					categories={zeroTurnJSON.categories}
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
