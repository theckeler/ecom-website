"use client";
import Link from "next/link";

import ButtonHeader from "@/header/Button";
import Hamburger from "@/icons/Hamburger";
import Logo from "@/components/Logo";
import Nav from "@/header/Nav";
import Promo from "@/components/Promo";

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
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 -960 960 960"
									className="w-8 mr-1">
									<path
										d="M840-519v339q0 24-18 42t-42 18H179q-24 0-42-18t-18-42v-339q-28-24-37-59t2-70l43-135q8-27 28-42t46-15h553q28 0 49 15.5t29 41.5l44 135q11 35 1.5 70T840-519Zm-270-31q29 0 49-19t16-46l-25-165H510v165q0 26 17 45.5t43 19.5Zm-187 0q28 0 47.5-19t19.5-46v-165H350l-25 165q-4 26 14 45.5t44 19.5Zm-182 0q24 0 41.5-16.5T263-607l26-173H189l-46 146q-10 31 8 57.5t50 26.5Zm557 0q32 0 50.5-26t8.5-58l-46-146H671l26 173q3 24 20.5 40.5T758-550Z"
										class="fill-white"
									/>
								</svg>
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
					<ul className="flex items-center">
						<li className="lg:hidden flex flex-col items-center">
							<button
								className="lg:w-12 leading-none"
								onClick={() => {
									document.querySelector("#nav").classList.toggle("hidden");
								}}>
								<Hamburger
									className="min-w-full"
									fillColor="#fff"
									style={{ minWidth: "3em", maxWidth: "3em" }}
								/>
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

						<Nav menuItems={menuItems} />
					</ul>
				</div>
			</li>
		</ul>
	);
}
