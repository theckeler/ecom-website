import Button from "./Buttons/Main";
import Image from "next/image";

export default function CatAd() {
	return (
		<div className="bg-white p-2 lg:p-4 rounded h-full border border-gray-400">
			<Image
				src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v2d2985a90f92210137904004bd415f8c604159aa/financing-view-all/cub-cadet-credit-card.png"
				alt=""
				width={200}
				height={125}
				className="mx-auto w-full"
			/>
			<ul className="flex items-center mt-4 bg-amber-400 rounded-md p-4">
				<li className="text-7xl mr-1">☜</li>
				<li>
					<h2 className="text-2xl font-bold">
						Hey, buy this ZT1 42 for $101/mo
					</h2>
				</li>
			</ul>
			<div className="mt-4 text-center font-bold text-xl">
				<div>
					0% APR<sup>5</sup>
				</div>
				<div>36/mo with $125 Promo Fee.</div>
				<div>Total: $3,636.00</div>
			</div>

			<p className="mt-2 text-xs leading-6">
				Quisque eu euismod nulla, quis aliquam leo. Pellentesque ac mollis
				neque. Etiam ultricies sed massa sed consectetur. Ut id est nec neque
				venenatis ullamcorper ac ut mauris.{" "}
				<span href="#top" className="underline">
					See Details
				</span>
			</p>

			<Button
				title="Apply Now"
				className="bg-gray-900 rounded p-2 mt-2 text-white w-full"
				noIcon={true}
			/>
		</div>
	);
}
