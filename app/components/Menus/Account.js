"use client";
import Close from "@/icons/Close";
import toggleMenu from "@/functions/toggleMenu";

export default function Account({ className }) {
	return (
		<div
			id="account"
			className={`hidden fixed z-50 right-0 top-0 h-screen w-full md:max-w-xl bg-white p-2 lg:p-4 ${className}`}>
			<ul className="flex">
				<li>Account</li>
				<li className="ml-auto">
					<button
						onClick={() => {
							toggleMenu(null);
						}}
						className="w-full">
						<Close className="h-12 " />
					</button>
				</li>
			</ul>
		</div>
	);
}
