import ButtonMain from "@/buttons/Main";
import ExpandMore from "@/icons/ExpandMore";
import Close from "../Icons/Close";
import toggleMenu from "@/functions/toggleMenu";

export default function Promo() {
	return (
		<div className="text-sm" style={{ backgroundColor: "#ffc20f" }}>
			<div className="container mx-auto">
				<button
					className="flex items-center justify-center w-full p-2 font-bold"
					onClick={() => {
						toggleMenu("promo-content");
					}}>
					Promo: Aliquam dolor arcu, mattis vitae arcu et
					<ExpandMore className="ml-1 w-6" />
				</button>
			</div>
			<div className="hidden popup-item" id="promo-content">
				<div
					className="mx-auto px-2 py-4 fixed top-0 left-0 w-full z-50 h-full lg:h-auto"
					style={{ backgroundColor: "#ffc20f" }}>
					<button
						onClick={() => {
							toggleMenu(null);
						}}
						className="w-full">
						<Close className="h-12 ml-auto" />
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
								onClick={() => {
									toggleMenu(null);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
