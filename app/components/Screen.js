"use client";
import toggleMenu from "@/functions/toggleMenu";

export default function Screen() {
	return (
		<div
			className="w-0 h-0 hidden fixed left-0 top-0 z-0 md:z-30 bg-black md:w-screen md:h-screen opacity-70"
			id="fixed-screen"
			onClick={() => {
				toggleMenu(null);
			}}
		/>
	);
}
