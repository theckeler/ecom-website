import Link from "next/link";

import Account from "@/icons/Account";
import Help from "@/icons/Help";
import Location from "@/icons/Location";
import Cart from "@/icons/Cart";
import Dealer from "@/icons/Store";

export default function Buttons({
	title,
	buttonIcon = "location",
	className = "",
	onClick = null,
	mobile,
	style,
	fillColor = "fill-white",
}) {
	const Icons = {
		account: Account,
		help: Help,
		location: Location,
		cart: Cart,
		dealer: Dealer,
	};

	const Icon = Icons[buttonIcon];
	const LinkType = onClick ? "button" : Link;

	return (
		<LinkType
			href="#top"
			className={`p-2 flex items-center ${className}`}
			style={style}
			onClick={onClick}>
			<Icon
				className={`h-8 lg:mr-1 ${fillColor}`}
				style={{ minWidth: "2em", maxWidth: "2em" }}
			/>
			<span className={mobile && "hidden xl:block whitespace-nowrap"}>
				{title}
			</span>
		</LinkType>
	);
}
