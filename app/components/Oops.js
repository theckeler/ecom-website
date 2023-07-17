"use client";
import Link from "next/link";
import toggleMenu from "@/functions/toggleMenu";

export default function Oops({ className }) {
	return (
		<div className="font-bold p-16">
			Oops... it seems there is no link yet, try this one:
			<ul className="mt-4">
				<li>
					<Link
						className="bg-amber-200 underline p-2 uppercase block"
						href="/lawn-mowers/riding-lawn-mowers/zero-turn-mowers#top">
						/lawn-mowers/riding-lawn-mowers/zero-turn-mowers
					</Link>
				</li>
			</ul>
		</div>
	);
}
