import Button from "app/components/Buttons/Main";

export default function InputButton({
	className,
	input,
	button,
	padding = "p-3",
}) {
	return (
		<ul className={`flex w-100 ${className}`}>
			<li className="flex-1">
				<input
					required=""
					type="text"
					className={`${padding} w-full rounded-l ${input.className}`}
					id={input.id}
					placeholder={input.placeholder}
					name={input.name}
				/>
			</li>
			<li className="flex-initial">
				<Button
					aria-label={button.ariaLabel}
					title={button.title}
					className={`w-full h-full font-bold rounded-r outline-0 border-0 whitespace-nowrap uppercase ${button.className} ${padding}`}
				/>
			</li>
		</ul>
	);
}
