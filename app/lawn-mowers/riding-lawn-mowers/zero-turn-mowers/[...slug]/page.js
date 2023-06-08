"use client";
import BreadCrumbs from "@/components/BreadCrumbs";
import Gallery from "@/components/Gallery";
import AddCart from "@/addtocart/AddCart";
import Reviews from "@/tabs/Reviews";
import Features from "@/tabs/Features";
import Specs from "@/tabs/Specs";
import Maintenance from "@/tabs/Maintenance";
import DocumentsGuides from "@/tabs/DocumentsGuides";
import FindParts from "@/tabs/FindParts";
import RelatedProducts from "@/tabs/RelatedProducts";
import H1 from "@/components/H1";
import H2 from "@/components/H2";
import Price from "@/components/Price";
import Desc from "@/components/Desc";
// import SEOGreek from "@/components/SEOGreek";
import SEOLinks from "@/components/SEOLinks";
import ProductBlock from "@/product/Block";
import Faqs from "@/components/Faqs";

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
