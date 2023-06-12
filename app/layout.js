import Header from "@/header/Header";
import Nav from "@/header/Nav";
import "./globals.css";

export const metadata = {
	title: "Cub Cadet Rebuild",
	description: "Nothing to see here",
};

const menuItems = [
	{ title: "Lawn Mowers", url: "/lawn-mowers" },
	{ title: "Commerical", url: "#top" },
	{ title: "Service & Parts", url: "#top" },
	{ title: "Attachments", url: "#top" },
];

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-white">
				<Header className="" menuItems={menuItems} />
				{/* <Nav menuItems={menuItems} /> */}
				<main className="">{children}</main>
				<div className="bg-gray-200" style={{ minHeight: "600px" }}></div>
			</body>
		</html>
	);
}
