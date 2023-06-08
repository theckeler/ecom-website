import Image from "next/image";
import ButtonEdit from "@/buttons/Edit";
import Button from "@/buttons/Main";
import DealerSelect from "./DealerSelect";

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
						}}>
						List View
					</button>
				</li>
				<li className="basis-6/12">
					<button
						className="block p-2 w-full toggle-button"
						onClick={(e) => {
							swapInfo(e, "dealer-map");
						}}>
						Map View
					</button>
				</li>
			</ul>

			<div className="hidden" id="dealeredit">
				<div className="p-4 bg-amber-200 rounded-md mt-4">
					<h3 className="font-bold mb-3">Find a Dealer</h3>

					<ul className="flex items-center w-full">
						<li className="basis-full">
							<input
								required=""
								type="text"
								className="p-3 text-sm w-full rounded-l-lg"
								id="zipcode-postal-code"
								placeholder="Enter Zipcode"
								name="zipcode"
							/>
						</li>
						<li className="basis-1/4">
							<Button
								title="Next"
								className="flex items-center justify-center p-3 text-sm font-bold bg-amber-400 rounded-r-lg"
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
