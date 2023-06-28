"use client";

import Link from "next/link";

export default function SubNav({ sub }) {
	return (
		sub && (
			<>
				<div
					className="sub-nav hidden lg:absolute z-10 top-full left-0"
					id="sub-nav"
					style={{ minWidth: "20em" }}>
					<div className="p-2 bg-white relative z-10">
						<ul className="text-sm">
							{sub.map((sub, i) => (
								<li key={i}>
									<Link
										href={sub.url}
										className="p-2 block underline relative z-10">
										{sub.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div
					className="hidden lg:bg-amber-400 w-0 lg:w-full h-0 lg:h-full fixed top-0 left-0 z-0 opacity-80"
					id="bg-sub-menu"></div>
			</>
		)
	);
}
