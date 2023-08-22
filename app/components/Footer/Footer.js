import BlockSignUp from "./components/SignUp";
import Terms from "./components/Terms";
import HelpDealerChat from "./components/HelpDealerChat";

import FooterLinks from "@/components/Links/Reveal";
import footerNavData from "@/data/nav-footer.json";

import Icons from "@/icons/Icons";
import ThemeSwitch from "../ThemeSwitch";

export default function Footer() {
	const footerPadding = "px-4";

	return (
		<footer className="pt-4 lg:pt-12 pb-20">
			<HelpDealerChat />

			<hr className="border-t border-gray-300 my-4 md:my-12 max-w-screen-2xl mx-auto" />

			<ul
				className={`max-w-screen-2xl mx-auto lg:flex sm:gap-2 lg:gap-6 ${footerPadding}`}>
				<li className="lg:max-w-lg mb-6 lg:mb-0">
					<BlockSignUp />

					<hr className="border-t border-gray-200 w-full mt-6" />
					<ul className="text-center mt-4">
						<li className="text-sm">How are we doing?</li>
						<li className="text-sm">
							<a href="?oops=1" className="underline">
								Give us feedback
							</a>{" "}
							on this page.
						</li>
					</ul>
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

			<hr className="border-t border-gray-300 my-8 hidden sm:block max-w-screen-2xl mx-auto" />

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
					className: `max-w-screen-2xl mx-auto items-center sm:justify-center lg:justify-start ${footerPadding}`,
					row: true,
					alignRight: false,
				}}
			/>

			<FooterLinks
				{...{
					title: {
						copy: "Social",
						className: "block sm:hidden",
					},
					links: [
						{
							title: "Facebook",
							icon: (
								<Icons icon="facebook" className="w-100 mr-1 dark:fill-white" />
							),
						},
						{
							title: "LinkedIn",
							icon: (
								<Icons icon="linkedin" className="w-100 mr-1 dark:fill-white" />
							),
						},
						{
							title: "Instagram",
							icon: (
								<Icons
									icon="instagram"
									className="w-100 mr-1 dark:fill-white"
								/>
							),
						},
						{
							title: "Twitter",
							icon: (
								<Icons icon="twitter" className="w-100 mr-1 dark:fill-white" />
							),
						},
						{
							title: "YouTube",
							icon: (
								<Icons icon="youtube" className="w-100 mr-1 dark:fill-white" />
							),
						},
					],
					className: `max-w-screen-2xl mx-auto items-center sm:justify-center lg:justify-start ${footerPadding}`,
					row: true,
					alignRight: false,
				}}
			/>

			<FooterLinks
				{...{
					title: {
						copy: "Terms",
						className: "block sm:hidden",
					},
					className: `max-w-screen-2xl mx-auto ${footerPadding}`,
					component: (
						<Terms className="p-5 lg:p-0 lg:pt-8 text-xs leading-tight dark:text-neutral-400" />
					),
				}}
			/>

			<ul
				className={`max-w-screen-2xl mx-auto grid items-center sm:justify-center lg:justify-start gap-4 lg:grid-cols-2 ${footerPadding}`}>
				<li className="lg:ml-auto lg:col-start-2 lg:row-start-1">
					<FooterLinks
						{...{
							title: {
								copy: "Legal",
								className: "block md:hidden",
							},
							links: [
								{ title: "Privacy Policy" },
								{ title: "Terms of Use" },
								{ title: "Online Store Policies" },
							],
							className: "max-w-screen-2xl mx-auto",
							row: true,
						}}
					/>
				</li>
				<li className="text-center lg:text-left text-sm lg:col-start-1 lg:row-start-1 dark:text-neutral-200">
					©2022 Cubcadet. All Rights Reserved.
				</li>
			</ul>

			<div
				className={`col-span-3 max-w-screen-2xl mx-auto text-sm font-bold text-center lg:text-left mt-6 dark:text-white ${footerPadding}`}>
				If you experience any problems accessing this website,{" "}
				<br className="hidden sm:block lg:hidden" />
				please call us at 1-877-428-2349 for assistance.
			</div>

			<ThemeSwitch />
		</footer>
	);
}
