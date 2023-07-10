"use client";

import Close from "@/icons/Close";
import LinkMain from "@/header/LinkMain";
import SubNav from "@/header/SubNav";
import toggleMenu from "@/functions/toggleMenu";

export default function Nav({ menuItems }) {
	let openSubMenu = null;
	return (
		<div id="nav" className="hidden lg:block w-full">
			<ul className="lg:flex fixed lg:relative z-50 left-0 top-0 h-full w-full md:max-w-xl lg:max-w-fit bg-white lg:bg-transparent">
				<li className="lg:hidden h-12">
					<button
						onClick={() => {
							toggleMenu(null);
						}}
						className="w-full">
						<Close className="h-12 ml-auto" />
					</button>
				</li>
				{menuItems.map((menu, i) => {
					if (menu.sub) {
						openSubMenu = () => {
							document
								.querySelector(`#${menu.slug}`)
								.querySelector(`#sub-nav`)
								.classList.toggle("hidden");
							document.querySelector("#bg-sub-menu").classList.toggle("hidden");
							document
								.querySelector("body")
								.classList.toggle("overflow-hidden");
						};
					}

					return (
						<li className="relative group p-2" key={i} id={menu.slug}>
							<LinkMain {...{ i, menu, openSubMenu }} />
							{<SubNav sub={menu.sub} />}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
