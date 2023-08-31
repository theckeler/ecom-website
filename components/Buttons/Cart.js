"use client";
import Icon from "@/icons/Cart";
import ToggleMenu from "@/functions/toggleMenu";

export default function ButtonsCart({ className, button }) {
	return (
		<button
			className={`flex gap-1 items-center p-1 md:px-4 rounded-l sm:rounded-t bg-amber-400 dark:bg-neutral-800 dark:text-white dark:fill-white border border-r-0 dark:border-neutral-700 ${className}`}
			onClick={() => ToggleMenu("cart")}
			aria-label="View Cart">
			<Icon className={`w-10 p-1`} cartNum={button.cartNum} />
			<span className="hidden md:inline-block text-xs">CART</span>
		</button>
	);
}
