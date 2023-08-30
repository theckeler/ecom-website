import jsonData from "./data/data.json";

import currency from "@/functions/Currency";
import CartBlock from "./components/Block";

export default function Cart({ className }) {
	let getTotal = 0;
	const shippingCost = 129;
	return (
		<>
			<ul className="grid grid-cols-[minmax(60px,140px)_1fr_minmax(100px,200px)] gap-2">
				{jsonData.map(function (block, i) {
					getTotal = getTotal + block.price * block.quantity;
					return <CartBlock key={i} block={block} />;
				})}
			</ul>
			<ul className="grid grid-cols-2 gap-2">
				<li className="col-span-2 font-bold">Order summary</li>
				<li className="col-span-2">
					<hr />
				</li>
				<li className="text-sm">Subtotal</li>
				<li className="text-right">{currency(getTotal)}</li>

				<li className="text-sm">Delivery Charge</li>
				<li className="text-right">{currency(shippingCost)}</li>
				<li className="col-span-2">
					<hr className="h-px bg-gray-500 border-0" />
				</li>
				<li className="font-bold">Total (Excl. tax)</li>
				<li className="text-right">{currency(getTotal + shippingCost)}</li>
			</ul>
		</>
	);
}
