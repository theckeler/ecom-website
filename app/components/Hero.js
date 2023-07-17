import Image from "next/image";

import ProductCard from "app/components/Product/Card";

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
				className={`flex flex-col md:flex-row ${
					!!reverse && "lg:flex-row-reverse"
				} ${className}`}>
				<li className={`md:basis-6/12 lg:basis-${blockWidths.l}/12`}>
					<div className={`relative h-full min-h-[18em] lg:min-h-${minHeight}`}>
						<Image
							src={block.img.src}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							alt=""
							className="object-cover"
							priority
						/>
					</div>
				</li>
				<li
					className={`md:basis-6/12 lg:basis-${blockWidths.r}/12 p-2 lg:p-6 bg-amber-400`}>
					<ProductCard block={block} />
				</li>
			</ul>
		);
	}
}
