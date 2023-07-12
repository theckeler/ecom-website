"use client";

export default function FooterTerms() {
	return (
		<ul className="flex flex-col md:flex-row">
			<li className="font-bold">© 2022&nbsp;Cubcadet. All Rights Reserved.</li>
			<li className="md:ml-auto">
				<a
					href="https://www.stanleyblackanddecker.com/privacy-policy"
					className="underline p-4">
					Privacy Policy
				</a>
			</li>
			<li className="">
				<a
					href="https://www.cubcadet.com/en_US/terms-of-use.html"
					className="underline p-4">
					Terms of Use
				</a>
			</li>
			<li className="">
				<a
					href="https://www.cubcadet.com/en_US/online-store-policies.html"
					className="underline p-4">
					Online Store Policies
				</a>
			</li>
		</ul>
	);
}
