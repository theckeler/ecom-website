export default function FormQuanity({ className, quantity }) {
	return (
		<div className="flex items-center">
			<button
				type="button"
				className="w-12 h-12 leading-10 text-gray-600 bg-gray-200">
				−
			</button>
			<input
				type="number"
				//id="Quantity"
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
