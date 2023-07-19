import Button from "app/components/Buttons/Main";
import ButtonEdit from "app/components/Buttons/Edit";
import DealerInfo from "./DealerInfo";
import ShippingButton from "./ShippingButton";
import InputButton from "@/components/Form/InputButton";

export default function AddCart({ shippingButtons }) {
	const buyButtonsClick = (e) => {
		e.preventDefault();

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
		<>
			<ul className="min-w-full">
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
						<div className="p-4 bg-amber-200 mt-4">
							<h3 className="font-bold">Change Delivery Zipcode</h3>
							<p className="text-xs mb-3">
								The zip code you entered may change the shipping method.
							</p>
							<InputButton
								{...{
									className: null,
									padding: "p-3",
									input: {
										id: "zipcode-postal-code",
										placeholder: "Enter Zipcode",
										name: "zipcode",
										className: "",
									},
									button: {
										title: "Next",
										ariaLabel: null,
										className: "bg-amber-400",
									},
								}}
							/>
						</div>
					</div>
				</li>
				<li className="mt-3 border-b pb-4 mb-2 text-sm">
					<strong>Availability:</strong>{" "}
					<span id="availability-update">Pick up in 1-2 days</span>
				</li>
				<li className="mt-3 pb-4 mb-2">
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
			</ul>
			<div className="mt-1 sticky md:static bottom-0 bg-white/90 p-2 border-t">
				<Button
					title="Add to Cart"
					aria-label="Add to Cart"
					className="group flex items-center justify-center w-full p-3 uppercase font-bold bg-amber-400 lg:hover:bg-black lg:hover:text-white"
				/>
			</div>
		</>
	);
}
