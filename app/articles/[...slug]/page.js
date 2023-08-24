"use client";
import articlesData from "@/data/articles.json";
import H1 from "@/components/H1";
import BreadCrumbs from "@/components/BreadCrumbs";
import LoremIpsum from "@/components/LoremIpsum";
import Faqs from "@/components/Faqs";
import faqs from "@/data/faqs.json";
import ProductCard from "@/components/Product/Card";
import Articles from "@/components/Articles/Articles";

export default function Index({ params }) {
	const itemNum = Number(params.slug);
	const article = articlesData[itemNum];

	return (
		<>
			<div className="max-w-screen-2xl mx-auto p-2">
				<BreadCrumbs
					crumbs={[
						{ title: "Home", url: "/" },
						{ title: "Articles", url: "/articles" },
						{ title: article.title },
					]}
				/>
				<H1 title={`How-To Article: ${article.title}`} className="mb-6" />

				<LoremIpsum />

				<h2 className="text-3xl mb-4 mt-12">Related Articles</h2>

				<Articles itemNum={itemNum} limitNum={4} />

				<div className="max-w-screen-2xl mx-auto px-3 py-8">
					<h2 className="text-3xl mb-4">Questions & Answers</h2>
					<Faqs faqs={faqs} addID="faqs" />
				</div>
			</div>
		</>
	);
}
