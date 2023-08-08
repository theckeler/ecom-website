"use client";
import { useState, useEffect } from "react";

export default function ThemeSwitch({ className }) {
	const buttonCSS = "bg-green-400 text-sm py-1 px-2";

	const [theme, setTheme] = useState("light");

	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.querySelector("html").classList.remove("light", "dark");
		document.querySelector("html").classList.add(theme);
	}, [theme]);

	const toggleTheme = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	return (
		<div className="max-w-screen-2xl mx-auto grid items-center sm:justify-center mt-10">
			<label className="relative inline-flex items-center cursor-pointer">
				<input
					type="checkbox"
					value=""
					className="sr-only peer"
					onChange={(e) => {
						toggleTheme();
					}}
				/>
				<div className="w-11 h-6 peer-focus:outline-none peer-focus:ring-4 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5  peer-checked:bg-amber-400"></div>
				<span className="ml-3 text-sm font-medium text-gray-90000">
					Light/Dark Mode (In Progress)
				</span>
			</label>
		</div>
	);
}
