"use client";

import FooterSocial from "./Social";
import InputButton from "@/components/Form/InputButton";

export default function BlockSignUp() {
	return (
		<ul>
			<li>
				<form
					data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/MCSubscription-FooterSubscribe"
					id="email-subscribe-form"
					role="form"
					autoComplete="on">
					<h2 className="relative font-bold p-4 sm:p-0 sm:pb-1 lg:pb-3 flex 2xl:text-lg border-b mb-4 dark:text-neutral-400">
						Sign up for Emails from Cub Cadet
					</h2>
					<div className="px-4">
						<label
							htmlFor="email-signup"
							className="text-xs mb-4 block dark:text-white">
							Sign up to receive communication on services, products and special
							offers. You may unsubscribe at any time. Please refer to our{" "}
							<a
								href="https://www.cubcadet.com/en_US/privacy-and-security/privacy-policy.html"
								className="underline">
								Privacy Policy
							</a>
							.
						</label>

						<InputButton
							{...{
								className: null,
								padding: "p-3",
								input: {
									id: "email-signup",
									placeholder: "Enter in your email address",
									name: "email-signup",
									className: "border-amber-400 border-2 dark:bg-neutral-800",
								},
								button: {
									title: "Next",
									ariaLabel: null,
									className: "bg-amber-400",
								},
							}}
						/>
					</div>
				</form>
			</li>
			{/* <li>
				<div className="content-asset">
					<a
						className="footer-button finance-options display-body font-bold"
						href="https://www.cubcadet.com/en_US/financing"
						title="Go to Finance Options">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							id="svg10"
							version="1.1"
							viewBox="0 0 24 24"
							height={24}
							width={24}>
							<defs id="defs14" />
							<g
								style={{ fill: "none", fillRule: "evenodd" }}
								id="g8"
								transform="translate(1,1)">
								<circle
									style={{ stroke: "#ffc20f" }}
									id="circle2"
									r={11}
									cy={11}
									cx={11}
								/>
								<g id="text6" style={{ fill: "#ffffff" }} aria-label="$">
									<path
										id="path823"
										d="m 14.704,12.32 q 0,1.168 -0.816,1.984 -0.736,0.768 -1.92,0.992 V 16 H 10.256 V 15.296 Q 7.9839998,14.928 7.2959998,12.624 l 1.808,-0.496 q 0.288,0.96 1.1520002,1.248 v -2.352 q -1.2800002,-0.336 -1.9200002,-0.848 -0.848,-0.688 -0.848,-1.84 0,-1.104 0.864,-1.824 0.736,-0.624 1.9040002,-0.8 v -0.88 h 1.712 V 5.68 q 1.392,0.24 2.352,1.552 l -1.392,1.152 q -0.4,-0.544 -0.96,-0.816 v 1.936 q 2.736,0.8 2.736,2.816 z M 10.256,7.6 q -0.8160002,0.224 -0.8160002,0.736 0,0.448 0.8160002,0.736 z m 2.48,4.768 q 0,-0.544 -0.768,-0.848 v 1.856 q 0.768,-0.256 0.768,-1.008 z"
									/>
								</g>
							</g>
						</svg>
						<span>Finance Options</span>
					</a>
					<a
						className="footer-button find-a-dealer display-body font-bold"
						href="https://www.cubcadet.com/en_US/servicelocator"
						title="Go to Service Locator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={16}
							height={24}
							viewBox="0 0 16 24">
							<g fill="none" fillRule="evenodd" transform="translate(1 1)">
								<path
									stroke="#FFC20F"
									d="M0 6.923C0 3.089 3.13 0 6.986 0 10.87 0 14 3.09 14 6.923 14 9.726 8.522 19.424 6.986 23 5.478 19.452 0 9.726 0 6.923z"
								/>
								<circle cx={7} cy={6} r={3} fill="#FFF" />
							</g>
						</svg>
						<span>Find Service</span>
					</a>
				</div>
			</li>
			<li>
				<FooterSocial />
			</li> */}
		</ul>
	);
}
