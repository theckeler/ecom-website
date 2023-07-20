import Header from "@/header/Header";
import Menu from "@/components/Menus/Menu";
import Footer from "@/footer/Footer";
import Cookie from "@/cookie/Cookie";
import menuItems from "@/data/nav.json";

import "@/styles/globals.css";
import Screen from "@/components/Screen";

import Cart from "@/cart/Cart";
import Stores from "@/components/Stores/Stores";
import MainNav from "@/components/Nav/Nav";
import SubNav from "@/header/components/SubNav";
import Filters from "@/filters/Filters";
import Account from "@/components/Account/Account";
import Dealers from "@/components/Dealers/Dealers";
import Help from "@/components/Help/Help";
import Promo from "@/components/Promo/Promo";
import ButtonsCart from "@/buttons/Cart";
import ButtonsChat from "@/buttons/Chat";

export const metadata = {
	title: "Cub Cadet Rebuild",
	description: "Nothing to see here",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-white">
				<Header menuItems={menuItems} />
				<Menu
					menu={{
						title: "Cart",
						id: "cart",
						component: <Cart menuItems={menuItems} />,
						button: { title: "Checkout", className: "font-bold" },
						componentType: "cart",
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
						component: <Promo menuItems={menuItems} />,
						left: false,
						button: {
							title: "Promo Link",
							className: "font-bold",
						},
					}}
				/>
				{menuItems.map(
					(mainMenu, i) =>
						mainMenu.sub && (
							<Menu
								key={i}
								className=""
								menu={{
									title: mainMenu.title,
									id: mainMenu.slug + "-sub",
									component: <SubNav menuItems={mainMenu.sub} />,
									componentType: "subNav",
									className: "lg:relative",
									button: mainMenu.button,
									left: false,
									menuItems: mainMenu,
									ad: {
										title:
											"Check out special offers on residential and professional products",
										copy: "Save any season with rebates and discounts on residential and professional outdoor power equipment from Cub Cadet. Plus, learn more about year round specials for first responders, military members, NHLA members and Equine Groups.",
										img: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dwc805e60b/special-offers/so-fleet-discount-program.jpg",
										button: {
											title:
												"Special offers on residential and professional products",
											className: "font-bold",
										},
									},
								}}
							/>
						)
				)}
				<main>{children}</main>
				<Footer />
				<Screen />
				<div className="fixed z-30 bottom-72 md:bottom-72 right-0 md:rotate-270 origin-top-left flex flex-col md:flex-row-reverse gap-1 md:-mr-[173px]">
					<ButtonsCart />
					<ButtonsChat />
				</div>
				<Cookie display={true} />
			</body>
		</html>
	);
}
