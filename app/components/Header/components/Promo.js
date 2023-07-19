// import ButtonMain from "@/buttons/Main";
import ExpandMore from "@/icons/ExpandMore";
// import Close from "@/icons/Close";
import ToggleMenu from "@/components/Functions/toggleMenu";

import Menu from "@/menus/Menu";

export default function Promo() {
	return (
		<div className="text-sm" style={{ backgroundColor: "#ffc20f" }}>
			<div className="container mx-auto">
				<button
					className="flex items-center justify-center w-full p-2 font-bold"
					onClick={() => {
						ToggleMenu("promo-content");
					}}
					aria-label="Promo: Aliquam dolor arcu, mattis vitae arcu et">
					Promo: Aliquam dolor arcu, mattis vitae arcu et
					<ExpandMore className="ml-1 w-6" />
				</button>
			</div>
		</div>
	);
}
