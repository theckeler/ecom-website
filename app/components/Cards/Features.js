import Image from "next/image";

export default function Cards({ product }) {
	return (
		<div className="mb-4 md:mb-0 px-5 py-7 bg-gray-200 rounded-md">
			<h3 className="text-lg font-bold w-full text-center">{product.title}</h3>
			<div className="relative mt-3 bg-white p-2 rounded-xl">
				<Image
					src={product.img}
					alt=""
					className="w-full"
					width={400}
					height={400}
				/>
			</div>
			<p className="text-xs leading-5 mt-3 px-4">{product.copy}</p>
		</div>
	);
}
