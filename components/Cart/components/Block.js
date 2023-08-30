import React from "react";
import Image from "next/image";

import ToolTip from "@/components/ToolTip";
import FormQuanity from "@/form/Quanity";
import CartButton from "./Button";
import currency from "@/functions/Currency";

export default function CartBlock({ block, i }) {
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

			<li className="col-span-2">
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
					<li className="text-xs">{block.itemNum}</li>
				</ul>
			</li>

			<li className="col-span-2">
				<ul className="flex items-center gap-2">
					<li>
						<FormQuanity {...{ quantity: block.quantity }} />
					</li>
					<li>
						<button className="text-xs h-12 w-12 md:w-fit flex items-center justify-center bg-neutral-200 rounded-full md:rounded px-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 -960 960 960">
								<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
							</svg>
							<span className="hidden md:block">Remove</span>
						</button>
					</li>
				</ul>
			</li>
			<li className="text-right self-center">
				{currency(block.price * block.quantity)}
			</li>

			<li className="col-span-full">
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

			<li className="py-4 col-span-full">
				<hr className="h-px bg-gray-500 border-0" />
			</li>
		</React.Fragment>
	);
}
