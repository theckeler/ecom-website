export default function DummyFilters({ title, className, addStyle, addClick }) {
	return (
		<div className="mt-4">
			<p className="text-lg font-bold mb-2 pb-1 border-b">
				Morbi quis vehicula arcu
			</p>
			<ul className="text-sm">
				<li className="p-1">
					<input type="checkbox" className="mr-2" />
					<label htmlFor="zt">Pellentesque ac tempus (2)</label>
				</li>
				<li className="p-1">
					<input type="checkbox" className="mr-2" />
					<label>Nunc aliquam non (2)</label>
				</li>
				<li className="p-1">
					<input type="checkbox" className="mr-2" />
					<label>Praesent imperdiet nisi (2)</label>
				</li>
				<li className="p-1">
					<input type="checkbox" className="mr-2" />
					<label>Suspendisse sed tincidunt (4)</label>
				</li>
			</ul>
		</div>
	);
}
