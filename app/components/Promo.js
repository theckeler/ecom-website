import Screen from "@/components/Screen";
import ButtonMain from "@/buttons/Main";

export default function Promo() {
	return (
		<div className="text-sm" style={{ backgroundColor: "#ffc20f" }}>
			<div className="container mx-auto">
				<button
					className="flex items-center justify-center w-full p-2"
					onClick={() => {
						document.querySelector("#promo-content").classList.toggle("hidden");
					}}>
					Promo
					<span className="ml-1 w-6">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
							<path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
						</svg>
					</span>
				</button>
			</div>
			<div className="hidden " id="promo-content">
				<div
					className="mx-auto px-2 py-4 fixed top-0 left-0 w-full z-50 h-full lg:h-auto"
					style={{ backgroundColor: "#ffc20f" }}>
					<button
						onClick={() => {
							document
								.querySelector("#promo-content")
								.classList.toggle("hidden");
						}}
						className="w-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							className="h-12 ml-auto">
							<path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
						</svg>
					</button>
					<div className="container mx-auto mt-2 px-2 py-4 bg-white rounded-xl">
						<h2 className="text-xl font-bold mb-2 text-center">
							Lorem ipsum dolor sit amet
						</h2>
						<p className="mb-4 px-12">
							Mauris ac arcu ipsum. Aliquam et augue at nisl tincidunt congue.
							Fusce tincidunt, nisl vel vehicula dignissim, tortor nisl luctus
							velit, eu aliquet elit ex maximus leo. Maecenas sodales ex arcu,
							consectetur egestas lectus pharetra et. Sed tincidunt luctus augue
							venenatis laoreet. Suspendisse ut consectetur metus. Curabitur
							malesuada, eros sit amet fermentum porttitor, metus mi faucibus
							risus, sed porttitor tellus urna ac mi. Morbi sed iaculis eros.
							Fusce massa quam, gravida eu iaculis vel, blandit eget nulla.
							Nulla eget posuere diam, ut rhoncus turpis. Donec sed felis ante.
							Aliquam dolor arcu, mattis vitae arcu et, malesuada gravida nisl.
							Vivamus in felis at felis ultrices vestibulum. Morbi fringilla
							urna lectus, in porta massa aliquam non. Suspendisse ac vehicula
							odio, sed commodo dolor.
						</p>
						<div className="w-full text-center">
							<ButtonMain
								title="CTA Button"
								className="bg-black text-white font-uppercase inline-flex rounded justify-center px-8"
							/>
						</div>
					</div>
				</div>

				<Screen />
			</div>
		</div>
	);
}
