"use client";

export default function TitleFlexGridViewsButtons({
	className = null,
	setWhichView,
	buttons,
}) {
	const resetBG = (e) => {
		e.currentTarget.parentElement.parentElement
			.querySelectorAll(".reset-views")
			.forEach((e) => {
				e.classList.remove("bg-amber-400");
				e.classList.add("bg-gray-200");
			});
		e.currentTarget
			.querySelector(".reset-views")
			.classList.remove("bg-gray-200");
		e.currentTarget.querySelector(".reset-views").classList.add("bg-amber-400");
	};

	return (
		<>
			{buttons.map(function (block, i) {
				return (
					<button
						className={`"w-12 p-1  "${block.className}`}
						onClick={(e) => {
							resetBG(e);
							setWhichView(block.whatView);
						}}
						key={i}
						aria-label={`View ${block.whatView}`}>
						{block.icon}
					</button>
				);
			})}
		</>
	);
}
