import InputButton from "@/components/InputButton";
import Options from "./Options";
import Close from "@/icons/Close";
import HeaderButton from "@/header/Button";
import toggleMenu from "@/functions/toggleMenu";

export default function ShopYourDealer({ className }) {
	return (
		<div className="flex">
			<HeaderButton
				title="Shop Your Dealer:"
				buttonIcon="dealer"
				onClick={() => toggleMenu("dealer")}
				mobile
				fillColor="fill-white"
				className="text-white"
			/>

			<div
				className="popup-item hidden fixed md:block md:relative z-50 md:z-auto left-0 top-0 h-screen md:h-auto w-full bg-white md:bg-transparent p-2 lg:p-4"
				id="dealer">
				<ul className="flex md:hidden">
					<li>
						<h2>Shop Your Dealer:</h2>
					</li>
					<li className="ml-auto">
						<button
							onClick={() => {
								toggleMenu(null);
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
					className="mt-2 lg:mt-0 lg:ml-4 md:hidden"
					classNameButton="bg-gray-300"
					padding="p-2"
				/>

				<p className="text-xs mt-1 md:hidden">
					Donec arcu orci, porttitor in eros aliquam, ultrices convallis magna.
					Nam finibus molestie dolor. Mauris in varius lorem. Mauris nec erat
					neque. Phasellus ut enim velit.
				</p>

				<Options className="mt-2 md:mt-0" />
			</div>
		</div>
	);
}
