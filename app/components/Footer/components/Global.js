"use client";

export default function FooterGlobalSites() {
	return (
		<div>
			<ul className="text-sm flex ">
				<li className="font-bold">
					<h2>Global Sites:</h2>
				</li>
				<li className="">
					<a href="https://www.cubcadet.ca" className="underline p-4">
						Canada
					</a>
				</li>
				<li className="">
					<a href="https://eu.cubcadet.com/en/" className="underline p-4">
						Europe
					</a>
				</li>
				<li className="">
					<a href="http://www.cubcadet.com.au/" className="underline p-4">
						Australia
					</a>
				</li>
				<li className="">
					<a href="http://www.cubcadet.cn/" className="underline p-4">
						China
					</a>
				</li>
			</ul>
		</div>
	);
}
