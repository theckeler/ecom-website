"use client";
import ToggleMenu from "@/components/Functions/ToggleMenu";

export default function Screen({ className }) {
	return (
		<div
			className="hidden fixed z-20 top-0 left-0 w-full h-full bg-white/70 backdrop-blur-sm"
			id="screen"
			onClick={() => {
				ToggleMenu(null);
			}}
		/>
	);
}
