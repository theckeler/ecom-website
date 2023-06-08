import ToggleButton from "../Buttons/Toggle";
import specsJson from "../../Data/specs.json";

export default function TabSpecs() {
	//console.log(specsJson);

	return (
		<div className="border-b">
			<ToggleButton title="Specs" id="specs" />

			<div className="hidden" id="specs-text">
				{specsJson.map(function (spec, i) {
					return (
						<ul key={i} className="mb-6 bg-gray-200 px-7 py-4 rounded">
							<li className="font-bold text-xl uppercase border-b border-gray-300 py-2 mb-5">
								{spec.title}
							</li>
							{spec.blocks.map(function (spec, i) {
								return (
									<li
										key={i}
										className="attribute-values text-sm mb-2"
										tabIndex="0">
										<ul className="flex">
											<li className="basis-3/12 font-bold text-right mr-3">
												{spec.span}:
											</li>
											<li className="basis-fill">{spec.title}</li>
										</ul>
									</li>
								);
							})}
						</ul>
					);
				})}

				<ul className="mb-6 bg-gray-200 px-7 py-4 rounded">
					<li className="font-bold text-xl uppercase">Disclaimers</li>
					<li className="attribute-values mb-2 text-xs" tabIndex="0">
						Specifications subject to change without notice and without
						incurring obligation. Products depicted on website and other
						advertisements are for demonstration purposes only. Actual products
						offered for sale may vary in design, required attachments, safety
						features and non-functional appearance from. See other general
						disclaimers at the bottom of our website.
					</li>
				</ul>
			</div>
		</div>
	);
}
