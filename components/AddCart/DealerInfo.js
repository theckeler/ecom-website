import Image from "next/image";
import ButtonEdit from "@/components/Buttons/Edit";
import DealerSelect from "./DealerSelect";
import InputButton from "@/components/Form/InputButton";
import jsonData from "@/data/dealers.json";

export default function DealerInfo() {
	const swapInfo = (e, which = "dealer-list") => {
		document.querySelectorAll(".dealer-view").forEach((block) => {
			block.classList.add("hidden");
		});
		document.querySelectorAll(".toggle-button").forEach((block) => {
			block.classList.remove("bg-amber-200");
		});
		document.querySelector(`#${which}`).classList.remove("hidden");
		e.currentTarget.classList.add("bg-amber-200");
	};

	return (
		<div>
			<p className="mb-2 text-xs">
				You&rsquo;re shopping available inventory from:
			</p>

			<ul className="grid grid-cols-[1fr_50px] gap-1">
				<li className="text-sm">
					<ul className="dealer-view" id="dealer-list">
						<li>
							<DealerSelect
								dealer="Worcester Sales and Service, Inc."
								miles="22.1"
								street="34200 LORAIN ROAD"
								cityState="NORTH RIDGEVILLE, OH 44039"
								phone="(330) 554-5434"
								id="Worcester"
								className="text-black"
								reviewNum={44}
								selected
							/>
						</li>
						<li className="mt-2">
							<DealerSelect
								dealer="Northfield Power Equipment"
								miles="25.0"
								street="49 MEADOW LANE"
								cityState="NORTHFIELD, OH 44067"
								phone="(330) 467-0020"
								reviewNum={67}
								id="Northfield"
								className="text-black"
							/>
						</li>
						<li className="mt-2">
							<DealerSelect
								dealer="Marshall Equipment Company"
								miles="28.5"
								street="5151 MAYFIELD ROAD"
								cityState="LYNDHURST, OH 44124"
								phone="(440) 442-1846"
								reviewNum={23}
								id="Marshall"
								className="text-black"
							/>
						</li>
					</ul>
					<div id="dealer-map" className="hidden dealer-view relative min-h-xs">
						<Image
							src="https://www.google.com/maps/d/thumbnail?mid=1PnZbJHczAGCMhrJalaRQ8AcKnS8&hl=en"
							alt=""
							fill
							className="object-cover"
						/>
					</div>
				</li>
				<li className="flex justify-end">
					<ButtonEdit
						addClick={() => {
							document.querySelectorAll("#dealeredit").forEach((block) => {
								block.classList.toggle("hidden");
							});
						}}
					/>
				</li>
			</ul>

			<ul className="flex border-t">
				<li className="basis-6/12">
					<button
						className="block p-2 w-full bg-amber-200 toggle-button"
						onClick={(e) => {
							swapInfo(e, "dealer-list");
						}}
						aria-label="List View">
						List View
					</button>
				</li>
				<li className="basis-6/12">
					<button
						className="block p-2 w-full toggle-button"
						onClick={(e) => {
							swapInfo(e, "dealer-map");
						}}
						aria-label="Map View">
						Map View
					</button>
				</li>
			</ul>

			<div className="hidden" id="dealeredit">
				<div className="p-4 bg-amber-200 mt-4">
					<h3 className="font-bold mb-3">Find a Dealer</h3>

					<InputButton
						{...{
							className: null,
							padding: "p-3",
							input: {
								id: "zipcode-postal-code",
								placeholder: "Enter Zipcode",
								name: "zipcode",
								className: "",
							},
							button: {
								title: "Next",
								ariaLabel: null,
								className: "bg-amber-400",
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
}
