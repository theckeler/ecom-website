"use client";
import BreadCrumbs from "app/components/BreadCrumbs";
import Gallery from "app/components/Gallery";
import AddCart from "app/components/AddCart/AddCart";
import Reviews from "app/components/Tabs/Reviews";
import Features from "app/components/Tabs/Features";
import Specs from "app/components/Tabs/Specs";
import Maintenance from "app/components/Tabs/Maintenance";
import DocumentsGuides from "app/components/Tabs/DocumentsGuides";
import FindParts from "app/components/Tabs/FindParts";
import RelatedProducts from "app/components/Tabs/RelatedProducts";
import H1 from "app/components/H1";
import H2 from "app/components/H2";
import Price from "app/components/Price";
import Desc from "app/components/Desc";
// import SEOGreek from "@/components/SEOGreek";
import SEOLinks from "app/components/SEOLinks";
import ProductBlock from "app/components/Product/Block";
import Faqs from "app/components/Faqs";

import productsJSON from "@/data/pdp.json";
import faqs from "@/data/faqs.json";

const IndexID = ({ params }) => {
	const product = productsJSON.products[Number(params.slug - 1)];

	return (
		<>
			<ul className="max-w-screen-2xl grid grid-cols-12 gap-3 mx-auto p-3">
				<li className="col-span-12">
					<BreadCrumbs
						crumbs={[
							{ title: "Home", url: "/" },
							{ title: "Lawn Mowers", url: "/lawn-mowers" },
							{
								title: "Riding Lawn Mowers",
								url: "/lawn-mowers/riding-lawn-mowers",
							},
							{
								title: "Zero-Turn Mowers",
								url: "/lawn-mowers/riding-lawn-mowers/zero-turn-mowers",
							},
							{ title: product.title },
						]}
						stars={true}
						starNum={product.reviews}
					/>
				</li>
				<li className="col-span-12 lg:col-span-7 xl:col-span-8">
					<Gallery gallery={product.gallery} />
				</li>
				<li className="col-span-12 lg:col-span-5 xl:col-span-4 lg:sticky lg:top-0 self-start row-span-2">
					<div className="md:px-6 py-4">
						<H1 title={product.title} srOnly="Cub Cadet Zero-Turn Mower" />
						<H2 title={product.series} />
						<Price price={product.price} msrp={product.msrp} />
						<AddCart shippingButtons={product.shippingButtons} />
						<Desc blocks={product.desc} />
					</div>
				</li>
				<li className="col-span-12 lg:col-span-7 xl:col-span-8">
					<Reviews starNum={product.reviews} />
					<Features />
					<Specs />
					<Maintenance />
					<DocumentsGuides />
					<FindParts />
					<RelatedProducts products={productsJSON.relatedProducts} />
				</li>
			</ul>
			<div className="max-w-screen-2xl mx-auto my-20 p-3">
				<div>
					<h2 className="text-3xl mb-8">Recently Viewed</h2>
					<ProductBlock products={productsJSON.recentlyViewed} />
				</div>

				<div className="mt-20">
					<h2 className="text-3xl mb-8">Related Searches</h2>
					<SEOLinks />
				</div>

				<div className="mt-20">
					<h2 className="text-3xl mb-4">Questions & Answers</h2>
					<Faqs faqs={faqs} addID="faqs" className="" />
				</div>
			</div>
		</>
	);
};
export default IndexID;
