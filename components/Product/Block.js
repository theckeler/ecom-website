import Card from "@/cards/ProductCard";
import ScrollButton from "@/buttons/Scroll";

export default function ProductBlock({ products }) {
	return (
		<div className="group/buttons relative" id="related-text">
			<ScrollButton
				buttonType="back"
				rotate={true}
				className="left-0 -translate-x-1/4"
				onClick={(e) => {
					document.querySelector("#related-container").scrollTo({
						top: 0,
						left: -document
							.querySelector("#related-scroll")
							.getBoundingClientRect().width,
						behavior: "smooth",
					});
				}}
			/>

			<ScrollButton
				buttonType="forward"
				className="right-0 translate-x-1/4"
				onClick={(e) => {
					document.querySelector("#related-container").scrollTo({
						top: 0,
						left: document
							.querySelector("#related-scroll")
							.getBoundingClientRect().width,
						behavior: "smooth",
					});
				}}
			/>

			<div
				className="mb-6 overflow-scrollbar overflow-x-auto snap-x py-2 flex"
				id="related-container">
				{products.map(function (product, i) {
					return (
						<div
							key={i}
							className="p-2 snap-center"
							style={{ minWidth: "240px" }}>
							<Card
								key={i}
								{...{ product }}
								className="snap-center border lg:hover:bg-gray-300 h-full"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
