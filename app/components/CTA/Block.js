import ButtonMain from "app/components/Buttons/Main";
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
			<div className="flex flex-col h-full">
				{!!src && (
					<div className="relative pt-[40%] lg:pt-[50%]">
						<Image src={src} alt="" fill className="object-cover w-full" />
					</div>
				)}
				<ul className="flex flex-col relative z-10 h-full p-4">
					<li className={`text-xl lg:text-2xl font-bold`}>{title}</li>
					<li className="mt-2 text-sm lg:text-md">{copy}</li>
					{!!xsCopy && <li className="mt-2 pl-4 text-xs">{xsCopy}</li>}
					<li
						className={`w-full pt-3 lg:pt-8 mt-auto ${
							!!fullButton && "w-full"
						}`}>
						<ButtonMain
							title={buttonText}
							className={`text-center w-full lg:w-auto mt-auto p-2 px-10 inline-flex justify-center rounded-2xl bg-black text-white text-xs lg:text-sm`}
							noIcon
							href={href}
						/>
					</li>
				</ul>
			</div>
		);
	}
}
