import SEOGreek from "@/components/SEOGreek";
import SEOLinks from "@/components/SEOLinks";
import ProductFinder from "@/components/Product/Finder";

export default function CategoriesFooter({ className }) {
	return (
		<>
			<div className="mt-4 bg-gray-300 dark:bg-neutral-700 lg:py-8">
				<ProductFinder className="max-w-screen-2xl mx-auto p-2" />
			</div>

			<div className="max-w-screen-2xl mx-auto p-2 lg:mt-20 pt-8">
				<h2 className="text-3xl mb-8">Related Searches</h2>
				<SEOLinks />
			</div>

			<div className="max-w-screen-2xl mx-auto p-2 mt-10">
				<SEOGreek />
			</div>
		</>
	);
}
