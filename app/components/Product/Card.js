import Image from "next/image";
import Link from "next/link";
import ButtonMain from "app/components/Buttons/Main";

export default function Card({ className, block, buttonWide, noImg }) {
	return (
		<Link
			href={block.button.href}
			className={`flex flex-col h-full ${className} ${block.className}`}>
			{!!block.img && !block.noIMG && (
				<div className="relative pt-[40%] lg:pt-[50%]">
					<Image
						src={block.img.src}
						alt=""
						fill
						className="object-cover object-center z-0"
					/>
				</div>
			)}
			<div className="flex flex-col relative z-10 h-full p-4">
				<h2 className="text-lg lg:text-2xl font-bold">{block.title}</h2>
				<p
					className={`mt-2 text-sm lg:leading-6 ${
						!!block.lineClamp && "line-clamp-2 lg:line-clamp-none"
					}`}>
					{block.p}
				</p>
				<div className="pt-4 mt-auto">
					<ButtonMain
						title={block.button.title}
						className={`w-full ${
							!buttonWide && "lg:w-auto"
						}   mt-auto p-2 px-10 inline-flex justify-center bg-amber-400 text-xs lg:text-sm ${
							block.button.className
						}`}
					/>
				</div>
			</div>
		</Link>
	);
}
