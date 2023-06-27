"use client";
import Link from "next/link";

import HeaderButton from "@/header/Button";
import Hamburger from "@/icons/Hamburger";
import Logo from "@/components/Logo";
import Nav from "@/components/Menus/Nav";
import Promo from "@/components/Header/Promo";
import ShopYourDealer from "@/dealer/ShopYourDealer";
//import ShopYourDealer from "@/dealer/Options";

export default function Header({ className, menuItems }) {
	const toggleMenu = (toggleMe) => {
		document.querySelectorAll(".sub-nav").forEach((e) => {
			e.classList.add("hidden");
		});
		document.querySelector(`#${toggleMe}`).classList.toggle("hidden");
	};

	const buttonItems = [
		{ title: "Stores", url: null, onClick: () => toggleMenu("stores") },
		{ title: "Help", buttonIcon: "help", url: "/" },
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
		<ul className="mb-3">
			<li className="">
				<Promo />
			</li>

			<li className="bg-gray-800">
				<div className="max-w-screen-2xl mx-auto text-center">
					<ul className="flex items-center text-sm">
						<li className="">
							<ShopYourDealer toggleMenu={toggleMenu} />
						</li>

						<li className="basis-4/12 flex justify-end ml-auto">
							<ul className="flex items-center">
								{buttonItems.map((menu, i) => (
									<li className="basis-full" key={i}>
										<HeaderButton
											title={menu.title}
											buttonIcon={menu.buttonIcon}
											onClick={menu.onClick}
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

			<li className="bg-black">
				<div className="max-w-screen-2xl mx-auto">
					<ul className="flex items-center w-full relative z-30">
						<li className="lg:hidden flex flex-col items-center">
							<button
								className="lg:w-12 leading-none"
								onClick={() => {
									document.querySelector("#nav").classList.toggle("hidden");
								}}>
								<Hamburger className="w-12" fillColor="#fff" />
								<span className="text-white text-xs leading-none relative -top-2">
									Menu
								</span>
							</button>
						</li>
						<li className="w-40 p-2">
							<Link href="/">
								<Logo />
							</Link>
						</li>
						<li className="">
							<Nav menuItems={menuItems} />
						</li>
					</ul>
				</div>
			</li>
		</ul>
	);
}
