import IconChat from "../Icons/Chat";

export default function Chat({ className }) {
	return (
		<div className="fixed z-50 bottom-0 right-3">
			<div className="">
				<button className="flex items-center p-1 rounded-t bg-amber-400">
					<IconChat className="w-10" />
					<span className="hidden md:inline-block text-xs">CHAT</span>
				</button>
			</div>
		</div>
	);
}
