"use client";
import Close from "@/icons/Close";
import toggleMenu from "@/functions/toggleMenu";

export default function Stores({ className }) {
	return (
		<div
			id="stores"
			className={`hidden fixed z-50 right-0 top-0 h-screen w-full md:max-w-xl bg-white ${className}`}>
			<ul className="">
				<li className="py-3 border-b">
					<button
						onClick={() => {
							toggleMenu(null);
						}}
						className="w-full">
						<ul className="w-100 flex items-center w-100">
							<li className="w-100 grow font-bold text-left pl-3">Stores</li>
							<li className="ml-auto w-12">
								<Close className="h-12 " />
							</li>
						</ul>
					</button>
				</li>
				<li className="p-3 overflow-x-scroll max-h-[calc(100vh-72px)]">
					<ul className="min-h-[200vh]">
						<li>Stores menu</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}
