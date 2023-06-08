import ButtonMain from "@/buttons/Main";
import Image from "next/image";

export default function CTABlock({
	title,
	copy,
	href,
	src,
	buttonText,
	xsCopy,
	fullButton,
}) {
	{
		return (
			<ul className="flex flex-col h-full items-start">
				{!!src && (
					<li className="min-h-xs relative w-full">
						<Image src={src} alt="" fill className="object-cover w-full" />
					</li>
				)}
				<li className={`mt-3 text-xl lg:text-2xl font-bold`}>{title}</li>
				<li className="mt-2 text-sm lg:text-md">{copy}</li>
				{!!xsCopy && <li className="mt-2 pl-4 text-xs">{xsCopy}</li>}
				<li
					className={`w-full pt-3 lg:pt-8 mt-auto ${!!fullButton && "w-full"}`}>
					<ButtonMain
						title={buttonText}
						className={`w-full lg:w-auto mt-auto p-2 px-10 inline-flex justify-center bg-amber-400 rounded-2xl bg-black text-white`}
						noIcon
						href={href}
					/>
				</li>
			</ul>
		);
	}
}
