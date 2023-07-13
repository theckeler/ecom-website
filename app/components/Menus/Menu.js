"use client";

import MenuBody from "./components/Body";
import MenuTitle from "./components/Title";

export default function Menu({ className, menu }) {
	return (
		<div
			id={menu.id}
			className={`popup-item hidden fixed z-50 right-0 top-0 w-full md:max-w-xl bg-white ${className}`}>
			<ul>
				<li className="py-3 border-b bg-zinc-200">
					<MenuTitle {...{ title: menu.title }} />
				</li>
				<li>
					<MenuBody {...{ loadComponent: menu.component }} />
				</li>
				{menu.button && (
					<li className="absolute bottom-0 left-0 h-16 px-2 py-2 w-full bg-zinc-200">
						<button className="bg-amber-400 p-2 h-12 min-h-full w-full block">
							{menu.button}
						</button>
					</li>
				)}
			</ul>
		</div>
	);
}
