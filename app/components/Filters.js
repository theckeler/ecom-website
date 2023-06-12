import AppliedFilter from "./Buttons/AppliedFilter";
import Button from "./Buttons/Main";
import DummyFilters from "./Filters/DummyFilters";

export default function Filters({ className }) {
	return (
		<ul className="p-6">
			<li className="border-b border-gray-400 uppercase font-bold pb-1 mb-1 text-2xl">
				<ul className="flex items-center">
					<li className="basis-11/12">Filter & Sort</li>
					<li className="basis-1/12 text-right">
						<button
							className="w-12 p-1"
							onClick={(e) => {
								document.querySelector("#all-filters").classList.add("hidden");
							}}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
								<path d="m330 768 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42Zm150 208q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Z" />
							</svg>
						</button>
					</li>
				</ul>
			</li>
			<li className="border-b pb-1 mb-1">
				<p className="text-lg">Applied filters:</p>
				<div className="flex my-2">
					<AppliedFilter title="Zero-Turn Mowers" className="mr-1" />
					<AppliedFilter title="Riding Lawn Mowers" className="mr-1" />
					<AppliedFilter title="Lawn Mowers" />
				</div>
			</li>
			<li
				className="max-h-screen overflow-scroll mt-3"
				style={{ maxHeight: "calc(100vh - 270px)" }}>
				<div className="py-3">
					<div>
						<p className="text-lg font-bold mb-2 pb-1 border-b">Sort</p>
						<select className="w-full">
							<option>By Price</option>
						</select>
					</div>

					<div className="mt-4">
						<p className="text-lg font-bold mb-2 pb-1 border-b">Series</p>
						<ul className="text-sm">
							<li className="p-1">
								<input type="checkbox" className="mr-2" id="zt" />
								<label htmlFor="zt">Ultima Series™ ZT (6)</label>
							</li>
							<li className="p-1">
								<input type="checkbox" className="mr-2" />
								<label>Ultima Series™ ZTS (2)</label>
							</li>
							<li className="p-1">
								<input type="checkbox" className="mr-2" />
								<label>Ultima Series™ (2)</label>
							</li>
							<li className="p-1">
								<input type="checkbox" className="mr-2" />
								<label>ZTX Ultima Series™ ZTXS (4)</label>
							</li>
						</ul>
					</div>

					{[...Array(6)].map((x, i) => (
						<DummyFilters key={i} />
					))}
				</div>
			</li>
			<li className="border-t border-gray-400 py-2">
				<ul className="flex">
					<li className="basis-9/12 mr-2">
						<Button
							title="View 34"
							className="bg-amber-400 w-full p-2 rounded-xl uppercase font-bold"
							noIcon={true}
						/>
					</li>
					<li className="basis-3/12">
						<Button
							title="Reset"
							className="bg-gray-300 w-full p-2 rounded-xl uppercase text-sm h-full"
							noIcon={true}
						/>
					</li>
				</ul>
			</li>
		</ul>
	);
}
