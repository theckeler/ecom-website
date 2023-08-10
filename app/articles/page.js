"use client";
import H1 from "@/components/H1";
import Articles from "@/components/Articles/Articles";

export default function Index() {
	return (
		<div className="max-w-screen-2xl mx-auto px-2 py-8">
			<H1 title="Cub Cadet How-To Articles" className="mb-6 md:text-center" />

			<Articles />
		</div>
	);
}
