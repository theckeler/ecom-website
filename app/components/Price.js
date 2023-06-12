import ToolTip from "./ToolTip";

export default function H3({ price, msrp, className = null }) {
	return (
		<h3 className="text-xl font-bold">
			{price}{" "}
			<ToolTip
				copy="Manufacturer’s buy online price. Taxes are additional and vary by
				location. Freight, setup, delivery, PDI, and other dealer specific
				charges are not included in the pricing and vary by dealer. Prices shown
				are in U.S dollars and valid only in the United States."
			/>
			<span className="line-through text-gray-500 ml-3 font-light text-sm">
				{msrp}
			</span>
		</h3>
	);
}
