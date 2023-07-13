import React from "react";
import Image from "next/image";

import jsonData from "./data/data.json";

import currency from "@/functions/Currency";
import ToolTip from "@/components/ToolTip";
import FormQuanity from "@/form/Quanity";
import CartButton from "./components/Button";

export default function Cart({ className }) {
	return (
		<div>
			<ul className="grid grid-flow-row gap-2">
				{jsonData.map(function (block, i) {
					return (
						<React.Fragment key={i}>
							<li className="min-w-max relative">
								<Image
									src={block.img.src}
									fill
									className="max-h-full object-cover border"
									alt=""
								/>
							</li>

							<li className="col-start-2">
								<ul>
									<li className="font-bold">{block.title}</li>
									<li className="text-sm">{block.small}</li>
									{block.version && (
										<li className="text-sm">Version: {block.version}</li>
									)}
									<li>
										<span className="text-sm font-bold">
											{currency(block.price)}
										</span>
										<span className="text-xs">/each</span> <ToolTip copy="" />
									</li>
								</ul>
							</li>

							<li className="col-start-1 text-xs text-center self-center">
								{block.itemNum}
							</li>
							<li className="col-start-2">
								<ul className="flex items-center gap-2">
									<li>
										<FormQuanity {...{ quantity: block.quantity }} />
									</li>
									<li>
										<button className="text-xs">Remove product</button>
									</li>
								</ul>
							</li>
							<li className="col-start-3 text-right self-center">
								{currency(block.price * block.quantity)}
							</li>

							<li className="col-start-2 col-span-2">
								<ul className="grid grid-cols-3 gap-1">
									<li>
										<CartButton
											{...{
												title: "Dealer Delivery",
												small: "Ships in 8-10 days",
												shipping: block.shipping.dealerDelivery,
												active:
													block.active === "dealerDelivery" ? true : false,
											}}
										/>
									</li>
									<li>
										<CartButton
											{...{
												title: "Dealer Pick-Up",
												small: "Pick-Up in 2-5 days",
												shipping: block.shipping.pickup,
												active: block.active === "pickup" ? true : false,
											}}
										/>
									</li>
									<li>
										<CartButton
											{...{
												title: "Ship to Home",
												small: "Ships in 12-18 days",
												shipping: block.shipping.home,
												active: block.active === "home" ? true : false,
											}}
										/>
									</li>
								</ul>
							</li>

							<li className="col-start-1 col-span-3 p-4">
								<hr />
							</li>
						</React.Fragment>
					);
				})}
			</ul>
		</div>
	);
}
