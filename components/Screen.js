"use client";
import ToggleMenu from "@/components/Functions/toggleMenu";

export default function Screen({ className, display = false }) {
	return (
		<div
			className={`${
				!display && "hidden"
			} fixed z-20 top-0 left-0 w-full h-full bg-white/70 dark:bg-black/70 backdrop-blur-sm ${className}`}
			id="screen"
			onClick={() => {
				ToggleMenu(null);
			}}
		/>
	);
}
