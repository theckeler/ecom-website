import Stars from "@/components/Stars";

export default function DealerSelect({
	title,
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
			className={`dealer-select group flex relative z-0 p-2  ${
				!!selected ? activeColor : inactiveColor
			} ${className}`}>
			<ul className="h-full w-full flex gap-2 relative z-0">
				<li>
					<input
						type="radio"
						name="inventory"
						id={id}
						className="appearance-none checked:bg-gray-800 ring-gray-600 ring-offset-2 ring-1 rounded-full p-1"
						defaultChecked={selected}
					/>
				</li>
				<li className="w-full text-left">
					<div
						className={`font-bold ${
							!showAdress && "truncate max-w-[120px] 2xl:max-w-none"
						}`}>
						{title}
					</div>

					<ul
						className={`px-2 bg-white text-black text-xs ${
							!showAdress && "flex flex-col md:hidden relative z-10 py-2"
						}`}>
						<li className="flex">
							Dealer Review:
							<Stars className="ml-1" starSize={12} /> ({reviewNum})
						</li>
						<li>{street}</li>
						<li>{cityState}</li>
						<li>{phone}</li>
					</ul>
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
