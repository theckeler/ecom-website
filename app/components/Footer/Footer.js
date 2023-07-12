"use client";

import FooterGlobalSites from "./components/Global";
import FooterTerms from "./components/Terms";
import FooterDisclamers from "./components/Disclamers";
import FooterHelp from "./components/Help";
import BlockSignUp from "./components/SignUp";
import FooterAbout from "./components/About";
import FooterIndependentDealers from "./components/IndependentDealers";
import FooterOwnersCenter from "./components/OwnersCenter";
import FooterCustomerService from "./components/CustomerService";

export default function Footer() {
	const headerCSS = "font-bold text-lg border-b pb-1 mb-2";
	const linkCSS = "text-xs underline";

	return (
		<footer className="border-t border-gray-300 px-4 xxl:px-0 pt-12 pb-20">
			<ul className="max-w-screen-2xl mx-auto">
				<li>
					<ul className="grid sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-7 gap-6">
						<li className="sm:col-span-2 lg:col-span-4 2xl:col-span-3">
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
				<li className="mt-6 pt-4 border-t text-xs leading-tight text-gray-800">
					<FooterDisclamers />
				</li>
			</ul>
		</footer>
	);
}
