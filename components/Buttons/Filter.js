import Filters from "../../components/Filters";

export default function Filter({}) {
	return (
		<>
			<button
				className="bg-amber-400 rounded p-3"
				onClick={() => {
					document.querySelector("#all-filters").classList.toggle("hidden");
				}}>
				<ul className="flex items-center">
					<li className="h-6 w-6 xl:mr-2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
							<path d="M425 946V707h73v84h352v73H498v82h-73Zm-315-82v-73h265v73H110Zm192-169v-83H110v-73h192v-84h73v240h-73Zm123-83v-73h425v73H425Zm160-168V205h73v83h192v73H658v83h-73Zm-475-83v-73h425v73H110Z" />
						</svg>
					</li>
					<li className="hidden xl:block text-xs uppercase">All Filters</li>
				</ul>
			</button>

			<div
				className="hidden fixed top-0 right-0 z-50 w-full lg:w-6/12 xl:w-5/12 2xl:w-3/12 h-screen bg-white border-l-0 lg:border-l lg:border-l-4 border-amber-200"
				id="all-filters">
				<Filters />
			</div>
		</>
	);
}
