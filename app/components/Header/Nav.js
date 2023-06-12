"use client";
import Link from "next/link";

import Screen from "@/components/Screen";

export default function Nav({ menuItems }) {
	// const menuItems = [
	// 	{ title: "Lawn Mowers", url: "/lawn-mowers" },
	// 	{ title: "Electric Mowers & Tools", url: "#top" },
	// 	{ title: "Snow Blowers", url: "#top" },
	// 	{ title: "Commercial Equipment", url: "#top" },
	// 	{ title: "Serives & Parts", url: "#top" },
	// 	{ title: "Attachments", url: "#top" },
	// ];

	console.log(menuItems);

	return (
		<div id="nav" className="hidden lg:block">
			<ul className="lg:flex fixed lg:relative z-50 left-0 top-0 h-full w-full md:max-w-xl lg:w-auto bg-white lg:bg-transparent p-2">
				<li className="lg:hidden h-12" style={{}}>
					<button
						onClick={() => {
							document.querySelector("#nav").classList.toggle("hidden");
						}}
						className="w-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							className="h-12 ml-auto">
							<path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
						</svg>
					</button>
				</li>
				{menuItems.map((menu, i) => (
					<li className="" style={{}} key={i}>
						<Link
							href={menu.url}
							className="block p-3 w-full text-black lg:text-white"
							onClick={() => {
								document.querySelector("#nav").classList.toggle("hidden");
							}}>
							{menu.title}
						</Link>
					</li>
				))}
			</ul>
			{/* <Screen /> */}
		</div>
	);
}
