"use client";
import { useState } from "react";

import ProductCard from "@/components/Product/Card";
import TitleFlexGridViewsButtons from "./components/Buttons";

export default function TitleFlexGridViews({
	title,
	jsonData,
	className = null,
	gridCSS,
	breakpoint = "lg",
	buttonWide,
	buttons,
}) {
	const [whichView, setWhichView] = useState("flex");

	return (
		<div className={`max-w-screen-2xl mx-auto p-2 ${className}`}>
			<ul className={`flex justify-center items-center mb-8`}>
				<li className="">{title && title}</li>
				<li className={`flex ml-auto ${breakpoint}:hidden`}>
					<TitleFlexGridViewsButtons
						setWhichView={setWhichView}
						buttons={buttons}
					/>
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
								buttonWide={buttonWide}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
