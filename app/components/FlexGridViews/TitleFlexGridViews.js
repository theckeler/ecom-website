"use client";
import { useState } from "react";

import ProductCard from "@/components/Product/Card";
import IconGridView from "@/icons/GridView";
import FlexView from "@/icons/FlexView";

export default function TitleFlexGridViews({
	title,
	jsonData,
	className = null,
	gridCSS,
	breakpoint = "lg",
	buttonWide,
}) {
	const [whichView, setWhichView] = useState("flex");

	const resetBG = (e) => {
		e.currentTarget.parentElement.parentElement
			.querySelectorAll(".reset-views")
			.forEach((e) => {
				e.classList.remove("bg-amber-400");
				e.classList.add("bg-gray-200");
			});
		e.currentTarget
			.querySelector(".reset-views")
			.classList.remove("bg-gray-200");
		e.currentTarget.querySelector(".reset-views").classList.add("bg-amber-400");
	};

	return (
		<div className="max-w-screen-2xl mx-auto p-3">
			<ul
				className={`flex justify-center items-center mb-8 ${breakpoint}:hidden`}>
				<li className="">{title && title}</li>
				<li className="ml-auto">
					<button
						className="w-12 p-1"
						onClick={(e) => {
							resetBG(e);
							setWhichView("flex");
						}}>
						<FlexView className="reset-views flex items-center justify-center w-10 h-10 p-1 rounded-full bg-amber-400" />
					</button>
					<button
						className="w-12 p-1"
						onClick={(e) => {
							resetBG(e);
							setWhichView("grid");
						}}>
						<IconGridView className="reset-views flex items-center justify-center w-10 h-10 p-2 rounded-full bg-gray-200" />
					</button>
				</li>
			</ul>

			<ul className={`${whichView} ${gridCSS}`}>
				{jsonData.map(function (block, i) {
					return (
						<li
							className={`min-w-[250px] ${block.span && "lg:col-span-2"}`}
							key={i}>
							<ProductCard
								block={block}
								className="h-full"
								style={{ backgroundColor: "#ecedee" }}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
