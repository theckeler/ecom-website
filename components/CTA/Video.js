"use client";

import ButtonMain from "@/components/Buttons/Main";

export default function CTAVideo({ className = null }) {
	{
		return (
			<ul className={`flex flex-col md:flex-row ${className}`}>
				<li className={`md:basis-6/12 lg:basis-8/12`}>
					<div className={`relative h-full min-h-[18em] lg:min-h-xl`}>
						<video
							class="absolute z-0 inset-0 w-full h-full object-cover"
							playsinline=""
							disablepictureinpicture=""
							width={1280}
							height={720}
							preload="none"
							//autoplay=""
							//loop=""
							id="test-video"
							muted=""
							poster="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v4365e2b9a0bd8171c4e7b1cc5a7a2d050fe647e2/pro-2.0/home/hero.jpg">
							<source
								src="https://vod-progressive.akamaized.net/exp=1693495400~acl=%2Fvimeo-create-prod-files%2Fe%2Fa%2FLUYfKQdURj8zWRZiCzE~hmac=45704e7fd7b8b2eccd1b0968532ad424c98ac61b36b7206af7d658be00ffdef7/vimeo-create-prod-files/e/a/LUYfKQdURj8zWRZiCzE?filename=file.mp4&source=1"
								type="video/mp4"
							/>
						</video>
					</div>
				</li>
				<li className={`md:basis-6/12 lg:basis-4/12 bg-amber-400`}>
					<div className="p-8">
						<h2 class="text-lg lg:text-2xl font-bold">
							Video in a Hero CTA Example
						</h2>
						<p className="mt-2 text-sm lg:leading-6 false">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
							lorem purus. Quisque tellus neque, volutpat sed enim eu, porta
							condimentum lacus. In maximus odio in turpis ornare ullamcorper.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							rutrum sit amet arcu vitae elementum. Sed sed dui eget massa
							facilisis mollis. Vivamus elementum auctor mauris eget porta.
							Praesent vel blandit massa. Etiam quis urna non sem vestibulum
							lacinia. Suspendisse velit ex, posuere quis odio nec, dictum
							pulvinar lacus. Pellentesque blandit dui sit amet augue posuere,
							finibus porttitor urna facilisis. Donec elementum dictum arcu.
						</p>
						<ButtonMain
							title="Play Test Video"
							className="bg-black text-white p-6 mt-6"
							onClick={() => {
								const thisVideo = document.querySelector("#test-video");
								if (thisVideo.paused) {
									thisVideo.play();
								} else {
									thisVideo.pause();
								}
							}}
						/>
					</div>
				</li>
			</ul>
		);
	}
}
