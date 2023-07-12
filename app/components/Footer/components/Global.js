"use client";

export default function FooterGlobalSites() {
	return (
		<div>
			<ul className="text-sm flex items-center flex-col md:flex-row">
				<li className="font-bold">
					<h2>Global Sites:</h2>
				</li>
				<li className="">
					<a
						href="https://www.cubcadet.ca"
						className="underline py-4 lg:p-2 block">
						Canada
					</a>
				</li>
				<li className="">
					<a
						href="https://eu.cubcadet.com/en/"
						className="underline py-4 lg:p-2 block">
						Europe
					</a>
				</li>
				<li className="">
					<a
						href="http://www.cubcadet.com.au/"
						className="underline py-4 lg:p-2 block">
						Australia
					</a>
				</li>
				<li className="">
					<a
						href="http://www.cubcadet.cn/"
						className="underline py-4 lg:p-2 block">
						China
					</a>
				</li>
			</ul>
		</div>
	);
}
