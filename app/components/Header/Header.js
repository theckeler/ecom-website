"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import toggleMenu from "@/functions/toggleMenu";
import HeaderButton from "./components/Button";
import Hamburger from "@/icons/Hamburger";
import Menu from "@/menus/Menu";
import ShopYourDealer from "@/components/Menus/components/ShopYourDealer";
import Promo from "./components/Promo";
import Logo from "@/components/Logo";
import Screen from "@/components/Screen";

import menuItems from "@/data/nav.json";

export default function Header() {
	const searchParams = useSearchParams();
	const oops = searchParams.get("oops");

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
			{oops && <Screen />}
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
				className="max-w-screen-2xl mx-auto sticky md:relative top-0 z-30 bg-white border-b"
				id="sticky-nav">
				<ul className="flex flex-row-reverse lg:flex-row items-center w-full relative">
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
						{menuItems.map(
							(mainMenu, i) =>
								mainMenu.sub && (
									<Menu
										key={i}
										className=""
										menu={{
											title: mainMenu.title,
											id: mainMenu.slug + "-sub",
											component: "subNav",
											className: "lg:relative",
											button: mainMenu.button,
											left: false,
											menuItems: mainMenu,
											ad: {
												title:
													"Check out special offers on residential and professional products",
												copy: "Save any season with rebates and discounts on residential and professional outdoor power equipment from Cub Cadet. Plus, learn more about year round specials for first responders, military members, NHLA members and Equine Groups.",
												img: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dwc805e60b/special-offers/so-fleet-discount-program.jpg",
												button: {
													title:
														"Special offers on residential and professional products",
													className: "font-bold",
												},
											},
										}}
									/>
								)
						)}
					</li>
				</ul>
			</div>
		</>
	);
}
