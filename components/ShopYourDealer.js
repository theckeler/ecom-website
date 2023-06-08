import DealerSelect from "@/addtocart/DealerSelect";
import InputButton from "@/components/InputButton";

export default function ShopYourDealer() {
	return (
		<div className="p-2 lg:p-4 mt-4">
			<ul className="flex flex-col lg:flex-row">
				<li className="lg:basis-8/12">
					<h2 className="text-2xl">Shop Your Dealer:</h2>
				</li>
				<li className="lg:basis-4/12">
					<InputButton
						id="zipcode-postal-code"
						placeholder="44280"
						name="zipcode"
						className="mt-2 lg:mt-0 lg:ml-4"
						classNameButton="bg-gray-300 text-white"
						padding="p-2"
					/>
				</li>
			</ul>

			<p className="text-xs mt-1">
				Donec arcu orci, porttitor in eros aliquam, ultrices convallis magna.
				Nam finibus molestie dolor. Mauris in varius lorem. Mauris nec erat
				neque. Phasellus ut enim velit.
			</p>

			<ul className="mt-2 lg:mt-4 grid grid-cols-1 lg:grid-cols-3 gap-2 lg:divide-x divide-gray-300">
				<li className="">
					<DealerSelect
						dealer="Worcester Sales and Service, Inc."
						miles="22.1"
						street="34200 LORAIN ROAD"
						cityState="NORTH RIDGEVILLE, OH 44039"
						phone="(330) 554-5434"
						id="Worcester"
						reviewNum={44}
						className="text-xs rounded-lg lg:p-3"
						selected
						activeColor="bg-amber-400"
						inactiveColor="bg-gray-200"
						shopYourDealer
					/>
				</li>
				<li className="">
					<DealerSelect
						dealer="Northfield Power Equipment"
						miles="25.0"
						street="49 MEADOW LANE"
						cityState="NORTHFIELD, OH 44067"
						phone="(330) 467-0020"
						reviewNum={67}
						className="text-xs rounded-lg lg:p-3 lg:ml-2"
						id="Northfield"
						activeColor="bg-amber-400"
						inactiveColor="bg-gray-200"
						shopYourDealer
					/>
				</li>
				<li className="">
					<DealerSelect
						dealer="Marshall Equipment Company"
						miles="28.5"
						street="5151 MAYFIELD ROAD"
						cityState="LYNDHURST, OH 44124"
						phone="(440) 442-1846"
						reviewNum={23}
						className="text-xs rounded-lg lg:p-3 lg:ml-2"
						id="Marshall"
						activeColor="bg-amber-400"
						inactiveColor="bg-gray-200"
						shopYourDealer
					/>
				</li>
			</ul>
		</div>
	);
}
