import DealerSelect from "@/components/AddCart/DealerSelect";
import jsonData from "@/data/dealers.json";

export default function MenuDealers({
	className,
	showAdress,
	activeColor = "",
	inactiveColor = "",
}) {
	return (
		<ul className="md:flex text-xs">
			{jsonData.map((block, i) => {
				return (
					<li key={i}>
						<DealerSelect
							{...{
								...block,
								showAdress: false,
								className: "text-black md:text-white",
							}}
						/>
					</li>
				);
			})}
		</ul>
	);
}
