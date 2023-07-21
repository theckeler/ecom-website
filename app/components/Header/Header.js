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
		// {
		// 	title: "Search",
		// 	buttonIcon: (
		// 		<Search
		// 			className="h-8 lg:mr-1 fill-white"
		// 			style={{ minWidth: "2em", maxWidth: "2em" }}
		// 		/>
		// 	),
		// 	url: null,
		// 	onClick: () => ToggleMenu("search"),
		// 	className: "hidden lg:flex",
		// },
		{
			title: "Stores",
			buttonIcon: (
				<Location
					className="h-8 lg:mr-1 fill-white md:group-hover:fill-amber-400"
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
					className="h-8 lg:mr-1 fill-white md:group-hover:fill-amber-400"
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
					className="h-8 lg:mr-1 fill-white md:group-hover:fill-amber-400"
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
					className="h-8 lg:mr-1 fill-white md:group-hover:fill-amber-400"
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

			<ul className="mb-3 border-b">
				<li>
					<Promo />
				</li>

				<li className="bg-neutral-800 py-2">
					<div className="max-w-screen-2xl mx-auto text-center">
						<ul className="flex gap-6 xl:gap-10 2xl:gap-20 items-center text-sm">
							<li className="shrink">
								<ShopYourDealer />
							</li>

							<li className="grow flex justify-end">
								<ul className="flex">
									<li className="hidden lg:flex justify-end grow basis-full pr-4">
										<InputButton
											{...{
												className: "group",
												padding: "px-3",
												input: {
													id: "search-bar-header",
													placeholder: "Search",
													name: "search",
													className:
														"text-sm bg-neutral-700 text-white border border-neutral-700 group-hover:border-amber-400 outline-0 placeholder:text-neutral-500 placeholder:italic w-full",
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
									</li>
									{buttonItems.map((menu, i) => (
										<li className="shrink" key={i}>
											<HeaderButton
												title={menu.title}
												buttonIcon={menu.buttonIcon}
												onClick={menu.onClick}
												ariaLabel={menu.title}
												mobile
												fillColor="fill-white"
												className={menu.className + " text-white "}
											/>
										</li>
									))}
								</ul>
							</li>
						</ul>
					</div>
				</li>
			</ul>

			<div className="bg-white border-b" id="sticky-nav">
				<ul className="max-w-screen-2xl mx-auto flex flex-row items-center w-full">
					<li className="p-2">
						<Link href="/" aria-label="Return Home">
							<Logo className="w-40" />
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
									<span className="text-sm text-bold leading-none">Menu</span>
								</li>
								<li>
									<Hamburger className="w-12" fillColor="#000" />
								</li>
							</ul>
						</button>
					</li>
				</ul>
			</div>

			<div className="bg-gray-200 lg:hidden">
				<div className="max-w-screen-2xl mx-auto text-center p-2">
					<InputButton
						{...{
							className: "",
							padding: "p-2",
							input: {
								id: "search-bar",
								placeholder: "Search",
								name: "search",
								className: "",
							},
							button: {
								title: "Search",
								ariaLabel: null,
								className: "bg-amber-400 text-black",
							},
						}}
					/>
				</div>
			</div>
		</>
	);
}
