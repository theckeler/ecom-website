import Button from "@/buttons/Main";
import ButtonEdit from "@/buttons/Edit";
import DealerInfo from "./DealerInfo";
import ShippingButton from "./ShippingButton";
import InputButton from "@/components/InputButton";

export default function AddCart({ shippingButtons }) {
	const buyButtonsClick = (e) => {
		e.preventDefault();
		console.log(e.currentTarget.dataset.availability);

		document.querySelectorAll(".buy-button").forEach((block) => {
			block.classList.add("bg-gray-200");
			block.classList.remove("bg-amber-200");
		});

		e.currentTarget.classList.remove("bg-gray-200");
		e.currentTarget.classList.add("bg-amber-200");

		document.querySelector("#availability-update").textContent =
			e.currentTarget.dataset.availability;
		document.querySelector("#availability-type").textContent =
			e.currentTarget.dataset.type;
	};

	return (
		<ul className="min-w-full min-h-full">
			<li className="mt-3 border-b border-t pt-4 my-2">
				<DealerInfo />
			</li>
			<li className="mt-3 border-b pb-4 mb-2 text-sm">
				<ul className="flex items-center">
					<li className="basis-11/12 text-sm">
						<strong>
							<span id="availability-type">Delivering</span> to:
						</strong>{" "}
						44107
					</li>
					<li className="basis-1/12">
						<ButtonEdit
							addClick={() => {
								document.querySelectorAll("#zipcodeedit").forEach((block) => {
									block.classList.toggle("hidden");
								});
							}}
						/>
					</li>
				</ul>
				<div className="hidden" id="zipcodeedit">
					<div className="p-4 bg-amber-200 rounded-md mt-4">
						<h3 className="font-bold">Change Delivery Zipcode</h3>
						<p className="text-xs mb-3">
							The zip code you entered may change the shipping method.
						</p>
						<InputButton
							id="zipcode-postal-code"
							placeholder="Enter Zipcode"
							name="zipcode"
						/>
					</div>
				</div>
			</li>
			<li className="mt-3 border-b pb-4 mb-2 text-sm">
				<strong>Availability:</strong>{" "}
				<span id="availability-update">Pick up in 1-2 days</span>
			</li>
			<li className="mt-3 border-b pb-4 mb-2">
				<ul className="flex flex-col xl:flex-row">
					{shippingButtons.map(function (button, i) {
						if (!button.disabled) {
							return (
								<li key={i} className="p-1 flex-1">
									<ShippingButton
										{...{ button }}
										buyButtonsClick={buyButtonsClick}
									/>
								</li>
							);
						}
					})}
				</ul>
			</li>
			<li className="mt-3">
				<Button
					title="Add to Cart"
					className="group flex items-center justify-center w-full p-3 uppercase font-bold bg-amber-400 lg:hover:bg-black lg:hover:text-white rounded-2xl"
				/>
			</li>
		</ul>
	);
}
