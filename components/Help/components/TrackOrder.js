import ButtonMain from "@/buttons/Main";

export default function HelpTrackOrder() {
	return (
		<div className="bg-gray-200 p-4 h-full flex flex-col">
			<strong className="text-2xl">Track My Order</strong>
			<p className="text-xs mt-1">
				Looking to track your order? Look no further! Simply click below to get
				started and stay up-to-date on the whereabouts of your purchase.
			</p>
			<div className="mt-auto">
				<ButtonMain
					className="mt-2 md:text-sm font-bold p-2 bg-amber-400 w-full text-bold"
					title="Track My Order"
				/>
			</div>
		</div>
	);
}
