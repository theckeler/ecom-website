"use client";
import BreadCrumbs from "@/components/BreadCrumbs";
import H1 from "@/components/H1";
import ProductCard from "@/components/Cards/ProductCard";
import Sort from "@/components/Buttons/Sort";
import ProductFinder from "@/components/Product/Finder";
import Compare from "@/components/Compare";
import ViewMore from "@/components/Buttons/ViewMore";
import IconCompare from "@/components/Icons/Compare";
import Filter from "@/components/Buttons/Filter";
import CTAHero from "@/components/CTA/Hero";
import SEOLinks from "@/components/SEOLinks";
import Article from "@/components/Product/Article";
import Faqs from "@/components/Faqs";

import pdpJSON from "@/data/pdp.json";
import faqs from "@/data/faqs.json";

import TitleFlexGridViews from "@/components/FlexGridViews/TitleFlexGridViews";
import IconGridView from "@/icons/GridView";
import FlexView from "@/icons/FlexView";
import articlesData from "@/data/articles.json";

import CategoriesFooter from "@/components/Categories/Footer";
import Sticky from "@/components/PLP/Desc";

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
				className="max-w-screen-2xl mx-auto p-2"
				crumbs={[
					{ title: "Home", url: "/" },
					{ title: "Lawn Mowers", url: "/lawn-mowers" },
					{
						title: "Riding Lawn Mowers",
						url: "/lawn-mowers/riding-lawn-mowers",
					},
					{ title: "Zero-Turn Mowers" },
				]}
				cta={{
					title: "Help me decide",
					url: "#product-finder",
					className: "text-sm",
				}}
			/>

			<div className="max-w-screen-2xl mx-auto p-2">
				<H1 title="Zero-Turn Mowers" srOnly="Cub Cadet" />

				<p className="text-sm leading-loose">
					Zero-turn lawn mowers answer the call of challenging yards and
					difficult obstacles. It’s time to explore the full Cub Cadet line-up
					of innovative zero-turns, including lap bar and Cub Cadet exclusive
					steering wheel options as part of the Ultima series. With a zero-turn
					mower, the possibilities are at every turn.
				</p>
			</div>

			<Sticky />

			<ul className="md:grid lg:grid-cols-2 xl:grid-cols-4 gap-3 max-w-screen-2xl mx-auto">
				{pdpJSON.products.map(function (product, i) {
					return (
						<li key={i} style={{ minWidth: "240px" }}>
							<ProductCard
								{...{ product }}
								displayButton={false}
								displayMSRP={false}
								displayPrice={true}
								displayStars={true}
								displayAvailablity={true}
								addToCart={true}
							/>
						</li>
					);
				})}
			</ul>

			<ViewMore
				props={{
					title: "Show More Products",
					button: {
						className: "bg-amber-400 text-xs md:text-base",
					},
					className: "",
				}}
			/>

			<TitleFlexGridViews
				className="max-w-screen-2xl mx-auto p-2 mt-8"
				jsonData={articlesData}
				card={{ className: "bg-gray-100" }}
				limitNum={4}
				breakpoint="md"
				title={
					<H1
						title="Related Articles"
						srOnly="Cub Cadet"
						className="lg:text-center mb-4"
					/>
				}
				gridCSS="max-w-screen-2xl mx-auto flex md:grid md:grid-cols-2 xl:grid-cols-4 gap-2 pb-6 lg:pb-0 overflow-x-auto overflow-scrollbar"
				buttons={buttons}
			/>

			{/* <CTAHero
				className="max-w-screen-2xl mx-auto p-3 lg:py-8"
				block={pdpJSON.ctaHero[0]}
			/> */}

			<CategoriesFooter />
		</>
	);
}
