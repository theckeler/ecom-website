import Header from "@/header/Header";
import Menu from "@/components/Menus/Menu";
import Screen from "@/components/Oops";
import Footer from "@/footer/Footer";
import Cookie from "@/cookie/Cookie";

import "./globals.css";

export const metadata = {
	title: "Cub Cadet Rebuild",
	description: "Nothing to see here",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-white">
				<Header />

				<main className="">{children}</main>

				<Footer />

				<Menu
					menu={{
						title: "Cart",
						id: "cart",
						component: "cart",
						button: { title: "Checkout", className: "font-bold" },
					}}
				/>
				<Menu menu={{ title: "Account", id: "account" }} />
				<Menu
					menu={{
						title: "Stores",
						id: "stores",
						component: "stores",
						button: {
							title: "Find A Store",
							className: "font-bold",
						},
					}}
				/>
				<Menu
					menu={{
						title: "Help",
						id: "help",
						button: {
							title: "Need more help?",
							className: "bg-black font-bold text-white",
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

				{/* <Screen className="hidden" /> */}
				<Cookie />
			</body>
		</html>
	);
}
