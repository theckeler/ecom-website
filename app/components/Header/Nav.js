"use client";
import Link from "next/link";

import Close from "@/icons/Close";

export default function Nav({ menuItems }) {
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
							className="block py-3 px-2 w-full text-black lg:text-white"
							onClick={() => {
								document.querySelector("#nav").classList.toggle("hidden");
							}}>
							{menu.title}
							{menu.sub && (
								<div>
									<ul>
										<li>asdasd</li>
									</ul>
								</div>
							)}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
