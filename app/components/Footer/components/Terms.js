"use client";

export default function FooterTerms() {
	return (
		<ul className="flex md:items-center flex-col md:flex-row">
			<li className="font-bold">© 2022&nbsp;Cubcadet. All Rights Reserved.</li>
			<li className="md:ml-auto">
				<a
					href="https://www.stanleyblackanddecker.com/privacy-policy"
					className="underline py-4 md:p-2 block">
					Privacy Policy
				</a>
			</li>
			<li className="">
				<a
					href="https://www.cubcadet.com/en_US/terms-of-use.html"
					className="underline py-4 md:p-2 block">
					Terms of Use
				</a>
			</li>
			<li className="">
				<a
					href="https://www.cubcadet.com/en_US/online-store-policies.html"
					className="underline py-4 md:p-2 block">
					Online Store Policies
				</a>
			</li>
		</ul>
	);
}
