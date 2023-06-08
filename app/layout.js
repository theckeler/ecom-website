import Header from "@/header/Header";
import "./globals.css";

export const metadata = {
	title: "Cub Cadet Rebuild",
	description: "Nothing to see here",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-white">
				<Header className="" />
				<main className="">{children}</main>
				<div className="bg-gray-200" style={{ minHeight: "600px" }}></div>
			</body>
		</html>
	);
}
