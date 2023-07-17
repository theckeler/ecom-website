import jsonData from "@/data/stores.json";

export default function Stores({ className }) {
	return (
		<div className="pb-20">
			<ul>
				{jsonData.map((menu, i) => {
					return <li key={i}>sadasd</li>;
				})}
			</ul>
		</div>
	);
}
