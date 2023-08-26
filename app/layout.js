import Header from "@/header/Header";
import Menu from "@/components/Menus/Menu";
import Footer from "@/footer/Footer";
import Cookie from "@/cookie/Cookie";
import menuItems from "@/data/nav.json";

import "@/styles/globals.css";
import Screen from "@/components/Screen";

import Cart from "@/cart/Cart";
import Stores from "@/components/Stores/Stores";
// import MainNav from "@/components/Nav/Nav";
import Filters from "@/filters/Filters";
import Account from "@/components/Account/Account";
import Dealers from "@/components/Dealers/Dealers";
import Help from "@/components/Help/Help";
// import Promo from "@/components/Promo/Promo";
import ButtonsCart from "@/buttons/Cart";
import ButtonsChat from "@/buttons/Chat";
import LoremIpsum from "@/components/LoremIpsum";

export const metadata = {
	title: "Cub Cadet Rebuild",
	description: "Nothing to see here",
};

export default function RootLayout({ children }) {
	let theme;
	if (typeof window !== "undefined") {
		theme = localStorage.getItem("theme");
	} else {
		theme = "light";
	}

	return (
		<html lang="en" className={theme}>
			<body className="bg-white dark:bg-neutral-800">
				<Header menuItems={menuItems} />
				<Menu
					menu={{
						title: "Cart",
						id: "cart",
						component: <Cart menuItems={menuItems} />,
						button: { title: "Checkout", className: "font-bold" },
						componentType: "cart",
						//left: true,
					}}
				/>
				<Menu
					menu={{
						title: "Account",
						id: "account",
						component: <Account menuItems={menuItems} />,
						componentType: "account",
					}}
				/>
				<Menu
					menu={{
						title: "Stores",
						id: "stores",
						component: <Stores menuItems={menuItems} />,
						componentType: "stores",
					}}
				/>
				<Menu
					menu={{
						title: "Cub Cadet Customer Service",
						id: "help",
						button: {
							title: "Need more help?",
							className: "bg-amber-400 font-bold text-black",
						},
						component: <Help menuItems={menuItems} />,
						componentType: "help",
					}}
				/>
				<Menu
					menu={{
						title: "Filter & Sort",
						id: "all-filters",
						button: {
							title: "Apply",
							className: "bg-black font-bold text-white",
						},
						component: <Filters menuItems={menuItems} />,
						componentType: "filters",
					}}
				/>
				<Menu
					menu={{
						title: "Shop Your Dealers",
						id: "dealers",
						button: {
							title: "Update Dealer",
							className: "bg-amber-400 font-bold text-black",
						},
						component: <Dealers menuItems={menuItems} />,
						componentType: "dealers",
					}}
				/>
				<Menu
					className="md:max-w-none"
					menu={{
						title: "Promo Title",
						id: "promo-content",
						component: <LoremIpsum menuItems={menuItems} />,
						left: false,
						button: {
							title: "Promo Link",
							className: "font-bold",
						},
						className: "bg-amber-400 font-black",
					}}
				/>
				
				<main>{children}</main>
				<Footer />
				<Screen />
				<div className="fixed z-30 bottom-72 md:bottom-72 right-0 md:rotate-270 origin-top-left flex flex-col md:flex-row-reverse gap-1 md:-mr-[173px]">
					<ButtonsCart className="" button={{ icon: { className: "" } }} />
					<ButtonsChat />
				</div>
				<Cookie display={true} />
			</body>
		</html>
	);
}
