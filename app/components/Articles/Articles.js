"use client";
import { Fragment } from "react";

import articlesData from "@/data/articles.json";
import ProductCard from "@/components/Product/Card";

export default function Articles({
	className,
	itemNum = null,
	limitNum = 8,
	card = { className: "bg-gray-200", noImg: false },
}) {
	if (itemNum === null) {
		limitNum = limitNum - 1;
	}

	return (
		<ul
			className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 pb-6 lg:pb-0 overflow-x-auto overflow-scrollbar ${className}`}>
			{articlesData.map(function (block, i) {
				return (
					<Fragment key={i}>
						{i !== itemNum && i <= limitNum && (
							<li className="min-w-[250px] ">
								<ProductCard
									block={block}
									className={`h-full ${card.className}`}
									buttonWide={true}
									noImg={card.noImg}
								/>
							</li>
						)}
					</Fragment>
				);
			})}
		</ul>
	);
}
