import ProductCard from "@/components/Product/Card";

export default function ProductCategories({ categories, className }) {
	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4">
			{categories.map(function (block, i) {
				return (
					<li key={i}>
						<ProductCard block={block} className={`h-full ${className}`} />
					</li>
				);
			})}
		</ul>
	);
}
