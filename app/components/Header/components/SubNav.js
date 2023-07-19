"use client";
import Image from "next/image";
import Link from "next/link";

// import Close from "@/icons/Close";
// import ChevronLeft from "@/icons/ChevronLeft";
import ToggleMenu from "@/components/Functions/toggleMenu";

export default function SubNav({ menuItems }) {
	return (
		menuItems && (
			<ul className="divide-y divide-solid lg:border-0 pb-8 lg:pb-0">
				{menuItems.map((sub, i) => (
					<li key={i}>
						<Link
							href={sub.url}
							className="block p-2 relative z-10"
							onClick={() => {
								ToggleMenu(null);
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
