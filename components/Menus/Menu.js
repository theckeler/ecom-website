"use client";

import Image from "next/image";

import MenuBody from "./components/Body";
import MenuTitle from "./components/Title";
import ToggleMenu from "@/components/Functions/toggleMenu";

export default function Menu({ className, menu }) {
	const mainNavCSS = menu.componentType === "mainNav" && "lg:hidden";

	return (
		<div
			id={menu.id}
			className={`popup-item fixed z-40 top-0 w-full bg-white dark:bg-black ${
				menu.componentType === "mainNav"
					? "lg:bg-transparent"
					: "lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl"
			} ${menu.left ? "left-0" : "right-0"} ${
				!menu.fullscreen && "hidden"
			} ${className}`}>
			<ul
				className={`w-full flex flex-col h-[calc(100vh-114px)] max-h-screen min-h-[100dvh] ${
					menu.componentType === "mainNav" &&
					"lg:h-auto lg:max-h-none lg:min-h-[auto]"
				}`}>
				<li
					className={`border-b dark:border-neutral-700 ${mainNavCSS} ${
						menu.className ? menu.className : ""
					}`}>
					<MenuTitle
						{...{
							title: menu.title,
							componentType: menu.componentType,
						}}
					/>
				</li>
				<li
					className={`overflow-x-scroll grow ${
						menu.componentType !== "mainNav" && "pt-2 pb-10"
					} `}>
					<MenuBody
						{...{
							loadComponent: menu.component,
							button: { ...menu.button },
							menuItems: menu.menuItems,
							componentType: menu.componentType,
						}}
					/>
				</li>
				{menu.button && (
					<li className={`mt-auto h-16 p-2 w-full ${mainNavCSS}`}>
						<button
							className={`bg-amber-400 p-2 h-12 min-h-full w-full block truncate ... ${menu.button.className}`}
							onClick={() => ToggleMenu(null)}>
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
									onClick={() => ToggleMenu("promo")}>
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
