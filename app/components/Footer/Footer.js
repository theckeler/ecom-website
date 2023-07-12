"use client";

import FooterGlobalSites from "./Global";
import FooterTerms from "./Terms";
import FooterDisclamers from "./Disclamers";
import FooterHelp from "./Help";
import BlockSignUp from "./SignUp";
import FooterAbout from "./About";
import FooterIndependentDealers from "./IndependentDealers";
import FooterOwnersCenter from "./OwnersCenter";
import FooterCustomerService from "./CustomerService";

export default function Footer() {
	const headerCSS = "font-bold text-lg border-b pb-1 mb-2";
	const linkCSS = "text-xs underline";

	return (
		<footer className="border-t border-gray-300 px-4 xxl:px-0 pt-12 pb-20">
			<ul className="max-w-screen-2xl mx-auto">
				<li>
					<ul className="grid grid-cols-7 gap-6">
						<li className="col-span-3">
							<BlockSignUp />
						</li>
						<li className="">
							<FooterAbout {...{ headerCSS, linkCSS }} />
						</li>
						<li>
							<FooterOwnersCenter {...{ headerCSS, linkCSS }} />
						</li>
						<li>
							<FooterIndependentDealers {...{ headerCSS, linkCSS }} />
						</li>
						<li>
							<FooterCustomerService {...{ headerCSS, linkCSS }} />
						</li>
					</ul>
				</li>
				<li className="mt-6 pt-4 border-t">
					<FooterGlobalSites />
				</li>
				<li className="mt-6 pt-4 border-t text-sm">
					<FooterTerms />
					<FooterHelp className="mt-4" />
				</li>
				<li className="mt-6 pt-4 border-t text-xs leading-tight text-gray-400">
					<FooterDisclamers />
				</li>
			</ul>
		</footer>
	);
}
