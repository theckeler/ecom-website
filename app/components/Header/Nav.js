"use client";
import Link from "next/link";

export default function Nav() {
	const menuItems = [
		{ title: "Lawn Mowers", url: "/lawn-mowers" },
		{ title: "Electric Mowers & Tools", url: "#top" },
		{ title: "Snow Blowers", url: "#top" },
		{ title: "Commercial Equipment", url: "#top" },
		{ title: "Serives & Parts", url: "#top" },
		{ title: "Attachments", url: "#top" },
	];

	return (
		<div id="nav" className="hidden">
			<ul className="fixed z-50 left-0 top-0 min-h-screen w-full md:max-w-xl bg-white p-2">
				<li className="h-12" style={{}}>
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
							className="block p-3 w-full"
							onClick={() => {
								document.querySelector("#nav").classList.toggle("hidden");
							}}>
							{menu.title}
						</Link>
					</li>
				))}
			</ul>
			<div
				className="fixed left-0 top-0 z-40 bg-black flex w-screen h-screen opacity-70"
				onClick={() => {
					document.querySelector("#nav").classList.toggle("hidden");
				}}></div>
		</div>
	);
}
