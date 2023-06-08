import Image from "next/image";

import CTABlock from "@/cta/Block";

export default function CTAHero({
	block,
	reverse = false,
	className = null,
	blockWidths = { l: 8, r: 4 },
	minHeight = "sm",
}) {
	{
		return (
			<ul
				className={`flex flex-col xl:flex-row ${
					!!reverse && "xl:flex-row-reverse"
				} ${className}`}>
				<li className={`xl:basis-${blockWidths.l}/12`}>
					<div className={`relative h-full min-h-[18em] xl:min-h-${minHeight}`}>
						<Image
							src={block.src}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							alt=""
							className="object-cover"
						/>
					</div>
				</li>
				<li className={`xl:basis-${blockWidths.r}/12 p-8 bg-amber-400`}>
					<CTABlock
						title={block.title}
						copy={block.copy}
						xsCopy={block.xsCopy}
						buttonText={block.buttonText}
						href={block.href}
					/>
				</li>
			</ul>
		);
	}
}
