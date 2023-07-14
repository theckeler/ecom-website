"use client";
import Close from "@/icons/Close";
import toggleMenu from "@/functions/toggleMenu";
import ChevronLeft from "@/icons/ChevronLeft";

export default function MenuTitle({ className, title, component }) {
	return (
		<ul className="w-100 flex items-center w-100">
			{title && (
				<li className="w-100 grow font-bold text-left pl-3 hidden lg:block">
					{title}
				</li>
			)}

			{component === "subNav" && (
				<button
					className="lg:hidden p-4 block w-100"
					onClick={(e) => {
						toggleMenu("main-nav");
					}}
					aria-label={`Back to the main menu`}>
					<ul className="font-bold flex items-center">
						<li className="w-10">
							<ChevronLeft />
						</li>
						<li>Back to the main menu</li>
					</ul>
				</button>
			)}

			<li className="ml-auto w-12">
				<button
					onClick={() => {
						toggleMenu(null);
					}}
					className="w-full"
					aria-label="Close">
					<Close className="h-12 " />
				</button>
			</li>
		</ul>
	);
}
