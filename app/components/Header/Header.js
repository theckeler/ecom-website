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
import InputButton from "@/components/InputButton";
import Oops from "@/components/Oops";
import MainNav from "@/components/Nav/Nav";

export default function Header({ menuItems }) {
	const searchParams = useSearchParams();

	const [oopsTriggered, setOopsTriggered] = useState(searchParams.get("oops"));
	useEffect(() => {
		setOopsTriggered(searchParams.get("oops"));
	}, [oopsTriggered, searchParams]);

	const buttonItems = [
		{ title: "Stores", url: null, onClick: () => ToggleMenu("stores") },
		{
			title: "Help",
			buttonIcon: "help",
			url: null,
			onClick: () => ToggleMenu("help"),
		},
		{
			title: "Account",
			buttonIcon: "account",
			url: null,
			onClick: () => ToggleMenu("account"),
		},
		{
			title: "Cart",
			buttonIcon: "cart",
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

				<li className="bg-gray-800">
					<div className="max-w-screen-2xl mx-auto text-center">
						<ul className="flex items-center text-sm">
							<li>
								<ShopYourDealer />
							</li>

							<li className="basis-4/12 flex justify-end ml-auto">
								<ul className="flex items-center">
									{buttonItems.map((menu, i) => (
										<li className="basis-full" key={i}>
											<HeaderButton
												title={menu.title}
												buttonIcon={menu.buttonIcon}
												onClick={menu.onClick}
												ariaLabel={menu.title}
												mobile
												fillColor="fill-white"
												className="text-white"
											/>
										</li>
									))}
								</ul>
							</li>
						</ul>
					</div>
				</li>
			</ul>

			<div
				//className="z-40 md:z-auto bg-white/70 border-b backdrop-blur-sm"
				className="bg-white border-b"
				id="sticky-nav">
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
