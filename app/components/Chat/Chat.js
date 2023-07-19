import IconChat from "../Icons/Chat";

export default function Chat({ className }) {
	return (
		<div className="fixed z-30 top-3/4 right-0 rotate-270 origin-top-left -mr-2 md:-mr-14">
			<div className="">
				<button className="flex items-center p-1 rounded-t bg-amber-400  md:px-4">
					<IconChat className="w-10" />
					<span className="hidden md:inline-block text-xs">CHAT</span>
				</button>
			</div>
		</div>
	);
}
