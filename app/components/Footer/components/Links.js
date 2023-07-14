"use client";

import ExpandMore from "@/icons/ExpandMore";

export default function FooterLinks({
	className,
	links,
	row = false,
	extra = null,
	alignRight = false,
}) {
	return (
		<div className={row ? "sm:flex flex-wrap items-center border-t" : ""}>
			<h3
				className={`relative font-bold p-4 sm:p-0 flex truncate ${
					links.title.className
				} ${!row && "sm:pb-1 lg:pb-3 border-b"} ${row && "sm:py-5"}`}>
				<button
					className="block sm:hidden absolute top-0 left-0 w-full h-full"
					aria-label={links.title.copy}
					onClick={(e) => {
						e.currentTarget.parentElement.nextElementSibling.classList.toggle(
							"hidden"
						);
					}}
				/>
				{links.title.copy}
				<ExpandMore className="sm:hidden ml-auto w-6" />
			</h3>
			<div className="hidden sm:block">
				<ul
					className={`${row && "sm:flex items-center"} ${
						alignRight && "ml-auto"
					}`}>
					{links.links.map((link, i) => {
						return (
							<li className="" key={i}>
								<a
									className={`sm:text-xs underline p-5 block ${
										!row && "sm:p-2"
									}`}
									href="#ClickZeroTurnMowersLink">
									{link}
								</a>
							</li>
						);
					})}
				</ul>
				{extra && (
					<div
						className={extra.className}
						dangerouslySetInnerHTML={{
							__html: extra.copy,
						}}
					/>
				)}
			</div>
		</div>
	);
}
