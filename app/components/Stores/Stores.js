import Image from "next/image";

import dealersData from "@/data/dealers.json";
import storesData from "@/data/stores.json";
import Stars from "@/components/Stars";

export default function Stores({ className }) {
	const jsonData = [...dealersData, ...storesData];

	return (
		<div className="pb-20">
			<ul>
				<li className="relative min-h-sm">
					<Image
						src="https://i.stack.imgur.com/xYkPu.png"
						alt=""
						fill
						className="object-cover border-2 border-gray-600"
					/>
				</li>
				{jsonData.map((block, i) => {
					return (
						<li key={i} className="border-b">
							<ul className="p-2">
								<li>{block.title}</li>

								<li className="flex">
									Dealer Review:
									<Stars className="ml-1" starSize={12} /> ({block.reviewNum})
								</li>
								<li>{block.street}</li>
								<li>{block.cityState}</li>
								<li>{block.phone}</li>
							</ul>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
