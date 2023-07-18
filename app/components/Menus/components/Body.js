import LoremIpsum from "@/components/LoremIpsum";

import Cart from "@/cart/Cart";
import Stores from "@/components/Stores/Stores";
import MainNav from "@/components/Nav/Nav";
import SubNav from "@/header/components/SubNav";
import Filters from "@/filters/Filters";
import Oops from "@/components/Oops";
import Account from "@/components/Account/Account";
import Dealers from "@/components/Dealers/Dealers";

export default function MenuBody({ className, loadComponent, menuItems }) {
	const ComponentList = {
		cart: Cart,
		stores: Stores,
		mainNav: MainNav,
		subNav: SubNav,
		filters: Filters,
		oops: Oops,
		account: Account,
		dealers: Dealers,
	};
	const Component = ComponentList[loadComponent];

	return (
		<div className="p-3 bg-white">
			<ul className={`${loadComponent === "mainNav" && "lg:pb-0"}`}>
				{loadComponent ? <Component menuItems={menuItems} /> : <LoremIpsum />}
			</ul>
		</div>
	);
}
