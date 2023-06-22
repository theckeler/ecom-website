"use client";

import Link from "next/link";
import ExpandMore from "@/icons/ExpandMore";

export default function LinkMain({ menu, openSubMenu }) {
	const LinkType = menu.slug ? "button" : Link;

	return (
		<LinkType
			href={menu.url}
			className="py-3 px-2 w-full font-bold text-black lg:text-white lg:text-sm flex relative z-10"
			onClick={openSubMenu}>
			<span>{menu.title}</span>
			{menu.sub && (
				<span className="ml-auto sm:ml-1">
					<ExpandMore className="w-6 fill-black lg:fill-white" />
				</span>
			)}
		</LinkType>
	);
}
