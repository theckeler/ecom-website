"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import ToggleMenu from "@/functions/toggleMenu";

import Promo from "./components/Promo";
import HeaderButton from "./components/Button";
import Hamburger from "@/icons/Hamburger";
import Menu from "@/menus/Menu";
import ShopYourDealer from "@/components/ShopYourDealer/ShopYourDealer";
import Logo from "@/components/Logo";
import InputButton from "@/components/Form/InputButton";
import Oops from "@/components/Oops";
import MainNav from "@/components/Nav/Nav";

import Account from "@/icons/Account";
import Help from "@/icons/Help";
import Location from "@/icons/Location";
import Cart from "@/icons/Cart";
import Search from "@/icons/Search";

const backs = {
	nav: "bg-neutral-100",
	buttons: "bg-neutral-100",
	input: "bg-neutral-800",
	promo:
		"bg-neutral-200 lg:bg-neutral-900 lg:text-white lg:fill-white 2xl:bg-neutral-200 2xl:text-black 2xl:fill-black",
};

export default function Header({
	menuItems,
	backgrounds = {
		nav: backs.nav,
		buttons: backs.buttons,
		logo: `${backs.nav} lg:${backs.buttons}`,
		input: `${backs.input} lg:${backs.buttons}`,
	},
	button = {
		className: "h-8 lg:mr-1 fill-neutral-800 md:group-hover:fill-black",
		style: { minWidth: "2em", maxWidth: "2em" },
	},
	buttonItems = [
		{
			title: "Stores",
			buttonIcon: (
				<Location className={button.className} style={button.style} />
			),
			url: null,
			onClick: () => ToggleMenu("stores"),
		},
		{
			title: "Help",
			buttonIcon: <Help className={button.className} style={button.style} />,
			url: null,
			onClick: () => ToggleMenu("help"),
		},
		{
			title: "Account",
			buttonIcon: <Account className={button.className} style={button.style} />,
			url: null,
			onClick: () => ToggleMenu("account"),
		},
		{
			title: "Cart",
			buttonIcon: <Cart className={button.className} style={button.style} />,
			url: null,
			onClick: () => ToggleMenu("cart"),
		},
	],
}) {
	const searchParams = useSearchParams();
	const [oopsTriggered, setOopsTriggered] = useState(searchParams.get("oops"));
	useEffect(() => {
		setOopsTriggered(searchParams.get("oops"));
	}, [oopsTriggered, searchParams]);

	return (
		<>
			{oopsTriggered && (
				<Menu
					menu={{
						title: "Oops",
						id: "oops",
						component: <Oops menuItems={menuItems} />,
						button: { title: "Close", className: "font-bold" },
						fullscreen: true,
						componentType: "oops",
					}}
				/>
			)}

			<ul className="grid grid-cols-[1fr,100px] lg:grid-cols-[1fr_180px_minmax(100px,976px)_210px_1fr] xl:grid-cols-[1fr_180px_minmax(100px,976px)_380px_1fr] 2xl:mb-1">
				<li className={`col-span-full ${backs.promo}`}>
					<div className="max-w-screen-2xl mx-auto">
						<Promo />
					</div>
				</li>
				<li
					className={`lg:col-start-4 col-span-full lg:col-span-1 border-b ${backgrounds.buttons}`}>
					<div className="flex justify-end p-1">
						{buttonItems.map((menu, i) => (
							<HeaderButton
								key={i}
								title={menu.title}
								buttonIcon={menu.buttonIcon}
								onClick={menu.onClick}
								ariaLabel={menu.title}
								mobile
								fillColor="fill-white"
								className={menu.className}
							/>
						))}
					</div>
				</li>
				<li
					className={`${backgrounds.buttons} hidden lg:block col-start-1 row-start-2`}></li>
				<li
					className={`col-start-1 lg:col-start-2 row-start-3 lg:row-start-2 border-b ${backgrounds.logo}`}>
					<Link
						href="/"
						className="flex content-center h-full p-2"
						aria-label="Return Home">
						<Logo className="w-40 fill-black dark:fill-amber-400" />
					</Link>
				</li>
				<li
					className={`col-start-2 lg:col-start-1 row-start-3 col-span-full ${backgrounds.nav}`}
					id="sticky-nav">
					<Menu
						className="max-w-screen-2xl mx-auto flex flex-row items-center w-full lg:flex lg:relative lg:z-auto"
						menu={{
							title: "",
							id: "main-nav",
							component: <MainNav menuItems={menuItems} />,
							componentType: "mainNav",
							left: true,
							menuItems: menuItems,
							button: {
								title: "Up to $300 off select Ultima Series™ Zero-Turns",
								className: "font-bold",
							},
						}}
					/>

					<div className="lg:hidden flex flex-col items-center p-2">
						<button
							className="lg:w-12 leading-none"
							onClick={() => {
								ToggleMenu("main-nav");
								document.querySelector("#sticky-nav").scrollIntoView();
							}}
							aria-label="Navigation">
							<ul className="flex gap-1 flex-row items-center">
								<li>
									<span className="text-sm text-bold leading-none">Menu</span>
								</li>
								<li className="bg-neutral-800 rounded">
									<Hamburger className="w-12 fill-amber-400 p-1" />
								</li>
							</ul>
						</button>
					</div>
				</li>
				<li
					className={`row-start-4 lg:col-start-3 lg:row-start-2 col-span-full lg:col-span-1 flex lg:justify-end border-b ${backgrounds.input}`}>
					<div className="w-full p-2">
						<InputButton
							{...{
								className: "group",
								padding: "px-3",
								input: {
									id: "search-bar-header",
									placeholder: "Search",
									name: "search",
									className:
										"text-sm lg:bg-neutral-100 dark:bg-neutral-600 text-white border lg:border-neutral-300 group-hover:border-amber-400 outline-0 placeholder:text-neutral-500 placeholder:italic w-full",
								},
								icon: (
									<Search className="w-8 fill-black lg:fill-white group-hover:fill-neutral-800" />
								),
								button: {
									title: "Search",
									ariaLabel: null,
									className:
										"bg-amber-400 lg:bg-neutral-800 group-hover:bg-amber-400 text-black text-sm min-h-[4em]",
								},
							}}
						/>
					</div>
				</li>
				<li
					className={`${backgrounds.buttons} hidden lg:block col-start-5 row-start-2`}></li>
			</ul>
		</>
	);
}
