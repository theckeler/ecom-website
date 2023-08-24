export default function Button({ blocks }) {
	return (
		<ul className="list-disc px-8 text-xs leading-6">
			{blocks.map((block, i) => {
				return (
					<li className="mt-5" key={i}>
						{block}
					</li>
				);
			})}
		</ul>
	);
}
