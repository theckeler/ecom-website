"use client";
import Close from "@/icons/Close";
import ToggleMenu from "@/components/Functions/toggleMenu";

import ChevronLeft from "@/icons/ChevronLeft";
import InputButton from "@/components/Form/InputButton";

export default function MenuTitle({ className, title, componentType }) {
	return (
		<ul className={`w-100 flex items-center w-100 py-1 ${className}`}>
			<li
				className={`w-100 grow font-bold text-left pl-3  ${
					componentType === "subNav" && "hidden lg:block"
				}`}>
				{componentType === "mainNav" && (
					<InputButton
						{...{
							className: "max-w-[88%]",
							padding: "p-2",
							input: {
								id: "search",
								placeholder: "Search",
								name: "search",
								className: "border-amber-400 border-2 bg-neutral-800",
							},
							button: {
								title: "Search",
								ariaLabel: null,
								className: "bg-amber-400 text-black",
							},
						}}
					/>
				)}
				<span className="text-xl">{!!title && title}</span>
			</li>

			{componentType === "subNav" && (
				<li>
					<button
						className="lg:hidden block w-100"
						onClick={(e) => {
							ToggleMenu("main-nav");
						}}
						aria-label={`Back to the main menu`}>
						<ul className="font-bold flex items-center">
							<li className="w-10">
								<ChevronLeft className="fill-white" />
							</li>
							<li>Back to the main menu</li>
						</ul>
					</button>
				</li>
			)}

			<li className="ml-auto w-14">
				<button
					onClick={() => {
						ToggleMenu(null);
					}}
					className="flex items-center justify-center w-12 h-12"
					aria-label="Close">
					<Close className="w-10 h-10 p-2 rounded-full bg-white" />
				</button>
			</li>
		</ul>
	);
}
