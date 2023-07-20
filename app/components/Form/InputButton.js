"use client";
import Button from "app/components/Buttons/Main";

export default function InputButton({
	className,
	input,
	button,
	padding = "p-3",
	icon = null,
}) {
	return (
		<ul className={`flex ${className}`}>
			<li className="grow">
				<input
					required=""
					type="text"
					className={`${padding} w-full h-full rounded-l rounded-r-none ${input.className}`}
					id={input.id}
					placeholder={input.placeholder}
					name={input.name}
				/>
			</li>
			<li className="shrink">
				<Button
					aria-label={button.ariaLabel}
					title={button.title}
					className={`w-full h-full font-bold rounded-r outline-0 border-0 whitespace-nowrap uppercase ${button.className} ${padding}`}
					icon={icon}
				/>
			</li>
		</ul>
	);
}
