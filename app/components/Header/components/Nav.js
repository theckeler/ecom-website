"use client";

import LinkMain from "@/components/Header/components/LinkMain";
// import menuItems from "@/data/nav.json";

export default function Nav({ menuItems }) {
	let openSubMenu = null;
	// console.log("Nav", menuItems);

	return (
		<ul className="flex flex-col lg:flex-row divide-y lg:divide-none divide-solid lg:border-0 pb-8 lg:pb-0">
			{menuItems.map((menu, i) => {
				if (menu.sub) {
					openSubMenu = () => {
						document
							.querySelector(`#${menu.slug}-sub`)
							.classList.toggle("hidden");
						document.querySelector("body").classList.toggle("overflow-hidden");
					};
				}

				return (
					<li key={i} className="">
						<LinkMain {...{ i, menu, openSubMenu }} />
					</li>
				);
			})}
		</ul>
	);
}
