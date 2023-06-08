import Button from "@/components/Buttons/Main";

export default function InputButton({
	id,
	placeholder,
	name,
	className = null,
	button = "Next",
	classNameButton = "bg-amber-400",
	padding = "p-3",
}) {
	return (
		<ul className={`flex items-center mb-2 ${className}`}>
			<li className="basis-full">
				<input
					required=""
					type="text"
					className={`${padding} text-sm w-full rounded-l-lg border-gray-300 border-b border-l border-t`}
					id={id}
					placeholder={placeholder}
					name={name}
				/>
			</li>
			<li className="basis-auto">
				<Button
					title={button}
					className={`flex items-center justify-center ${padding} text-sm font-bold rounded-r-lg border-0 ${classNameButton}`}
					buttonPadding={padding}
				/>
			</li>
		</ul>
	);
}
