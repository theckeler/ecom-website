"use client";
import Link from "next/link";

import Close from "@/icons/Close";
import ExpandMore from "@/icons/ExpandMore";

export default function Nav({ menuItems }) {
	return (
		<div id="nav" className="hidden lg:block w-full">
			<ul className="lg:flex fixed lg:relative z-50 left-0 top-0 h-full w-full md:max-w-xl lg:max-w-fit bg-white lg:bg-transparent">
				<li className="lg:hidden h-12">
					<button
						onClick={() => {
							document.querySelector("#nav").classList.toggle("hidden");
						}}
						className="w-full">
						<Close className="h-12 ml-auto" />
					</button>
				</li>
				{menuItems.map((menu, i) => (
					<li
						className="relative group p-2"
						key={i}
						id={menu.slug}
						onClick={() => {
							document
								.querySelector(`#${menu.slug}`)
								.querySelector(`#sub-nav`)
								.classList.toggle("hidden");
						}}>
						<Link
							href={menu.url}
							className="py-3 px-2 w-full font-bold text-black lg:text-white lg:text-sm  flex"
							onClick={() => {
								//document.querySelector("#nav").classList.toggle("hidden");
							}}>
							<span>{menu.title}</span>
							{menu.sub && (
								<span className="ml-auto sm:ml-1">
									<ExpandMore className="w-6 fill-black lg:fill-white" />
								</span>
							)}
						</Link>
						{menu.sub && (
							<>
								<div
									className="hidden lg:absolute top-full lg:bg-amber-400 min-w-[26em] p-2"
									id="sub-nav">
									<ul className="text-sm">
										<li>
											<a href="">Lorem ipsum dolor sit amet</a>
										</li>
										<li>
											<a href="">Mauris ac arcu ipsum</a>
										</li>
										<li>
											<a href="">Vestibulum molestie neque ac tellus pretium</a>
										</li>
										<li>
											<a href="">Phasellus dolor tortor</a>
										</li>
										<li>
											<a href="">Nulla non erat vitae enim bibendum</a>
										</li>
									</ul>
								</div>
							</>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}
