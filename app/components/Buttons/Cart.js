"use client";
import Icon from "@/icons/Cart";
import ToggleMenu from "../Functions/toggleMenu";

export default function ButtonsCart({ className }) {
	return (
		<button
			className="flex gap-1 items-center p-1 md:px-4 rounded-l sm:rounded-t bg-amber-400 border"
			onClick={() => ToggleMenu("cart")}
			aria-label="View Cart">
			<Icon className="w-10 p-1" />
			<span className="hidden md:inline-block text-xs">CART</span>
		</button>
	);
}
