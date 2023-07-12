"use client";

export default function FooterGlobalSites() {
	return (
		<div>
			<ul className="text-sm flex ">
				<li className="font-bold">
					<h2>Global Sites:</h2>
				</li>
				<li className="ml-2">
					<a href="https://www.cubcadet.ca" className="underline">
						Canada
					</a>
				</li>
				<li className="ml-2">
					<a href="https://eu.cubcadet.com/en/" className="underline">
						Europe
					</a>
				</li>
				<li className="ml-2">
					<a href="http://www.cubcadet.com.au/" className="underline">
						Australia
					</a>
				</li>
				<li className="ml-2">
					<a href="http://www.cubcadet.cn/" className="underline">
						China
					</a>
				</li>
			</ul>
		</div>
	);
}
