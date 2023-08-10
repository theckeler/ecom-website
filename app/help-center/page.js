"use client";
import H1 from "@/components/H1";
import articlesData from "@/data/articles.json";

export default function Index() {
	console.log("articlesData: ", articlesData);

	return (
		<div className="max-w-screen-2xl mx-auto p-2">
			<H1
				title="Welcome to our Help Center
"
			/>
		</div>
	);
}
