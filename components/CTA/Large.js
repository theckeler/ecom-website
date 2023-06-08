import Image from "next/image";
import Link from "next/link";
import ButtonMain from "@/buttons/Main";

export default function Cards({
	src,
	title,
	p,
	buttonTitle,
	className,
	classNameButton,
	href,
}) {
	return (
		<Link href={href} className={`flex flex-col h-full ${className}`}>
			<div className="relative pt-[30%] lg:pt-[50%]">
				<Image
					src={src}
					alt=""
					fill
					className="object-cover object-center z-0"
				/>
			</div>
			<div className="flex flex-col p-8 relative z-10 h-full">
				<h2 className="text-2xl font-bold">{title}</h2>
				<p className="mt-2 text-sm lg:leading-6">{p}</p>
				<div className="pt-4 mt-auto">
					<ButtonMain
						title={buttonTitle}
						className={`w-full lg:w-auto mt-auto p-2 px-10 inline-flex justify-center bg-amber-400 rounded-2xl ${classNameButton}`}
					/>
				</div>
			</div>
		</Link>
	);
}
