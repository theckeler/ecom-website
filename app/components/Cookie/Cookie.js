"use client";

import ButtonMain from "@/buttons/Main";
import GetCookie from "@/functions/GetCookie";
import CreateCookie from "@/components/Functions/CreateCookies";

export default function Cookie() {
	return (
		!GetCookie("acceptCookies") && (
			<div
				className="fixed bottom-0 left-0 z-50 bg-gray-100 p-6 border-t w-full"
				id="cookies">
				<ul className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-1">
					<li className="text-xs font-bold mb-2 lg:mb-0 text-center lg:text-left pr-2">
						This website uses cookies to enhance user experience and to analyze
						performance and traffic on our website. We also share information
						about your use of our site with our social media, advertising and
						analytics partners.
					</li>
					<li className="justify-end">
						<form action={CreateCookie}>
							<ul className="grid gap-1 lg:grid-cols-3 justify-items-stretch auto-rows-max">
								<li>
									<ButtonMain
										title="Cookies Settings"
										className="bg-black text-white p-1 text-xs text-center w-full h-full min-h-[48px] whitespace-nowrap"
									/>
								</li>
								<li>
									<ButtonMain
										title="Reject All But Necessary"
										className="bg-black text-white p-1 text-xs text-center w-full h-full min-h-[48px]"
									/>
								</li>
								<li>
									<ButtonMain
										title="Accept All Cookies"
										className="bg-amber-400 text-black p-1 text-xs text-center w-full h-full min-h-[48px] whitespace-nowrap"
									/>
								</li>
							</ul>
						</form>
					</li>
				</ul>
			</div>
		)
	);
}
