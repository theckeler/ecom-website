import IconChat from "../Icons/Chat";

export default function Chat({ className }) {
	return (
		<button
			className="flex gap-1 items-center p-1 md:px-4 rounded-l sm:rounded-t bg-amber-400 border"
			aria-label="Chat with someone">
			<IconChat className="w-10" />
			<span className="hidden md:inline-block text-xs">CHAT</span>
		</button>
	);
}
