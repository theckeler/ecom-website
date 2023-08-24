import IconText from "./Buttons/IconText";
import Check from "./Icons/Check";

export default function Compare({ className }) {
	const buttonCSS = "bg-green-400 text-sm py-1 px-2";

	return (
		<div className={`bg-gray-300 ${className}`}>
			<div
				className="max-w-screen-2xl mx-auto bg-white flex justify-center items-center w-full p-3"
				style={{}}>
				<ul className="grid grid-flow-dense grid-cols-12 grid-rows-3 w-full">
					<li className="basis-auto">
						<IconText
							title="Product"
							Icon={() => <Check className="w-6 mr-1" />}
							className={buttonCSS}
						/>
					</li>
					<li className="basis-auto">
						<IconText
							title="Product"
							Icon={() => <Check className="w-6 mr-1" />}
							className={buttonCSS}
						/>
					</li>
					<li className="basis-auto">
						<IconText
							title="Product"
							Icon={() => <Check className="w-6 mr-1" />}
							className={buttonCSS}
						/>
					</li>
				</ul>
			</div>
		</div>
	);
}
