import Link from "next/link";
import Image from "next/image";

import ButtonMain from "@/buttons/Main";

export default function CategoryCard({
	h2,
	h3,
	p,
	href,
	src,
	className,
	style,
}) {
	const Selector = href !== "#ClickZeroTurnMowersLink" ? Link : "div";
	{
		return (
			<Selector
				href={href}
				className={`flex flex-col p-4 h-full ${className}`}
				style={style}>
				{!!src && (
					<div className="relative pt-[40%] lg:pt-[50%]">
						<Image src={src} alt="" fill className="object-cover" />
					</div>
				)}
				<h2 className="text-xl font-bold">{h2}</h2>
				{!!h3 && <h3 className="text-lg mt-2">{h3}</h3>}
				<p className="mt-4 text-xs lg:text-sm lg:leading-6">{p}</p>
				<div className="mt-auto">
					<ButtonMain
						title={`Shop ${h2}`}
						className="w-full mt-4 p-2 flex justify-center items-center bg-amber-400 text-xs lg:text-sm"
						noButton
					/>
				</div>
			</Selector>
		);
	}
}
