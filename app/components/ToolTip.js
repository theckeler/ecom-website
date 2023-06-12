export default function H3({ copy }) {
	const randNum = Math.floor(Math.random() * 100) + 1;

	return (
		<button
			className={`group/tooltip bg-amber-400 rounded-full w-4 h-4 text-xs -mt-4 relative`}>
			?
			<div
				className={`group-hover/tooltip:block hidden absolute bottom-100 w-52 h-auto bg-gray-800 p-4 rounded-lg text-white z-20 min-w-[300px]`}
				data-toggle="tooltip">
				Manufacturer’s buy online price. Taxes are additional and vary by
				location. Freight, setup, delivery, PDI, and other dealer specific
				charges are not included in the pricing and vary by dealer. Prices shown
				are in U.S dollars and valid only in the United States.
			</div>
		</button>
	);
}
