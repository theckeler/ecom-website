import Header from "@/header/Header";
import Cart from "@/components/Menus/Cart";
//import Dealer from "@/components/Dealer";
import Stores from "@/components/Menus/Stores";
import Account from "@/components/Menus/Account";
import "./globals.css";
import Screen from "./components/Screen";

export const metadata = {
	title: "Cub Cadet Rebuild",
	description: "Nothing to see here",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-white">
				<Header />
				<Cart className="popup-item" />
				<Account className="popup-item" />
				<Stores className="popup-item" />
				<main className="">{children}</main>
				<div className="bg-gray-200" style={{ minHeight: "600px" }}></div>
				<Screen />
			</body>
		</html>
	);
}
