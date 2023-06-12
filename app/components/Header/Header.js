"use client";
import Link from "next/link";

import ButtonHeader from "@/header/Button";
import Hamburger from "@/icons/Hamburger";
import Logo from "@/components/Logo";
import Nav from "@/header/Nav";
import Promo from "@/components/Promo";
import Store from "../Icons/Store";

export default function Header({ className, menuItems }) {
	const buttonItems = [
		{ title: "Stores", url: "/" },
		{ title: "Help", buttonIcon: "help", url: "/" },
		{ title: "Account", buttonIcon: "account", url: "/" },
		{ title: "Cart", buttonIcon: "cart", url: "/" },
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
							<a className="flex items-center p-2">
								<Store className="w-8 mr-1 fill-white" />
								<span className="hidden md:block whitespace-nowrap">
									Select a Dealer
								</span>
							</a>
						</li>
						<li className="flex justify-end ml-auto">
							<ul className="flex items-center">
								{buttonItems.map((menu, i) => (
									<li className="basis-full" key={i}>
										<ButtonHeader
											title={menu.title}
											buttonIcon={menu.buttonIcon}
											fillColor="fill-white"
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
					<ul className="flex items-center w-full">
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
