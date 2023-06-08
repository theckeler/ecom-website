import Image from "next/image";

import Stars from "@/components/Stars";

export default function DealerSelect({
	dealer,
	miles,
	street,
	cityState,
	phone,
	selected = false,
	id,
	reviewNum,
	className = null,
	shopYourDealer = false,
	activeColor = "bg-amber-100",
	inactiveColor = "bg-white",
}) {
	return (
		<div
			className={`dealer-select group flex relative p-2 ${
				!!selected ? activeColor : inactiveColor
			} ${className}`}
			onChange={(e) => {
				document.querySelectorAll(".dealer-select").forEach((e) => {
					e.classList.remove("active");
				});
				e.currentTarget.classList.add("active");

				//if (!shopYourDealer) {
				document.querySelectorAll(".dealer-select-address").forEach((e) => {
					e.classList.add("hidden");
				});
				e.currentTarget
					.querySelector(".dealer-select-address")
					.classList.remove("hidden");
				//}

				document.querySelectorAll(".dealer-select").forEach((e) => {
					e.classList.remove(activeColor);
					e.classList.add(inactiveColor);
					if (e.classList.contains("active")) {
						e.classList.remove(inactiveColor);
						e.classList.add(activeColor);
					}
				});
			}}>
			<ul className="z-0 h-full w-full flex">
				<li>
					<input
						type="radio"
						name="inventory"
						id={id}
						className="appearance-none mr-2 checked:bg-gray-800 ring-gray-600 ring-offset-2 ring-1 rounded-full p-1"
						defaultChecked={selected}
					/>
				</li>
				<li className="w-full">
					{/* <ul
						className={`flex flex-col ${
							!!shopYourDealer && "xl:items-center xl:flex-row"
						}`}> */}
					<ul className={`flex flex-col`}>
						<li className="font-bold">{dealer}</li>
						{/* <li
							className={`flex items-center text-xs mt-1 ${
								!!shopYourDealer && "xl:mt-0 xl:ml-2"
							}`}> */}
						<li className={`flex items-center text-xs mt-1 xl:mt-0 xl:ml-2"`}>
							<span className="md:hidden">Dealer Review:</span>{" "}
							<Stars className="" starSize={12} /> ({reviewNum})
						</li>
					</ul>

					{/* <div className="flex items-center text-xs pl-4">
						Dealer Review: <Stars className="" starSize={12} /> ({reviewNum})
					</div> */}

					{/* <div
						className={`dealer-select-address text-xs mt-1 ${
							!selected && !shopYourDealer && "hidden"
						}`}> */}
					<div
						className={`dealer-select-address text-xs mt-1 ${
							!selected && "hidden"
						}`}>
						{street}
						<br />
						{cityState}
						<br />
						{phone}
					</div>
				</li>
				<li className="ml-auto">{miles}mi</li>
			</ul>
			<label
				htmlFor={id}
				className="block absolute top-0 left-0 w-full h-full opacity-0 z-10 cursor-pointer"
			/>
		</div>
	);
}
