"use client";

import ExpandMore from "@/icons/ExpandMore";
import LinksOutput from "./components/Output";

export default function LinksReveal({
	className,
	title,
	links,
	component,
	row = false,
	extra = null,
}) {
	return (
		<div
			className={`sm:h-full border-b sm:border-b-0 ${
				row ? "sm:flex flex-wrap items-center " : "border-b sm:border-b-0"
			} ${className}`}>
			{title && (
				<h3
					className={`relative font-bold p-4 sm:p-0 flex truncate ${
						row ? "sm:py-5" : "sm:pb-3 sm:border-b"
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
			)}

			<div className="hidden sm:block sm:h-full">
				{component && component}

				{links && <LinksOutput links={links} />}

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
