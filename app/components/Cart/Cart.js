import React from "react";
import Image from "next/image";

import jsonData from "./data/data.json";

import currency from "@/functions/Currency";
import ToolTip from "@/components/ToolTip";
import FormQuanity from "@/form/Quanity";

export default function Cart({ className }) {
	return (
		<div>
			<ul className="grid grid-flow-row gap-2">
				<li></li>
				<li></li>
				<li className="font-bold col-start-3 text-center">
					<label className="" htmlFor="quantity">
						Quantity
					</label>
				</li>
				<li className="font-bold col-start-4 text-center">Total</li>

				{jsonData.map(function (block, i) {
					return (
						<React.Fragment key={i}>
							<li className="row-span-2 min-w-max">
								<Image
									src={block.img.src}
									width={block.img.width}
									height={block.img.height}
									alt=""
								/>
							</li>
							<li className="font-bold col-start-2 self-center">
								{block.title}
							</li>
							<li className="col-start-3">
								<FormQuanity {...{ quantity: block.quantity }} />
							</li>
							<li className="col-start-4 text-right self-center">
								{currency(block.price * block.quantity)}
							</li>

							<li className="col-start-2">
								<ul>
									<li className="text-sm">{block.small}</li>
									{block.version && (
										<li className="text-sm">Version: {block.version}</li>
									)}
									<li className="text-xs">Item #: {block.itemNum}</li>
									<li>
										{currency(block.price)} <ToolTip copy="" />
									</li>
								</ul>
							</li>

							<li className="col-start-2 col-span-3">
								<ul className="grid grid-cols-3">
									<li>dealerDelivery</li>
									<li>pickup</li>
									<li>home</li>
								</ul>
							</li>
							<li className="col-start-1 col-span-4 p-4">
								<hr />
							</li>
						</React.Fragment>
					);
				})}
			</ul>
		</div>
	);
}
