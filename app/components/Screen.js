"use client";
import toggleMenu from "@/functions/toggleMenu";

export default function Screen() {
	return (
		<div
			className="hidden fixed left-0 top-0 z-30 bg-black w-screen h-screen opacity-70"
			id="fixed-screen"
			onClick={() => {
				toggleMenu(null);
			}}
		/>
	);
}
