"use client";

import FooterHelp from "./components/Help";
import BlockSignUp from "./components/SignUp";
import FooterLinks from "./components/Links";

export default function Footer() {
	return (
		<footer className="border-t border-gray-300 px-4 xxl:px-0 pt-12 pb-20">
			<ul className="max-w-screen-2xl mx-auto">
				<li>
					<ul className="grid md:grid-cols-2 lg:grid-cols-7 sm:gap-2 lg:gap-6">
						<li className="sm:col-span-2 lg:col-span-3 2xl:col-span-3">
							<BlockSignUp />
						</li>
						<li className="border-t sm:border-t-0 mt-6 sm:pt-1 sm:mt-6 lg:pt-0 lg:mt-0">
							<FooterLinks
								{...{
									className: null,
									row: false,
									alignRight: false,
									links: {
										title: {
											copy: "About Us",
											className: "2xl:text-lg",
										},
										links: [
											"Our Story",
											"How-To Articles",
											"Special Offers",
											"News",
											"Financing",
											"Our Engine Advantage",
										],
									},
								}}
							/>
						</li>
						<li className="mt-0 sm:pt-1 sm:mt-6 lg:pt-0 lg:mt-0">
							<FooterLinks
								{...{
									className: null,
									row: false,
									alignRight: false,
									links: {
										title: {
											copy: "Owner's Center",
											className: "2xl:text-lg",
										},
										links: [
											"Product Recalls",
											"Operator's Manuals",
											"Product Registration",
											"Service Locator",
											"Find a Part",
											"Lookup Parts via Diagram",
											"Cub Cadet Gear",
											"Extended Warranty",
										],
									},
								}}
							/>
						</li>
						<li>
							<FooterLinks
								{...{
									className: null,
									row: false,
									alignRight: false,
									links: {
										title: {
											copy: "Independent Dealers",
											className: "2xl:text-lg",
										},
										links: [
											"Find a Dealer",
											"Dealer Delivery or Pick-Up",
											"Become a Dealer",
											"Dealer Advantage",
											"Right Parts Pledge",
										],
									},
								}}
							/>
						</li>
						<li>
							<FooterLinks
								{...{
									className: null,
									row: false,
									alignRight: false,
									links: {
										title: {
											copy: "Customer Service",
											className: "2xl:text-lg",
										},
										links: [
											"(877) 428 2349",
											"Track Order",
											"My Account",
											"FAQs & Support",
											"Product Safety",
										],
									},
								}}
							/>
						</li>
					</ul>
				</li>
				<li className="mt-6 pt-4 border-b">
					<FooterLinks
						{...{
							className: null,
							row: true,
							alignRight: false,
							links: {
								title: {
									copy: "Global Sites",
									className: "",
								},
								links: ["Canada", "Europe", "Australia", "China"],
							},
						}}
					/>

					<FooterLinks
						{...{
							className: null,
							row: true,
							alignRight: true,
							links: {
								title: {
									copy: "©2022 Cubcadet. All Rights Reserved.",
									className: "text-sm",
								},
								links: [
									"Privacy Policy",
									"Terms of Use",
									"Online Store Policies",
								],
							},
							extra: {
								copy: '<strong>WARRANTY ADDENDUM. IMPORTANT: This addendum defines the start of the warranty period.</strong> The applicable Warranty Period will begin on the original date of purchase of the Product or on the date of delivery of the Product, whichever is later. <strong>Engine Disclaimer: </strong>The engine horsepower information is provided by the engine manufacturer to be used for comparison purposesonly. See your local Cub Cadet Dealer for warranty details.<strong>Pricing Disclaimer:</strong> Posted price is in USD Dollars andis&nbsp;manufacturer&apos;s suggested sale price. Models and pricing mayvary by location. Taxes, freight, set-up&nbsp;and delivery not included.Optional equipment, accessories and attachments sold separately. See yourretailer for details.&nbsp;<strong>Image Disclaimer:</strong>&nbsp;Products may vary from depictedmodel image in design, required attachments, safety features andnon-functional appearance, and may not reflect dealer inventory or unitspecifications.<strong>Specifications Disclaimer:</strong> Specifications subject tochange without notice. Images may not reflect retailer inventory and/orunit specifications.<strong>Operator&apos;s Manual Disclaimer:</strong> The operator&apos;smanual posted is for general information and use. To ensure the downloadof the operator&apos;s manual specific to your unit, we require a modeland serial number.&nbsp;<strong>Speed Disclaimer: </strong>Actual vehicle speed varies based onload, use and environmental conditions.<strong>Battery Disclaimer: </strong>Battery and battery powered productperformance varies with load, use and environmental conditions.<strong>Software Disclaimer:</strong> Software available on Companywebsites is provided on an &apos;&apos;as is&apos;&apos; basis without anywarranty of any kind, either express or implied. The download and use ofany software is done at the user&apos;s own risk.&nbsp;<strong>Professional Products:</strong> Cub Cadet commercial products areintended for professional use.<strong>UTV:</strong> Cub Cadet Utility Vehicles (UTV) are intended foroff-road use by adults only. Please see the operator’s manual and thewarning labels posted on the vehicle itself for more details. <strong>Email disclaimer: </strong>Sign up to receive communication onservices, products and special offers. You may unsubscribe at any time.Please refer to our <a href="#top">Privacy Policy</a>.',
								className: "p-5 text-xs leading-tight",
							},
						}}
					/>
				</li>
				{/* <li className="text-sm">
					<FooterHelp className="mt-4" />
				</li> */}
				{/* <li className="mt-8 text-xs leading-tight text-gray-700">
					<FooterDisclamers />
				</li> */}
			</ul>
		</footer>
	);
}
