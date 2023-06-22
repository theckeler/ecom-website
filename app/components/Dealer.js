"use client";
import Close from "@/icons/Close";

export default function Dealer({ className }) {
	return (
		<div
			id="dealer"
			className={`hidden fixed z-50 left-0 top-0 h-screen w-full md:max-w-xl bg-white p-2 lg:p-4 ${className}`}>
			<ul className="flex">
				<li>Dealer</li>
				<li className="ml-auto">
					<button
						onClick={() => {
							document.querySelector("#dealer").classList.toggle("hidden");
						}}
						className="w-full">
						<Close className="h-12 " />
					</button>
				</li>
			</ul>
		</div>
	);
}
