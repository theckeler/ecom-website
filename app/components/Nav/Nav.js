"use client";
import Link from "next/link";
import Image from "next/image";

import ChevronRight from "@/icons/ChevronRight";
import ExpandMore from "@/icons/ExpandMore";
import ToggleMenu from "../Functions/ToggleMenu";

import Store from "@/icons/Store";
import Cart from "@/icons/Cart";
import Account from "@/icons/Account";
import Help from "@/icons/Help";
import Location from "@/icons/Location";

// import LinkMain from "@/components/Header/components/LinkMain";

export default function Nav({ menuItems }) {
	return (
		<ul className="flex flex-col lg:flex-row divide-y lg:divide-none divide-solid lg:border-0 pb-8 lg:pb-0">
			{menuItems.map((menu, i) => {
				const Icons = {
					store: Store,
					cart: Cart,
					account: Account,
					help: Help,
					location: Location,
				};
				const IconComponent = Icons[menu.icon];

				return (
					<li key={i} className={menu.className}>
						<button
							href={menu.url}
							className="block p-2 relative z-10 w-full"
							onClick={() => {
								ToggleMenu(`${menu.slug}${menu.sub ? "-sub" : ""}`);
							}}>
							<ul className="flex flex-row items-center w-full">
								{menu.img && (
									<li className="w-16 lg:hidden">
										<Image src={menu.img} width={200} height={200} alt="" />
									</li>
								)}
								{menu.icon && IconComponent && (
									<li className="w-10 lg:hidden">
										<IconComponent />
									</li>
								)}
								<li className="ml-1 md:ml-0 text-base lg:text-xs 2xl:text-base font-bold flex items-center truncate grow">
									{menu.title}
									{menu.sub && (
										<span className="ml-auto">
											<ChevronRight className="lg:hidden w-6 fill-black" />
											<ExpandMore className="hidden lg:block w-6 fill-black" />
										</span>
									)}
								</li>
							</ul>
						</button>
					</li>
				);
			})}
		</ul>
	);
}
