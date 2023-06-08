import ToggleView from "../Icons/ToggleView";
import Stars from "../Stars";
import Link from "../Icons/Link";

export default function ButtonToggle({
	title,
	id,
	className,
	style,
	onClick,
	stars = false,
	opened = false,
	linkOnly = false,
	starNum,
}) {
	const linkCSS = `my-1 rounded-lg block w-full lg:hover:bg-gray-200 select-auto`;
	const ulCSS = `flex items-center px-4 py-2`;

	return linkOnly ? (
		<a href="#top" className={linkCSS}>
			<ul className={ulCSS}>
				<li className="font-bold">{title}</li>
				<li className="ml-auto">
					<Link />
				</li>
			</ul>
		</a>
	) : (
		<button
			className={linkCSS}
			onClick={(e) => {
				const relatedText = document.querySelector(`#${id}-text`);
				const toggleRelated = document.querySelector(`#toggle-${id}`);

				relatedText.classList.toggle("hidden");
				toggleRelated.classList.toggle("rotate-0");
				toggleRelated.classList.toggle("rotate-180");

				if (opened) {
					relatedText.classList.toggle("lg:hidden");
					toggleRelated.classList.toggle("lg:rotate-180");
					toggleRelated.classList.toggle("lg:rotate-0");
				}
			}}>
			<ul className={ulCSS}>
				<li className="font-bold">{title}</li>
				{!!stars && (
					<li className="flex ml-auto">
						<Stars num={5} />
						<u className="ml-1">{starNum}</u>
					</li>
				)}
				<li className={!stars ? `ml-auto` : undefined}>
					<ToggleView id={`toggle-${id}`} />
				</li>
			</ul>
		</button>
	);
}
