import IconChat from "../Icons/Chat";

export default function Chat({ className }) {
	return (
		<button className="flex items-center p-1 md:px-4 rounded-l sm:rounded-t bg-amber-400  ">
			<IconChat className="w-10" />
			<span className="hidden md:inline-block text-xs">CHAT</span>
		</button>
	);
}
