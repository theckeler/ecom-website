"use client";
import Link from "next/link";

import Close from "@/icons/Close";

export default function Nav({ menuItems }) {
	// const menuItems = [
	// 	{ title: "Lawn Mowers", url: "/lawn-mowers" },
	// 	{ title: "Electric Mowers & Tools", url: "#top" },
	// 	{ title: "Snow Blowers", url: "#top" },
	// 	{ title: "Commercial Equipment", url: "#top" },
	// 	{ title: "Serives & Parts", url: "#top" },
	// 	{ title: "Attachments", url: "#top" },
	// ];

	return (
		<div id="nav" className="hidden lg:block w-full">
			<ul className="lg:flex fixed lg:relative z-50 left-0 top-0 h-full w-full md:max-w-xl lg:w-full bg-white lg:bg-transparent p-2">
				<li className="lg:hidden h-12" style={{}}>
					<button
						onClick={() => {
							document.querySelector("#nav").classList.toggle("hidden");
						}}
						className="w-full">
						<Close className="h-12 ml-auto" />
					</button>
				</li>
				{menuItems.map((menu, i) => (
					<li className="whitespace-nowrap" style={{}} key={i}>
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
