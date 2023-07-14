import DealerSelect from "app/components/AddCart/DealerSelect";
import jsonData from "@/data/dealers.json";

export default function Options({
	className,
	showAdress,
	activeColor = "",
	inactiveColor = "",
}) {
	return (
		<ul className="md:flex text-xs">
			{jsonData.map((block, i) => {
				return (
					<li key={i} className="">
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
