import React from "react";
import Image from "next/image";

import ToolTip from "@/components/ToolTip";
import FormQuanity from "@/form/Quanity";
import CartButton from "./Button";
import currency from "@/functions/Currency";

export default function CartBlock({ className, block, i }) {
	return (
		<React.Fragment key={i}>
			<li className="min-w-max min-h-[8em] relative">
				<Image
					src={block.img.src}
					fill
					className="object-contain border p-1"
					alt=""
				/>
			</li>

			<li className="sm:col-start-2">
				<ul>
					<li className="font-bold">{block.title}</li>
					<li className="text-sm">{block.small}</li>
					{block.version && (
						<li className="text-sm">Version: {block.version}</li>
					)}
					<li>
						<span className="text-sm font-bold">{currency(block.price)}</span>
						<span className="text-xs">/each</span> <ToolTip copy="" />
					</li>
				</ul>
			</li>

			<li className="sm:col-start-1 col-span-2 sm:col-span-1 text-xs sm:text-center self-center">
				{block.itemNum}
			</li>
			<li className="col-start-1 sm:col-start-2">
				<ul className="flex items-center gap-2">
					<li>
						<FormQuanity {...{ quantity: block.quantity }} />
					</li>
					<li>
						<button className="text-xs h-12">Remove product</button>
					</li>
				</ul>
			</li>
			<li className="col-start-2 sm:col-start-3 text-right self-center">
				{currency(block.price * block.quantity)}
			</li>

			<li className="sm:col-start-2 col-span-2">
				<ul className="grid grid-cols-3 gap-1">
					<li>
						<CartButton
							{...{
								title: "Dealer Delivery",
								small: "Ships in 8-10 days",
								shipping: block.shipping.dealerDelivery,
								active: block.active === "dealerDelivery" ? true : false,
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

			<li className="col-start-1 col-span-2 sm:col-span-3 py-4">
				<hr className="h-px bg-gray-500 border-0" />
			</li>
		</React.Fragment>
	);
}
