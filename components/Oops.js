"use client";
import Link from "next/link";

export default function Oops({ className }) {
	const oopsList = [
		{
			tile: "Home",
			url: "/",
		},
		{
			tile: "Category Page (/lawn-mowers/)",
			url: "/lawn-mowers/",
		},
		{
			tile: "Category Page (/lawn-mowers/riding-lawn-mowers/)",
			url: "/lawn-mowers/riding-lawn-mowers/",
		},
		{
			tile: "PLP Page",
			url: "/lawn-mowers/riding-lawn-mowers/zero-turn-mowers#top",
		},
		{
			tile: "PDP Page",
			url: "/lawn-mowers/riding-lawn-mowers/zero-turn-mowers/1",
		},
		{
			tile: "Articles Page",
			url: "/articles/",
		},
		{
			tile: "Article Page",
			url: "/articles/0/",
		},
	];

	return (
		<div className="font-bold p-16">
			Oops... it seems there is no link yet, try this one:
			<ul className="mt-4">
				<li>
					{oopsList.map(function (block, i) {
						return (
							<Link
								key={i}
								className="bg-amber-200 underline p-2 uppercase block mb-2"
								href={block.url}>
								{block.tile}
							</Link>
						);
					})}
				</li>
			</ul>
		</div>
	);
}
