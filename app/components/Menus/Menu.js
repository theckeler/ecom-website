"use client";

import MenuBody from "./components/Body";
import MenuTitle from "./components/Title";

export default function Menu({ className, menu }) {
	return (
		<div
			id={menu.id}
			className={`popup-item hidden fixed z-50 right-0 top-0 h-screen w-full md:max-w-xl bg-white ${className}`}>
			<ul>
				<li className="py-3 border-b">
					<MenuTitle {...{ title: menu.title }} />
				</li>
				<li>
					<MenuBody {...{ loadComponent: menu.component }} />
				</li>
			</ul>
		</div>
	);
}
