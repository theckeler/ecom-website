"use client";
import Image from "next/image";
import Link from "next/link";

import Close from "@/icons/Close";
import ChevronLeft from "@/icons/ChevronLeft";
import toggleMenu from "@/functions/toggleMenu";

export default function SubNav({ menuItems }) {
	return (
		<>
			{menuItems.map((menu, i) => {
				return (
					menu.sub && (
						<div
							className="hidden w-full popup-item max-w-screen-2xl mx-auto"
							key={i}
							id={`${menu.slug}-sub`}>
							<ul className="lg:flex flex-col fixed lg:relative z-50 lg:z-auto left-0 top-0 h-full w-full md:max-w-xl lg:max-w-full bg-white lg:bg-transparent">
								<li className="lg:hidden">
									<ul className="w-100 flex items-center w-100">
										<li className="w-100 grow">
											<button
												className="p-4 block w-100"
												onClick={(e) => {
													toggleMenu("main-nav");
												}}
												aria-label={`Back to ${menu.title}`}>
												<ul className="font-bold flex items-center">
													<li className="w-10">
														<ChevronLeft />
													</li>
													<li>{menu.title}</li>
												</ul>
											</button>
										</li>
										<li className="ml-auto w-12">
											<button
												onClick={() => {
													toggleMenu(null);
												}}
												className="w-full"
												aria-label="Close">
												<Close className="h-12 " />
											</button>
										</li>
									</ul>
								</li>
								<li>
									<ul className="flex flex-col lg:flex-row divide-y divide-solid border-t border-b lg:border-0">
										{menu.sub &&
											menu.sub.map((sub, i) => (
												<li className="" key={i}>
													<Link
														href={sub.url}
														className="block p-2 relative z-10"
														onClick={() => {
															toggleMenu(null);
														}}>
														<ul className="flex flex-row lg:flex-col items-center">
															{!!sub.img && (
																<li className="w-16">
																	<Image
																		src={sub.img}
																		width={200}
																		height={200}
																		alt=""
																	/>
																</li>
															)}
															<li className="text-sm lg:text-xs ml-2 lg:ml-0 lg:text-center font-bold">
																{sub.title}
															</li>
														</ul>
													</Link>
												</li>
											))}
									</ul>
								</li>
							</ul>
						</div>
					)
				);
			})}
		</>
	);
}
