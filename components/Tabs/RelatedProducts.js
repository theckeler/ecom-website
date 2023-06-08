import ToggleButton from "../Buttons/Toggle";
import ProductBlock from "@/product/Block";

export default function TabRelatedProducts({ products }) {
	return (
		<div className="border-b">
			<ToggleButton title="Related Products" id="related" opened={true} />
			<ProductBlock products={products} />
		</div>
	);
}
