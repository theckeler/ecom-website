import LoremIpsum from "@/components/LoremIpsum";

import Cart from "@/cart/Cart";

export default function MenuBody({ className, loadComponent }) {
	const ComponentList = { cart: Cart };
	const Component = ComponentList[loadComponent];

	return (
		<div className="p-3 overflow-x-scroll max-h-[calc(100vh-72px)]">
			<ul className="">{loadComponent ? <Component /> : <LoremIpsum />}</ul>
		</div>
	);
}
