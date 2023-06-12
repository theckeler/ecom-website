import Account from "@/icons/Account";
import Help from "@/icons/Help";
import Location from "@/icons/Location";
import Cart from "@/icons/Cart";

export default function Buttons({
	title,
	buttonIcon = "location",
	className = "",
	fillColor,
	mobile,
	style,
}) {
	const Icons = {
		account: Account,
		help: Help,
		location: Location,
		cart: Cart,
	};

	const Icon = Icons[buttonIcon];

	return (
		<a
			href="#top"
			className={`p-2 flex items-center ${className}`}
			style={style}>
			<Icon
				className="h-8 lg:mr-1"
				fillColor="fill-white"
				style={{ minWidth: "2em", maxWidth: "2em" }}
			/>
			<span className={mobile && "hidden xl:block whitespace-nowrap"}>
				{title}
			</span>
		</a>
	);
}
