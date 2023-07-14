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
		<div
			className="p-3"
			//className={`p-3 overflow-x-scroll h-[calc(100vh-72px) min-h-[calc(100dvh-72px)] max-h-[calc(100dvh-72px)] ${
			//	loadComponent === "mainNav" && "lg:h-auto lg:min-h-default"
			//}`}
		>
			<ul className={`${loadComponent === "mainNav" && "lg:pb-0"}`}>
				{loadComponent ? <Component menuItems={menuItems} /> : <LoremIpsum />}
			</ul>
		</div>
	);
}
