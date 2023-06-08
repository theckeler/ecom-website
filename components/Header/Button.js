import Account from "@/icons/Account";
import Help from "@/icons/Help";
import Location from "@/icons/Location";
import Cart from "@/icons/Cart";

export default function Buttons({
	title,
	buttonIcon = "location",
	className,
	fillColor,
}) {
	const Icons = {
		account: Account,
		help: Help,
		location: Location,
		cart: Cart,
	};

	const Icon = Icons[buttonIcon];

	return (
		<a href="#top" className={`flex ${className}`}>
			<Icon className="h-14" fillColor="fill-white" />
			{title}
		</a>
	);
}
