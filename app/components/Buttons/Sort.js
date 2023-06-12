export default function Sort({}) {
	return (
		<button
			className="bg-amber-400 rounded p-3"
			onClick={() => {
				document.querySelector("#all-filters").classList.toggle("hidden");
			}}>
			<ul className="flex items-center">
				<li className="h-6 w-6 xl:mr-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
						<path d="M111 843v-73h255v73H111Zm0-242v-73h497v73H111Zm0-243v-73h739v73H111Z" />
					</svg>
				</li>
				<li className="hidden xl:block text-xs uppercase">Sort</li>
			</ul>
		</button>
	);
}
