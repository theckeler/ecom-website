import Header from "@/header/Header";
import Menu from "@/components/Menus/Menu";
// import Screen from "@/components/Screen";
import Footer from "@/footer/Footer";
import Cookie from "@/cookie/Cookie";
import menuItems from "@/data/nav.json";
import Chat from "@/components/Chat/Chat";

import "@/styles/globals.css";
import Screen from "./components/Screen";

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
						component: "cart",
						button: { title: "Checkout", className: "font-bold" },
					}}
				/>
				<Menu
					menu={{ title: "Account", id: "account", component: "account" }}
				/>
				<Menu
					menu={{
						title: "Stores",
						id: "stores",
						component: "stores",
					}}
				/>
				<Menu
					menu={{
						title: "Help",
						id: "help",
						button: {
							title: "Need more help?",
							className: "bg-amber-400 font-bold text-black",
						},
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
						component: "filters",
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
						component: "dealers",
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
									component: "subNav",
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
				<Cookie />
				<Screen />
				<Chat />
			</body>
		</html>
	);
}
