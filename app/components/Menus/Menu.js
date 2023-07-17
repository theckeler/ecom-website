"use client";

import Image from "next/image";

import MenuBody from "./components/Body";
import MenuTitle from "./components/Title";
import toggleMenu from "@/functions/toggleMenu";

export default function Menu({ className, menu }) {
	const mainNavCSS = menu.component === "mainNav" && "lg:hidden";

	return (
		<div
			id={menu.id}
			className={`popup-item fixed ${
				menu.component === "mainNav" ? "z-50" : "z-40"
			} ${menu.left ? "left-0" : "right-0"} ${
				!menu.fullscreen && "hidden md:max-w-xl"
			} top-0 w-full bg-white ${className}`}>
			<ul
				className={`flex flex-col h-[calc(100vh-114px)] max-h-screen min-h-[100dvh] ${
					menu.component === "mainNav" &&
					"lg:h-auto lg:max-h-none lg:min-h-[auto]"
				}`}>
				<li className={`border-b bg-black text-white ${mainNavCSS}`}>
					<MenuTitle
						{...{
							title: menu.title,
							component: menu.component,
						}}
					/>
				</li>
				<li
					className={`overflow-x-scroll grow ${
						menu.component !== "mainNav" && "pt-2 pb-10"
					} `}>
					<MenuBody
						{...{
							loadComponent: menu.component,
							button: { ...menu.button },
							menuItems: menu.menuItems,
						}}
					/>
				</li>
				{menu.button && (
					<li
						className={`mt-auto h-16 px-2 py-2 w-full bg-black ${mainNavCSS}`}>
						<button
							className={`bg-amber-400 p-2 h-12 min-h-full w-full block truncate ... ${menu.button.className}`}>
							{menu.button.title}
						</button>
					</li>
				)}
				{menu.ad && (
					<li className={`mt-auto px-2 py-2 w-full bg-amber-400 ${mainNavCSS}`}>
						<ul>
							<li className="relative h-24 tall:hidden">
								<Image src={menu.ad.img} fill className="object-cover" alt="" />
							</li>
							<li className="text-sm text-center font-bold p-2 pb-0">
								{menu.ad.button.title}
							</li>
							<li className="text-xs text-center line-clamp-1 overflow-hidden mb-2">
								{menu.ad.copy}
							</li>
							<li className="">
								<button
									className={`bg-black text-white font-bold text-xs p-2 w-full block uppercase truncate ... ${menu.ad.button.className}`}
									onClick={() => toggleMenu("promo")}>
									Find out more
								</button>
							</li>
						</ul>
					</li>
				)}
			</ul>
		</div>
	);
}
