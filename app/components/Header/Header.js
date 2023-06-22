"use client";
import Link from "next/link";

import HeaderButton from "@/header/Button";
import Hamburger from "@/icons/Hamburger";
import Logo from "@/components/Logo";
import Nav from "@/header/Nav";
import Promo from "@/components/Header/Promo";
import Store from "../Icons/Store";

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
				<div className="max-w-screen-2xl mx-auto text-center text-white">
					<ul className="flex items-center text-sm">
						<li className="basis-2/12 flex justify-start">
							<HeaderButton
								title="Select a Dealer"
								buttonIcon="dealer"
								onClick={() => toggleMenu("dealer")}
								mobile
								className="fill-white"
							/>
						</li>
						<li className="flex justify-end ml-auto">
							<ul className="flex items-center">
								{buttonItems.map((menu, i) => (
									<li className="basis-full" key={i}>
										<HeaderButton
											title={menu.title}
											buttonIcon={menu.buttonIcon}
											onClick={menu.onClick}
											mobile
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
