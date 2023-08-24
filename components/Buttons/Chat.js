import IconChat from "@/icons/Chat";

export default function Chat({ className }) {
	return (
		<button
			className="flex gap-1 items-center p-1 md:px-4 rounded-l sm:rounded-t bg-amber-400 dark:bg-neutral-800 dark:text-white dark:fill-white border border-r-0 dark:border-neutral-700"
			aria-label="Chat with someone">
			<IconChat className="w-10 p-1" />
			<span className="hidden md:inline-block text-xs">CHAT</span>
		</button>
	);
}
