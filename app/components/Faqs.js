import { Fragment } from "react";

const Faqs = ({ faqs, className, id }) => {
	return (
		<div className={`faqs ${className}`} id={id}>
			{faqs.map((block, i) => {
				return (
					<Fragment key={i}>
						<button
							onClick={(e) => {
								e.currentTarget.nextElementSibling.classList.toggle("hidden");
							}}
							className="question cursor-pointer w-full p-3 text-sm">
							<ul className="flex items-center">
								<li
									dangerouslySetInnerHTML={{
										__html: block.question,
									}}
									className="text-left"></li>
								<li className="ml-auto">
									<div className="rotate-45">✖</div>
								</li>
							</ul>
						</button>

						<div
							dangerouslySetInnerHTML={{
								__html: block.answer,
							}}
							className="hidden text-xs p-3"
						/>

						<div className="border-b"></div>
					</Fragment>
				);
			})}
		</div>
	);
};

export default Faqs;
