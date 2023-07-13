import Header from "@/header/Header";
import Menu from "@/components/Menus/Menu";
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

				<main className="">{children}</main>

				<Footer />

				<Menu menu={{ title: "Cart", id: "cart", component: "cart" }} />
				<Menu menu={{ title: "Account", id: "account" }} />
				<Menu menu={{ title: "Stores", id: "stores" }} />
				<Menu menu={{ title: "Help", id: "help" }} />
				<Screen />
			</body>
		</html>
	);
}
