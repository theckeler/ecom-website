export default function FormQuanity({ className, quantity }) {
	return (
		// <ul className="flex  w-full">
		// 	<li className="w-12">
		// 		<label>
		// 			<button
		// 				name="minus"
		// 				defaultValue="-"
		// 				className="bg-amber-400 rounded-full w-12 h-12 text-xs"
		// 				aria-label="Decrease Quantity">
		// 				-
		// 			</button>
		// 		</label>
		// 	</li>
		// 	<li className="w-full h-full">
		// <input
		// 	type="number"
		// 	className="appearance-none bg-gray-200 text-gray-700 p-1 border text-center w-full text-xs"
		// 	style={{ maxWidth: "48px", minHeight: "48px" }}
		// 	defaultValue={quantity}
		// />
		// 	</li>
		// 	<li className="w-12">
		// 		<label className="plus">
		// 			<button
		// 				name="plus"
		// 				defaultValue="+"
		// 				className="bg-amber-400 rounded-full w-12 h-12 text-xs"
		// 				aria-label="Increase Quantity">
		// 				+
		// 			</button>
		// 		</label>
		// 	</li>
		// </ul>
		<div className="flex items-center">
			<button
				type="button"
				className="w-12 h-12 leading-10 text-gray-600 bg-gray-200">
				−
			</button>
			<input
				type="number"
				id="Quantity"
				defaultValue={quantity}
				className="h-12 w-10 border-gray-200 border text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
			/>
			<button
				type="button"
				className="w-12 h-12 leading-10 text-gray-600 bg-gray-200">
				+
			</button>
		</div>
	);
}
