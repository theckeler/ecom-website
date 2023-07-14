import LoremIpsum from "@/components/LoremIpsum";

import Cart from "@/cart/Cart";
import Stores from "@/components/Stores/Stores";
import MainNav from "@/header/components/Nav";
import SubNav from "@/header/components/SubNav";

export default function MenuBody({
	className,
	loadComponent,
	button,
	menuItems,
}) {
	const ComponentList = {
		cart: Cart,
		stores: Stores,
		mainNav: MainNav,
		subNav: SubNav,
	};
	const Component = ComponentList[loadComponent];

	return (
		<div className="p-3">
			<ul className={`${loadComponent === "mainNav" && "lg:pb-0"}`}>
				{loadComponent ? <Component menuItems={menuItems} /> : <LoremIpsum />}
			</ul>
		</div>
	);
}
