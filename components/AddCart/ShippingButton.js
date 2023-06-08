import IconDelivery from "../Icons/Delivery";
import IconPickUp from "../Icons/PickUp";
import IconShip from "../Icons/Ship";

export default function ShippingButton({ button, buyButtonsClick }) {
	const icons = {
		iconDelivery: IconDelivery,
		iconPickUp: IconPickUp,
		iconShip: IconShip,
	};
	const Icon = icons[button.icon];

	return (
		<button
			className={`buy-button h-full py-3 px-2 xl:py-4 xl:px-3 rounded-md w-full border border-gray-400 ${
				button.disabled && " opacity-50"
			} ${
				button.active ? " bg-amber-200" : "bg-gray-200"
			} lg:hover:bg-amber-300`}
			disabled={button.disabled && true}
			onClick={buyButtonsClick}
			data-availability={button.availability}
			data-type={button.type}>
			<ul className="flex items-center xl:flex-col w-full text-left xl:h-full">
				<li className="basis-1/12 mr-2 xl:mr-0 xl:basis-full">
					<div className="w-12 xl:min-w-full xl:h-14">
						<Icon className="" />
					</div>
				</li>
				<li className="basis-full text-xs xl:text-center">
					<div className="uppercase leading-3 font-bold lg:leading-4 lg:text-sm">
						{button.title}
					</div>
					{!!button.availability && (
						<div className="mt-1 xl:mt-3 lg:leading-3 lg:text-xs">
							{button.availability}
						</div>
					)}
				</li>
				<li className="flex-auto text-sm uppercase xl:mt-auto xl:pt-4">
					{button.status}
				</li>
			</ul>
		</button>
	);
}
