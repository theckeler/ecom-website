import Header from "@/header/Header";
import Screen from "@/components/Screen";
import "./globals.css";

export const metadata = {
	title: "Cub Cadet Rebuild",
	description: "Nothing to see here",
};

const menuItems = [
	{
		title: "Lawn Mowers",
		url: "/lawn-mowers",
		slug: "lawn-mowers",
		sub: [{ title: "Lawn Mowers", url: "/lawn-mowers" }],
	},
	{ title: "Electric Mowers & Tools", url: "#top" },
	{ title: "Snow Blowers", url: "#top" },
	{ title: "Commercial Equipment", url: "#top" },
	{ title: "Services & Parts", url: "#top" },
	{ title: "Attachments", url: "#top" },
];

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-white">
				<Header className="" menuItems={menuItems} />
				<main className="">{children}</main>
				<div className="bg-gray-200" style={{ minHeight: "600px" }}></div>
			</body>
		</html>
	);
}
