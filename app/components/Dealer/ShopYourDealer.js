import InputButton from "@/components/InputButton";
import Options from "./Options";
import Close from "@/icons/Close";
import HeaderButton from "@/header/Button";

export default function ShopYourDealer({ className, toggleMenu }) {
	return (
		<div className={` ${className}`}>
			<HeaderButton
				title="Select a Dealer"
				buttonIcon="dealer"
				onClick={() => toggleMenu("dealer")}
				mobile
				fillColor="fill-white"
				className="text-white"
			/>

			<div
				className="sub-nav hidden fixed z-50 left-0 top-0 h-screen w-full md:max-w-xl bg-white p-2 lg:p-4"
				id="dealer">
				<ul className="flex">
					<li>
						<h2>Shop Your Dealer:</h2>
					</li>
					<li className="ml-auto">
						<button
							onClick={() => {
								document.querySelector("#dealer").classList.toggle("hidden");
							}}
							className="w-full">
							<Close className="h-12 " />
						</button>
					</li>
				</ul>

				<InputButton
					id="zipcode-postal-code"
					placeholder="44280"
					name="zipcode"
					className="mt-2 lg:mt-0 lg:ml-4"
					classNameButton="bg-gray-300"
					padding="p-2"
				/>

				<p className="text-xs mt-1">
					Donec arcu orci, porttitor in eros aliquam, ultrices convallis magna.
					Nam finibus molestie dolor. Mauris in varius lorem. Mauris nec erat
					neque. Phasellus ut enim velit.
				</p>

				<Options className="mt-2 lg:mt-4 grid grid-cols-1 lg:grid-cols-3 gap-2 lg:divide-x divide-gray-300" />
			</div>
		</div>
	);
}
