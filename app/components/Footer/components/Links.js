"use client";

import ExpandMore from "@/icons/ExpandMore";

export default function FooterLinks({
	className,
	title,
	links,
	row = false,
	extra = null,
	alignRight = false,
}) {
	return (
		<div
			className={`border-b sm:border-b-0 ${
				row ? "sm:flex flex-wrap items-center " : "border-b sm:border-b-0"
			}`}>
			<h3
				className={`relative font-bold p-4 sm:p-0 flex truncate ${
					row ? "sm:py-5" : "md:pb-3 md:border-b"
				} ${title.className}`}>
				<button
					className="block sm:hidden absolute top-0 left-0 w-full h-full"
					aria-label={title.copy}
					onClick={(e) => {
						e.currentTarget.parentElement.nextElementSibling.classList.toggle(
							"hidden"
						);
					}}
				/>
				{title.copy}
				<ExpandMore className="sm:hidden ml-auto w-6" />
			</h3>
			<div className="hidden sm:block">
				<ul
					className={`${row && "sm:flex items-center"} ${
						alignRight && "ml-auto"
					}`}>
					{links.map((link, i) => {
						return (
							<li key={i}>
								<a
									className={`sm:text-xs underline p-5 block ${
										!row && "sm:p-2"
									}`}
									href="?oops=1#Click-the-Zero-Turn-Mowers-link-that-is-the-plp">
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
