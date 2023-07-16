import AppliedFilter from "@/buttons/AppliedFilter";
import Button from "@/buttons/Main";
import DummyFilters from "./components/DummyFilters";

export default function Filters({ className }) {
	return (
		<ul className="">
			<li className="border-b pb-1 mb-1">
				<p className="text-lg">Applied filters:</p>
				<div className="flex my-2">
					<AppliedFilter title="Zero-Turn Mowers" className="mr-1" />
					<AppliedFilter title="Riding Lawn Mowers" className="mr-1" />
					<AppliedFilter title="Lawn Mowers" />
				</div>
			</li>
			<li className="mt-3" style={{ maxHeight: "calc(100vh - 270px)" }}>
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
		</ul>
	);
}
