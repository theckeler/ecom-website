"use client";
import { useState, Fragment } from "react";

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
	limitNum = 8,
	itemNum = null,
	card = { className: "bg-gray-200" },
}) {
	const [whichView, setWhichView] = useState("flex");
	if (itemNum === null) {
		limitNum = limitNum - 1;
	}

	return (
		<div className={`max-w-screen-2xl mx-auto p-2 ${className}`}>
			<ul className={`flex justify-center items-center`}>
				<li>{title && title}</li>
				<li className={`flex ml-auto ${breakpoint}:hidden mb-4 lg:mb-0`}>
					<TitleFlexGridViewsButtons
						setWhichView={setWhichView}
						buttons={buttons}
					/>
				</li>
			</ul>

			{jsonData && (
				<ul className={`snap-x snap-mandatory ${whichView} ${gridCSS}`}>
					{jsonData.map(function (block, i) {
						return (
							<Fragment key={i}>
								{i !== itemNum && i <= limitNum && (
									<li
										className={`snap-center min-w-[250px] ${
											block.span && "lg:col-span-2"
										}`}
										key={i}>
										<ProductCard
											block={block}
											className={`h-full ${card.className}`}
											//style={{ backgroundColor: "#ecedee" }}
											buttonWide={buttonWide}
										/>
									</li>
								)}
							</Fragment>
						);
					})}
				</ul>
			)}
		</div>
	);
}
