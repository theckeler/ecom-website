import superToggle from "../Functions/SuperToggle";

import Link from "next/link";
import Image from "next/image";
import Button from "../Buttons/Main";
import IconText from "../Buttons/IconText";
import Stars from "../Stars";
import AddtoCart from "../Icons/AddtoCart";
import Compare from "../Icons/Compare";
import CatAd from "../Ad";

export default function Card({
	product,
	displayButton = true,
	displayMSRP = true,
	className = "",
	displayAvailablity = false,
}) {
	return (
		<div className={`h-full ${!!product.ad && "hidden lg:block"}`}>
			<Link
				href={
					product.slug && !product.ad
						? "/lawn-mowers/riding-lawn-mowers/zero-turn-mowers/" + product.slug
						: "#ClickZeroTurnMowersLink"
				}
				className={`p-3 flex flex-col ${className}`}>
				{!product.ad ? (
					<div className="relative pt-[100%]">
						<Image
							src={product.img}
							alt=""
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				) : (
					<CatAd />
				)}

				<div className="mt-2 font-bold" itemProp="name">
					{product.title}
				</div>

				{!!product.itemNum && (
					<div className="mt-2 text-xs">
						Item#:
						{product.itemNum}
					</div>
				)}

				{!!product.series && <div className="text-xs">{product.series}</div>}

				{!!product.displayPrice && (
					<div className="text-lg font-bold">${product.price}</div>
				)}

				{!!product.displayStars && (
					<div className="flex text-sm">
						<Stars num={5} /> ({product.reviews})
					</div>
				)}

				{!!displayMSRP && (
					<div className="price">
						<meta itemProp="priceCurrency" content="USD" />
						<span className="sales">
							<span className="value" itemProp="price" content=""></span>
							<span className="text-xs text-gray-500">From</span>
							<span className="ml-1 text-xs font-bold">
								${product.price}.00
							</span>
							<span className="ml-1 text-xs text-gray-500">MSRP</span>
						</span>
					</div>
				)}

				{!!displayButton && (
					<div className="mt-auto pt-2">
						<Button
							title={`View ${product.title}`}
							noIcon={true}
							className="w-full p-2 mt-2 text-xs font-bold bg-gray-200 overflow-hidden truncate"
						/>
					</div>
				)}
			</Link>

			{product.addToCart && (
				<ul className="flex items-center mt-4 p-3 border-t">
					<li className="basis-full pr-2">
						<IconText
							title="Add to Cart"
							Icon={() => <AddtoCart className="w-6 mr-1" />}
							className="bg-amber-400 text-sm w-full p-3 font-bold"
						/>
					</li>
					<li className="basis-2/4">
						<IconText
							title="Compare"
							Icon={() => <Compare className="w-6 mr-1" />}
							className="bg-gray-200 text-xs w-full p-3"
							onClick={(e) => {
								superToggle(e, ["bg-gray-200", "bg-green-400"]);
								document.querySelector("#compare").classList.remove("hidden");
								document
									.querySelector("#compare-button")
									.classList.remove("hidden");
							}}
						/>
					</li>
				</ul>
			)}

			{!!displayAvailablity && (
				<div className="mt-2 px-3 pb-4 border-b border-gray-400 lg:border-0">
					{!!product.available && (
						<ul className="mt-2">
							{product.shippingButtons.map(function (button, i) {
								return (
									<li className="flex items-center w-full text-xs mb-1" key={i}>
										<span
											className={`block rounded-full h-4 w-4 mr-2  ${
												button.disabled ? "bg-red-500" : "bg-green-500"
											}`}></span>
										<span className="">{button.title}</span>
										<span className="ml-auto pl-1 block">
											{button.disabled
												? "Unavailable"
												: `${button.availability}`}
										</span>
									</li>
								);
							})}
						</ul>
					)}
				</div>
			)}
		</div>
	);
}
