"use client";
import Link from "next/link";
import toggleMenu from "@/functions/toggleMenu";

export default function Screen({ className }) {
	return (
		<div
			className={`grid place-content-center fixed left-0 top-0 z-50 bg-white/70 w-screen h-screen ${className}`}
			//id="fixed-screen"
			onClick={() => {
				toggleMenu(null);
			}}>
			<div className="bg-red-600 text-white text-center font-bold p-16 max-w-md">
				oops... it seems there is no link yet, try this one:
				<Link
					className="bg-black underline p-2 uppercase ml-3 inline-block"
					href="http://localhost:3000/lawn-mowers/riding-lawn-mowers/zero-turn-mowers#top">
					This one
				</Link>
				, or click outside this box to close this warning.
			</div>
		</div>
	);
}
