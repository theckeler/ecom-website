"use client";

import Close from "@/icons/Close";
import LinkMain from "@/header/LinkMain";
import toggleMenu from "@/functions/toggleMenu";
// import ChevronLeft from "@/icons/ChevronLeft";

export default function Nav({ menuItems }) {
	let openSubMenu = null;
	return (
		<div id="main-nav" className="hidden lg:block w-full popup-item">
			<ul className="lg:flex fixed lg:relative z-50 lg:z-auto left-0 top-0 h-full w-full md:max-w-xl lg:max-w-fit bg-white lg:bg-transparent">
				<li className="lg:hidden py-3">
					<button
						onClick={() => {
							toggleMenu(null);
						}}
						className="w-full flex justify-end"
						aria-label="Close">
						<Close className="h-12 " />
					</button>
				</li>
				<li className="relative group overflow-x-scroll max-h-[calc(100vh-72px)]">
					<ul className="flex flex-col lg:flex-row divide-y lg:divide-none divide-solid border-t lg:border-0 border-b pb-8 lg:pb-0">
						{menuItems.map((menu, i) => {
							if (menu.sub) {
								openSubMenu = () => {
									document
										.querySelector(`#${menu.slug}-sub`)
										.classList.toggle("hidden");
									document
										.querySelector("body")
										.classList.toggle("overflow-hidden");
								};
							}

							return (
								<li key={i} className="">
									<LinkMain {...{ i, menu, openSubMenu }} />
								</li>
							);
						})}
					</ul>
				</li>
			</ul>
		</div>
	);
}
