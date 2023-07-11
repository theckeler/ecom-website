import Header from "@/header/Header";
import Cart from "@/components/Menus/Cart";
import Stores from "@/components/Menus/Stores";
import Account from "@/components/Menus/Account";
import Screen from "@/components/Screen";
import Footer from "@/footer/Footer";
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
				<Cart className="popup-item" />
				<Account className="popup-item" />
				<Stores className="popup-item" />
				<main className="">{children}</main>
				<Footer />
				<Screen />
			</body>
		</html>
	);
}
