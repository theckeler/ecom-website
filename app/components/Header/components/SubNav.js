"use client";
import Image from "next/image";
import Link from "next/link";

import Close from "@/icons/Close";
import ChevronLeft from "@/icons/ChevronLeft";
import toggleMenu from "@/functions/toggleMenu";


export default function SubNav({ menuItems }) {
	return (
		menuItems.sub && (
			<ul className="flex flex-col divide-y divide-solid lg:border-0 lg:divide-y-0">
				{menuItems.sub.map((sub, i) => (
					<li className="" key={i}>
						<Link
							href={sub.url}
							className="block p-2 relative z-10"
							onClick={() => {
								toggleMenu(null);
							}}>
							<ul className="flex flex-row items-center">
								{!!sub.img && (
									<li className="w-16">
										<Image src={sub.img} width={200} height={200} alt="" />
									</li>
								)}
								<li className="text-sm ml-2 font-bold">{sub.title}</li>
							</ul>
						</Link>
					</li>
				))}
			</ul>
		)
	);
}
