"use client";
import Close from "@/icons/Close";
import toggleMenu from "@/functions/toggleMenu";
import ChevronLeft from "@/icons/ChevronLeft";
import InputButton from "@/components/InputButton";

export default function MenuTitle({ className, title, component }) {
	return (
		<ul className="w-100 flex items-center w-100">
			<li
				className={`w-100 grow font-bold text-left pl-3  ${
					component === "subNav" && "hidden lg:block"
				}`}>
				{component === "mainNav" && (
					<InputButton
						{...{
							className: "max-w-[88%]",
							padding: "p-2",
							input: {
								id: "email-signup",
								placeholder: "Search",
								name: "search",
								className: "border-amber-400 border-2",
							},
							button: {
								title: "Search",
								ariaLabel: null,
								className: "bg-amber-400",
							},
						}}
					/>
				)}
				{!!title && title}
			</li>

			{component === "subNav" && (
				<li>
					<button
						className="lg:hidden block w-100"
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
				</li>
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
