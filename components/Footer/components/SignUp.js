"use client";

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
		</ul>
	);
}
