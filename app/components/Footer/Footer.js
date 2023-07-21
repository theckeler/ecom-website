"use client";

import BlockSignUp from "./components/SignUp";
import Terms from "./components/Terms";

import FooterLinks from "@/components/Links/Reveal";
import footerNavData from "@/data/nav-footer.json";

export default function Footer() {
	const footerPadding = "px-4";

	return (
		<footer className="pt-4 lg:pt-12 pb-20">
			<hr className="border-t border-gray-300 my-4 md:my-12" />

			<ul
				className={`max-w-screen-2xl mx-auto lg:flex sm:gap-2 lg:gap-6 ${footerPadding}`}>
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

			<hr className="border-t border-gray-300 my-8 hidden sm:block" />

			<FooterLinks
				{...{
					title: {
						copy: "Social",
						className: "block sm:hidden",
					},
					links: [
						{ title: "Facebook", icon: "test" },
						{ title: "Instagram" },
						{ title: "Twitter" },
						{ title: "YouTube" },
					],
					className: `max-w-screen-2xl mx-auto items-center sm:justify-center lg:justify-start ${footerPadding}`,
					row: true,
					alignRight: false,
				}}
			/>

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
						copy: "Terms",
						className: "block sm:hidden",
					},
					className: `max-w-screen-2xl mx-auto ${footerPadding}`,
					component: (
						<Terms className="p-5 lg:p-0 lg:pt-8 text-xs leading-tight" />
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
				<li className="text-center lg:text-left text-sm lg:col-start-1 lg:row-start-1">
					©2022 Cubcadet. All Rights Reserved.
				</li>
			</ul>

			<div
				className={`max-w-screen-2xl mx-auto text-sm font-bold text-center lg:text-left mt-6 ${footerPadding}`}>
				If you experience any problems accessing this website,{" "}
				<br className="lg:hidden" />
				please call us at 1-877-428-2349 for assistance.
			</div>
		</footer>
	);
}
