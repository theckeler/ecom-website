"use client";
import Image from "next/image";

import dealersData from "@/data/dealers.json";
import storesData from "@/data/stores.json";
import Stars from "@/components/Stars";
import InputButton from "@/components/InputButton";
import IconMyLocation from "../Icons/MyLocation";

export default function Stores({ className }) {
	const jsonData = [...dealersData, ...storesData];

	const filters = [
		{ title: "Utility Vehicles", slug: "UTV" },
		{ title: "Professional Products", slug: "Professional" },
		{ title: "Snow Blowers", slug: "Snow" },
		{ title: "Robotic Mowers", slug: "Robotic" },
		{ title: "Residential Products", slug: "Residential" },
	];

	return (
		<div className="pb-20">
			<ul>
				<li className="text-xs mb-4 bg-amber-400 p-2">
					Please call ahead to your preferred store to confirm product
					availability and to find out if they have modified store hours or are
					temporarily closed.
				</li>
				<li className="mb-4">
					<ul className="flex flex-col md:flex-row gap-2 w-full">
						<li className="w-10">
							<button className="flex text-xs text-center w-full">
								<IconMyLocation className="min-w-fit w-10 max-w-full" />
								<span className="md:hidden">Use My Location</span>
							</button>
						</li>
						<li>
							<select className="h-full border-2 border-amber-400 py-2 px-3 w-full">
								<option>15 Mile Radius</option>
								<option>30</option>
								<option>50</option>
								<option>100</option>
								<option>300</option>
							</select>
						</li>
						<li className="grow">
							<InputButton
								{...{
									className: "h-full",
									padding: "p-2",
									input: {
										id: "zip-code",
										placeholder: "Zip Code",
										name: "zip-code",
										className: "border-amber-400 border-2 h-full",
									},
									button: {
										title: "Find Stores",
										ariaLabel: null,
										className: "bg-amber-400 text-black",
									},
								}}
							/>
						</li>
					</ul>
				</li>
				<li className="text-xs mb-4 p-2">
					In addition to delivery options offered by The Home Depot and Tractor
					Supply, there are two options availabe to you on cubcadet.com in order
					to provide safe and seamless access of Cub Cadet Product: Dealer
					Delivery or Pick-Up. Learn more.
				</li>
				<li className="text-sm mb-4 p-2">
					<strong>Refine Your Search (Select One or Many)</strong>
					<ul className="flex flex-wrap gap-1 mt-2">
						{filters.map((block, i) => {
							return (
								<li className="" key={i}>
									<button
										className="px-1 py-2 border"
										onClick={(e) => {
											e.currentTarget.classList.toggle("bg-amber-400");
										}}>
										{block.title}
									</button>
								</li>
							);
						})}
					</ul>
				</li>
				<li className="relative min-h-sm mb-4">
					<Image
						src="https://i.stack.imgur.com/xYkPu.png"
						alt=""
						fill
						className="object-cover border-2 border-gray-600"
					/>
				</li>
				<li className="font-bold mb-1 py-4">
					There are 11 stores within 15 miles
				</li>
				{jsonData.map((block, i) => {
					return (
						<li key={i} className="border-t py-4">
							<ul>
								<li className="font-bold">{block.title}</li>
								<li className="flex">
									Dealer Review:
									<Stars className="ml-1" starSize={12} /> ({block.reviewNum})
								</li>
								<li>{block.street}</li>
								<li>{block.cityState}</li>
								<li>{block.phone}</li>
							</ul>
							<div className="flex flex-wrap gap-2 mt-4">
								{block.make && (
									<button className="p-2 border text-sm">Make my store</button>
								)}
								{block.shop && (
									<button className="p-2 border text-sm">
										Shop this store
									</button>
								)}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
