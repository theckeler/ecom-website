import Header from "@/header/Header";
import Cart from "@/components/Cart";
import Dealer from "@/components/Dealer";
import Stores from "@/components/Stores";
import Account from "@/components/Account";
import menuItems from "@/data/nav.json";
import "./globals.css";

export const metadata = {
	title: "Cub Cadet Rebuild",
	description: "Nothing to see here",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-white">
				<Header className="" menuItems={menuItems} />
				<Cart className="sub-nav" />
				<Dealer className="sub-nav" />
				<Account className="sub-nav" />
				<Stores className="sub-nav" />
				<main className="">{children}</main>
				<div className="bg-gray-200" style={{ minHeight: "600px" }}></div>
			</body>
		</html>
	);
}
