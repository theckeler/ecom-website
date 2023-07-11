import Image from "next/image";

import Stars from "app/components/Stars";

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
	activeColor = "",
	inactiveColor = "",
	showAdress = true,
}) {
	return (
		<div
			className={`dealer-select group flex relative p-2  ${
				!!selected ? activeColor : inactiveColor
			} ${className}`}
			onChange={(e) => {
				document.querySelectorAll(".dealer-select").forEach((e) => {
					e.classList.remove("active");
				});
				e.currentTarget.classList.add("active");

				document.querySelectorAll(".dealer-select-address").forEach((e) => {
					e.classList.add("hidden");
				});
				e.currentTarget
					.querySelector(".dealer-select-address")
					.classList.remove("hidden");

				document.querySelectorAll(".dealer-select").forEach((e) => {
					e.classList.remove(activeColor);
					e.classList.add(inactiveColor);
					if (e.classList.contains("active")) {
						e.classList.remove(inactiveColor);
						e.classList.add(activeColor);
					}
				});
			}}>
			<ul className="h-full w-full flex relative ">
				<li>
					<input
						type="radio"
						name="inventory"
						id={id}
						className="appearance-none mr-2 checked:bg-gray-800 ring-gray-600 ring-offset-2 ring-1 rounded-full p-1"
						defaultChecked={selected}
					/>
				</li>
				<li className="w-full text-left">
					<div className="font-bold truncate md:max-w-[120px] lg:max-w-none">
						{dealer}
					</div>
					{/* {showAdress && ( */}
					<ul className="flex flex-col md:hidden group-hover:block relative md:absolute z-50 p-2 bg-white text-black">
						<li className="flex">
							Dealer Review:
							<Stars className="ml-1" starSize={12} /> ({reviewNum})
						</li>
						<li>{street}</li>
						<li>{cityState}</li>
						<li>{phone}</li>
					</ul>
					{/* )} */}
				</li>
				{showAdress && <li className="ml-auto">{miles}mi</li>}
			</ul>
			<label
				htmlFor={id}
				className="block absolute top-0 left-0 w-full h-full opacity-0 z-10 cursor-pointer"
			/>
		</div>
	);
}
