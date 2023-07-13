"use client";
import Close from "@/icons/Close";
import toggleMenu from "@/functions/toggleMenu";

export default function MenuTitle({ className, title }) {
	return (
		<button
			onClick={() => {
				toggleMenu(null);
			}}
			className="w-full"
			aria-label="Close">
			<ul className="w-100 flex items-center w-100">
				{title && (
					<li className="w-100 grow font-bold text-left pl-3">{title}</li>
				)}
				<li className="ml-auto w-12">
					<Close className="h-12 " />
				</li>
			</ul>
		</button>
	);
}
