"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import toggleMenu from "@/functions/toggleMenu";

import Promo from "./components/Promo";
import HeaderButton from "./components/Button";
import Hamburger from "@/icons/Hamburger";
import Menu from "@/menus/Menu";
import ShopYourDealer from "@/components/Menus/components/ShopYourDealer";
import Logo from "@/components/Logo";
// import Oops from "@/components/Oops";

export default function Header({ menuItems }) {
	const searchParams = useSearchParams();
	const oops = searchParams.get("oops");

	const [oopsTriggered, setOopsTriggered] = useState(oops);
	useEffect(() => {
		setOopsTriggered(oopsTriggered);
		//console.log("oopsTriggered", oopsTriggered);
	}, [oopsTriggered, searchParams]);

	const buttonItems = [
		{ title: "Stores", url: null, onClick: () => toggleMenu("stores") },
		{
			title: "Help",
			buttonIcon: "help",
			url: null,
			onClick: () => toggleMenu("help"),
		},
		{
			title: "Account",
			buttonIcon: "account",
			url: null,
			onClick: () => toggleMenu("account"),
		},
		{
			title: "Cart",
			buttonIcon: "cart",
			url: null,
			onClick: () => toggleMenu("cart"),
		},
	];

	return (
		<>
			{oopsTriggered && (
				<Menu
					menu={{
						title: "Oops",
						id: "oops",
						component: "oops",
						button: { title: "Close", className: "font-bold" },
						fullscreen: true,
					}}
				/>
			)}
			<ul className="mb-3 border-b">
				<li className="">
					<Promo />
				</li>

				<li className="bg-gray-800">
					<div className="max-w-screen-2xl mx-auto text-center">
						<ul className="flex items-center text-sm">
							<li className="">
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
				className=" sticky md:relative top-0 z-30 bg-white/70 border-b backdrop-blur-sm"
				id="sticky-nav">
				<ul className="max-w-screen-2xl mx-auto flex flex-row-reverse lg:flex-row items-center w-full relative">
					<li className="lg:hidden flex flex-col items-center pr-2">
						<button
							className="lg:w-12 leading-none"
							onClick={() => {
								toggleMenu("main-nav");
								document.querySelector("#sticky-nav").scrollIntoView();
							}}
							aria-label="Navigation">
							<ul className="flex flex-row-reverse sm:flex-row items-center">
								<li>
									<Hamburger className="w-12" fillColor="#000" />
								</li>
								<li>
									<span className="text-sm text-bold leading-none">Menu</span>
								</li>
							</ul>
						</button>
					</li>
					<li className="mr-auto lg:ml-0 w-40 p-2">
						<Link href="/" aria-label="Return Home">
							<Logo />
						</Link>
					</li>
					<li>
						<Menu
							className="lg:flex lg:relative lg:z-auto lg:max-w-fit lg:bg-transparent"
							menu={{
								title: "",
								id: "main-nav",
								component: "mainNav",
								left: false,
								menuItems: menuItems,
								button: {
									title: "Up to $300 off select Ultima Series™ Zero-Turns",
									className: "font-bold",
								},
							}}
						/>
					</li>
				</ul>
			</div>
		</>
	);
}
