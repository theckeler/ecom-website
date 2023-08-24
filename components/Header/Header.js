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

export default function Header({ menuItems }) {
	const searchParams = useSearchParams();

	const [oopsTriggered, setOopsTriggered] = useState(searchParams.get("oops"));
	useEffect(() => {
		setOopsTriggered(searchParams.get("oops"));
	}, [oopsTriggered, searchParams]);

	const buttonItems = [
		{
			title: "Stores",
			buttonIcon: (
				<Location
					className="h-8 lg:mr-1 fill-white dark:fill-amber-400 md:group-hover:fill-amber-400"
					style={{ minWidth: "2em", maxWidth: "2em" }}
				/>
			),
			url: null,
			onClick: () => ToggleMenu("stores"),
		},
		{
			title: "Help",
			buttonIcon: (
				<Help
					className="h-8 lg:mr-1 fill-white dark:fill-amber-400 md:group-hover:fill-amber-400"
					style={{ minWidth: "2em", maxWidth: "2em" }}
				/>
			),
			url: null,
			onClick: () => ToggleMenu("help"),
		},
		{
			title: "Account",
			buttonIcon: (
				<Account
					className="h-8 lg:mr-1 fill-white dark:fill-amber-400 md:group-hover:fill-amber-400"
					style={{ minWidth: "2em", maxWidth: "2em" }}
				/>
			),
			url: null,
			onClick: () => ToggleMenu("account"),
		},
		{
			title: "Cart",
			buttonIcon: (
				<Cart
					className="h-8 lg:mr-1 fill-white dark:fill-amber-400 md:group-hover:fill-amber-400"
					style={{ minWidth: "2em", maxWidth: "2em" }}
				/>
			),
			url: null,
			onClick: () => ToggleMenu("cart"),
		},
	];

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

			<ul className="grid grid-cols-2 mb-24">
				<li className="row-start-1 col-span-12 bg-amber-400">
					<div className="max-w-screen-2xl mx-auto">
						<Promo />
					</div>
				</li>
				<li className="row-start-2 col-span-2 lg:col-span-1 lg:bg-neutral-800">
					<div className="lg:max-w-screen-md bg-neutral-800 flex justify-end p-2">
						{buttonItems.map((menu, i) => (
							<HeaderButton
								key={i}
								title={menu.title}
								buttonIcon={menu.buttonIcon}
								onClick={menu.onClick}
								ariaLabel={menu.title}
								mobile
								fillColor="fill-white"
								className={menu.className + " text-white "}
							/>
						))}
					</div>
				</li>
				<li className="row-start-3 col-span-2" id="sticky-nav">
					<div className="max-w-screen-2xl mx-auto">
						<ul className="max-w-screen-2xl mx-auto flex flex-row items-center w-full border-b dark:border-neutral-700">
							<li className="p-2">
								<Link href="/" aria-label="Return Home">
									<Logo className="w-40 dark:fill-amber-400" />
								</Link>
							</li>
							<li className="ml-auto">
								<Menu
									className="lg:flex lg:relative lg:z-auto lg:max-w-fit lg:bg-transparent"
									menu={{
										title: "",
										id: "main-nav",
										component: <MainNav menuItems={menuItems} />,
										componentType: "mainNav",
										left: false,
										menuItems: menuItems,
										button: {
											title: "Up to $300 off select Ultima Series™ Zero-Turns",
											className: "font-bold",
										},
									}}
								/>
							</li>
							<li className="lg:hidden flex flex-col items-center pr-2">
								<button
									className="lg:w-12 leading-none"
									onClick={() => {
										ToggleMenu("main-nav");
										document.querySelector("#sticky-nav").scrollIntoView();
									}}
									aria-label="Navigation">
									<ul className="flex flex-row items-center">
										<li>
											<span className="text-sm text-bold leading-none">
												Menu
											</span>
										</li>
										<li>
											<Hamburger className="w-12 dark:fill-amber-400" />
										</li>
									</ul>
								</button>
							</li>
						</ul>
					</div>
				</li>
				<li className="row-start-4 lg:col-start-1 lg:row-start-2 col-span-2 lg:col-span-1 flex lg:justify-end bg-gray-200 dark:bg-neutral-700 lg:bg-neutral-800">
					<div className="lg:max-w-screen-md lg:bg-neutral-800 w-full p-2">
						<InputButton
							{...{
								className: "group",
								padding: "px-3",
								input: {
									id: "search-bar-header",
									placeholder: "Search",
									name: "search",
									className:
										"text-sm lg:bg-neutral-700 dark:bg-neutral-600 text-white border lg:border-neutral-700 group-hover:border-amber-400 outline-0 placeholder:text-neutral-500 placeholder:italic w-full",
								},
								icon: <Search className="w-8 fill-black" />,
								button: {
									title: "Search",
									ariaLabel: null,
									className:
										"bg-neutral-300 group-hover:bg-amber-400 text-black text-sm min-h-[4em]",
								},
							}}
						/>
					</div>
				</li>
			</ul>
		</>
	);
}
