import LoremIpsum from "@/components/LoremIpsum";

import Cart from "@/cart/Cart";
import Stores from "@/components/Stores/Stores";
import MainNav from "@/components/Nav/Nav";
import SubNav from "@/header/components/SubNav";
import Filters from "@/filters/Filters";

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
		filters: Filters,
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
