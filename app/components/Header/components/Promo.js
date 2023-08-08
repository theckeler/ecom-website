import ExpandMore from "@/icons/ExpandMore";
import ToggleMenu from "@/components/Functions/toggleMenu";

import Menu from "@/menus/Menu";

export default function Promo() {
	return (
		<div className="text-sm bg-amber-400 dark:bg-neutral-900 dark:text-white">
			<div className="container mx-auto">
				<button
					className="flex items-center justify-center w-full p-2 font-bold"
					onClick={() => {
						ToggleMenu("promo-content");
					}}
					aria-label="Promo: Aliquam dolor arcu, mattis vitae arcu et">
					Promo: Aliquam dolor arcu, mattis vitae arcu et
					<ExpandMore className="ml-1 w-6 dark:fill-white" />
				</button>
			</div>
		</div>
	);
}
