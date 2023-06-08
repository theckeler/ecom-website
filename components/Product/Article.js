import Button from "@/buttons/Main";

export default function Article({ articles }) {
	return (
		<div
			className="mb-6 overflow-scrollbar overflow-x-auto py-2"
			id="maintance-container">
			<ul className="flex" id="maintance-scroll">
				{articles.map(function (article, i) {
					return (
						<li
							key={i}
							className="p-2"
							style={{ minWidth: "240px", maxWidth: "240px" }}>
							<a
								href="#top"
								className="group flex flex-col mb-4 md:mb-0 px-5 py-7 bg-gray-200 lg:hover:bg-amber-200 rounded-md h-full select-auto">
								<h3 className="text-lg font-bold w-full">{article.title}</h3>
								<p className="text-xs leading-5 mt-3 mb-3">{article.copy}</p>
								<Button
									title="Read Article"
									noIcon={false}
									className="flex items-center justify-center px-1 py-2 mt-auto text-sm font-bold bg-amber-300 rounded-lg w-full group-hover:bg-black group-hover:text-white"
								/>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
