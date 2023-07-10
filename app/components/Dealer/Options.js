import DealerSelect from "app/components/AddCart/DealerSelect";

export default function Options({
	className,
	showAdress,
	inputClass,
	activeColor = "bg-amber-400",
	inactiveColor = "bg-gray-200",
	row = true,
}) {
	return (
		<ul className={`${className}`}>
			<li className="">
				<DealerSelect
					showAdress={showAdress}
					activeColor={activeColor}
					inactiveColor={inactiveColor}
					dealer="Worcester Sales and Service, Inc."
					miles="22.1"
					street="34200 LORAIN ROAD"
					cityState="NORTH RIDGEVILLE, OH 44039"
					phone="(330) 554-5434"
					id="Worcester"
					reviewNum={44}
					className="text-xs lg:p-3"
					selected
					shopYourDealer
				/>
			</li>
			<li className="">
				<DealerSelect
					showAdress={showAdress}
					activeColor={activeColor}
					inactiveColor={inactiveColor}
					dealer="Northfield Power Equipment"
					miles="25.0"
					street="49 MEADOW LANE"
					cityState="NORTHFIELD, OH 44067"
					phone="(330) 467-0020"
					reviewNum={67}
					className={`text-xs lg:p-3 ${row ? "lg:ml-2" : "mt-1"}`}
					id="Northfield"
					shopYourDealer
				/>
			</li>
			<li className="">
				<DealerSelect
					showAdress={showAdress}
					activeColor={activeColor}
					inactiveColor={inactiveColor}
					dealer="Marshall Equipment Company"
					miles="28.5"
					street="5151 MAYFIELD ROAD"
					cityState="LYNDHURST, OH 44124"
					phone="(440) 442-1846"
					reviewNum={23}
					className={`text-xs lg:p-3 ${row ? "lg:ml-2" : "mt-1"}`}
					id="Marshall"
					shopYourDealer
				/>
			</li>
		</ul>
	);
}
