"use client";

import BlockSignUp from "./components/SignUp";
import FooterLinks from "../Links/Reveal";
import footerNavData from "@/data/nav-footer.json";

export default function Footer() {
	return (
		<footer className="border-t border-gray-300 px-4 xxl:px-0 pt-12 pb-20">
			<ul className="max-w-screen-2xl mx-auto">
				<li>
					<ul className="lg:flex sm:gap-2 lg:gap-6">
						<li className="lg:max-w-lg mb-6 lg:mb-0">
							<BlockSignUp />
						</li>
						<li className="grow">
							<ul className="sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-4 w-full">
								{footerNavData.map((block, i) => {
									return (
										<li className="sm:pt-1 sm:mt-6 lg:pt-0 lg:mt-0" key={i}>
											<FooterLinks {...block} key={i} />
										</li>
									);
								})}
							</ul>
						</li>
					</ul>

					<FooterLinks
						{...{
							title: {
								copy: "Global Sites",
								className: "",
							},
							links: [
								{ title: "Canada" },
								{ title: "Europe" },
								{ title: "Australia" },
								{ title: "China" },
							],
							className: "",
							row: true,
							alignRight: false,
						}}
					/>
					<FooterLinks
						{...{
							title: {
								copy: "©2022 Cubcadet. All Rights Reserved.",
								className: "text-sm",
							},
							links: [
								{ title: "Privacy Policy" },
								{ title: "Terms of Use" },
								{ title: "Online Store Policies" },
							],
							className: "",
							row: true,
							alignRight: false,
							extra: {
								copy: '<strong>WARRANTY ADDENDUM. IMPORTANT: This addendum defines the start of the warranty period.</strong> The applicable Warranty Period will begin on the original date of purchase of the Product or on the date of delivery of the Product, whichever is later. <strong>Engine Disclaimer: </strong>The engine horsepower information is provided by the engine manufacturer to be used for comparison purposesonly. See your local Cub Cadet Dealer for warranty details.<strong>Pricing Disclaimer:</strong> Posted price is in USD Dollars andis&nbsp;manufacturer&apos;s suggested sale price. Models and pricing mayvary by location. Taxes, freight, set-up&nbsp;and delivery not included.Optional equipment, accessories and attachments sold separately. See yourretailer for details.&nbsp;<strong>Image Disclaimer:</strong>&nbsp;Products may vary from depictedmodel image in design, required attachments, safety features andnon-functional appearance, and may not reflect dealer inventory or unitspecifications.<strong>Specifications Disclaimer:</strong> Specifications subject tochange without notice. Images may not reflect retailer inventory and/orunit specifications.<strong>Operator&apos;s Manual Disclaimer:</strong> The operator&apos;smanual posted is for general information and use. To ensure the downloadof the operator&apos;s manual specific to your unit, we require a modeland serial number.&nbsp;<strong>Speed Disclaimer: </strong>Actual vehicle speed varies based onload, use and environmental conditions.<strong>Battery Disclaimer: </strong>Battery and battery powered productperformance varies with load, use and environmental conditions.<strong>Software Disclaimer:</strong> Software available on Companywebsites is provided on an &apos;&apos;as is&apos;&apos; basis without anywarranty of any kind, either express or implied. The download and use ofany software is done at the user&apos;s own risk.&nbsp;<strong>Professional Products:</strong> Cub Cadet commercial products areintended for professional use.<strong>UTV:</strong> Cub Cadet Utility Vehicles (UTV) are intended foroff-road use by adults only. Please see the operator’s manual and thewarning labels posted on the vehicle itself for more details. <strong>Email disclaimer: </strong>Sign up to receive communication onservices, products and special offers. You may unsubscribe at any time.Please refer to our <a href="?oops=1#Click-the-Zero-Turn-Mowers-link-that-is-the-plp">Privacy Policy</a>.',
								className: "p-5 lg:p-0 lg:pt-8 text-xs leading-tight",
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
