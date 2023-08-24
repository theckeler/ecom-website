import ToggleButton from "../Buttons/Toggle";
import ProductBlock from "@/components/Product/Block";

export default function TabRelatedProducts({ products }) {
	return (
		<div className="border-b">
			<ToggleButton title="Related Products" id="related" opened={true} />
			<ProductBlock products={products} />
		</div>
	);
}
