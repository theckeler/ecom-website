import jsonData from "@/data/stores.json";

export default function Stores({ className }) {
	return (
		<div className="pb-20">
			<ul className="">
				{jsonData.map((menu, i) => {
					return (
						<li key={i} className="">
							sadasd
						</li>
					);
				})}
			</ul>
		</div>
	);
}
