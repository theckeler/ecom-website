"use client";
import Link from "next/link";

import toggleMenu from "@/functions/toggleMenu";

import HeaderButton from "./components/Button";
import Hamburger from "@/icons/Hamburger";
// import Nav from "@/components/Header/components/Nav";
import Menu from "@/menus/Menu";
import ShopYourDealer from "@/components/Menus/components/ShopYourDealer";

// import SubNav from "./components/SubNav";
import Promo from "./components/Promo";

import Logo from "@/components/Logo";

import menuItems from "@/data/nav.json";

export default function Header() {
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

			<li className="bg-white">
				<div className="max-w-screen-2xl mx-auto">
					<ul className="flex items-center w-full relative">
						<li className="lg:hidden flex flex-col items-center pr-2">
							<button
								className="lg:w-12 leading-none"
								onClick={() => {
									toggleMenu("main-nav");
								}}
								aria-label="Navigation">
								<ul className="flex items-center">
									<li>
										<Hamburger className="w-12" fillColor="#000" />
									</li>
									<li>
										<span className="text-sm text-bold leading-none">Menu</span>
									</li>
								</ul>
							</button>
						</li>
						<li className="ml-auto md:ml-0 w-40 p-2">
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
									left: true,
									menuItems: menuItems,
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
												left: true,
												menuItems: mainMenu,
											}}
										/>
									)
							)}
						</li>
					</ul>
				</div>
			</li>
		</ul>
	);
}
