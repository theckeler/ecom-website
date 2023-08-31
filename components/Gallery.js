import Image from "next/image";
import ViewMore from "@/components/Buttons/ViewMore";

export default function Gallery({ gallery = null }) {
	{
		return (
			!!gallery && (
				<>
					<ul className="flex flex-col lg:flex-row lg:flex-wrap mb-6">
						{gallery.map(function (img, i) {
							return img.video ? (
								<li className="basis-full" key={i}>
									<div
										className="relative min-w-full min-h-full"
										style={{ paddingTop: "56.6%" }}>
										<iframe
											width="100%"
											height="100%"
											className="absolute top-0 left-0 w-full"
											src="https://www.youtube.com/embed/mrqqpGpPYCM"
											title="YouTube video player hidden lg:block"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen></iframe>
									</div>
								</li>
							) : (
								<li
									className={`gallery-hidden basis-6/12 ${
										!!img.hidden && "hidden"
									}`}
									key={i}>
									<div className="relative min-w-full min-h-full pt-[100%]">
										<Image
											src={img.src}
											alt=""
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</div>
								</li>
							);
						})}
						<li className="basis-full">
							<ViewMore
								onClick={(e) => {
									document
										.querySelector("#gallery-button")
										.classList.add("hidden");
									document
										.querySelectorAll(".gallery-hidden")
										.forEach((block) => {
											block.classList.remove("hidden");
										});
								}}
								props={{
									showing: { start: 4, end: 8 },
									id: "gallery-button",
									title: "View More Images",
									button: {
										className: "bg-amber-400",
									},
									className: "w-full",
								}}
							/>
						</li>
					</ul>
				</>
			)
		);
	}
}
