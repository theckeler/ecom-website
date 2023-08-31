import IconText from "./Buttons/IconText";
import Check from "./Icons/Check";

export default function Compare({ className }) {
	const buttonCSS = "bg-green-400 text-sm py-1 px-2";

	return (
		<div className={`bg-gray-300 ${className}`}>
			<div
				className="max-w-screen-2xl mx-auto bg-white flex justify-center items-center w-full p-3"
				style={{}}>
				<div className="flex flex-wrap gap-1 w-full">
					{[...Array(4)].map((star, i) => {
						return (
							<IconText
								title="Product"
								icon={<Check className="w-6 p-1" />}
								className={buttonCSS}
								key={i}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
