import InputButton from "@/components/Form/InputButton";
import Options from "./components/Dealers";
import Close from "@/icons/Close";
import ToggleMenu from "@/functions/toggleMenu";
import StoreIcon from "@/icons/Store";

export default function ShopYourDealer() {
	return (
		<div className="flex items-center">
			<button
				href="?oops=1#Click-the-Zero-Turn-Mowers-link-that-is-the-plp"
				className="p-1 flex items-center text-white md:hidden"
				aria-label="Select Your Dealer"
				onClick={() => {
					ToggleMenu("dealers");
				}}>
				<StoreIcon
					className="h-8 mr-1 md:mr-2 fill-white"
					style={{ minWidth: "2em", maxWidth: "2em" }}
				/>
				Shop your Dealer
			</button>
			<span className="pl-2 hidden md:block whitespace-nowrap text-white text-xs">
				Your Dealer:
			</span>

			<div
				className="popup-item hidden fixed md:block md:relative z-30 md:z-10 lg:z-auto left-0 top-0 h-screen md:h-auto w-full bg-white md:bg-transparent py-2 lg:py-3"
				id="dealer">
				<ul className="flex flex-col">
					<li className="md:hidden py-3 border-b">
						<button
							onClick={() => {
								ToggleMenu(null);
							}}
							className="w-full"
							aria-label="Close">
							<ul className="w-100 flex items-center w-100">
								<li className="w-100 grow font-bold text-left pl-3">
									Shop Your Dealer
								</li>
								<li className="ml-auto w-12">
									<Close className="h-12 " />
								</li>
							</ul>
						</button>
					</li>
					<li className="p-3 md:p-0">
						<InputButton
							{...{
								className: "mt-2 lg:mt-0 lg:ml-4 md:hidden",
								padding: "p-2",
								input: {
									id: "zipcode-postal-code",
									placeholder: "44280",
									name: "zipcode",
									className: "border-gray-300 border-b-2 border-l-2 border-t-2",
								},
								button: {
									title: "GO",
									ariaLabel: null,
									className: "bg-gray-400",
								},
							}}
						/>

						<p className="text-xs mt-1 md:hidden">
							Donec arcu orci, porttitor in eros aliquam, ultrices convallis
							magna. Nam finibus molestie dolor. Mauris in varius lorem. Mauris
							nec erat neque. Phasellus ut enim velit.
						</p>

						<Options />
					</li>
				</ul>
			</div>
		</div>
	);
}
