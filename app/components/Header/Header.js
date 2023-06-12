"use client";
import Link from "next/link";

import ButtonHeader from "@/header/Button";
import ButtonMain from "@/buttons/Main";
import Hamburger from "@/icons/Hamburger";
import Screen from "@/components/Screen";

export default function Header({ className }) {
	const buttonItems = [
		{ title: "Stores", url: "/" },
		{ title: "Help", buttonIcon: "help", url: "/" },
		{ title: "Account", buttonIcon: "account", url: "/" },
		{ title: "Cart", buttonIcon: "cart", url: "/" },
	];

	const menuItems = [
		{ title: "Lawn Mowers", url: "/lawn-mowers" },
		{ title: "Commerical", url: "#top" },
		{ title: "Service & Parts", url: "#top" },
		{ title: "Attachments", url: "#top" },
	];

	return (
		<ul className="mb-3">
			<li className="">
				<div
					className="max-w-screen-2xl mx-auto text-center text-sm"
					style={{ backgroundColor: "#ffc20f" }}>
					<button
						className="flex items-center justify-center w-full p-2"
						onClick={() => {
							document
								.querySelector("#promo-content")
								.classList.toggle("hidden");
						}}>
						Promo
						<span className="ml-1 w-6">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
								<path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
							</svg>
						</span>
					</button>
					<div className="hidden " id="promo-content">
						<div
							className="mx-auto px-2 py-4 fixed top-0 left-0 w-full z-50 h-full lg:h-auto"
							style={{ backgroundColor: "#ffc20f" }}>
							<button
								onClick={() => {
									document
										.querySelector("#promo-content")
										.classList.toggle("hidden");
								}}
								className="w-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 -960 960 960"
									className="h-12 ml-auto">
									<path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
								</svg>
							</button>
							<div className="container mx-auto mt-2 px-2 py-4 bg-white rounded-xl">
								<h2 className="text-xl font-bold mb-2">
									Lorem ipsum dolor sit amet
								</h2>
								<p className="mb-4 px-12 text-left">
									Mauris ac arcu ipsum. Aliquam et augue at nisl tincidunt
									congue. Fusce tincidunt, nisl vel vehicula dignissim, tortor
									nisl luctus velit, eu aliquet elit ex maximus leo. Maecenas
									sodales ex arcu, consectetur egestas lectus pharetra et. Sed
									tincidunt luctus augue venenatis laoreet. Suspendisse ut
									consectetur metus. Curabitur malesuada, eros sit amet
									fermentum porttitor, metus mi faucibus risus, sed porttitor
									tellus urna ac mi. Morbi sed iaculis eros. Fusce massa quam,
									gravida eu iaculis vel, blandit eget nulla. Nulla eget posuere
									diam, ut rhoncus turpis. Donec sed felis ante. Aliquam dolor
									arcu, mattis vitae arcu et, malesuada gravida nisl. Vivamus in
									felis at felis ultrices vestibulum. Morbi fringilla urna
									lectus, in porta massa aliquam non. Suspendisse ac vehicula
									odio, sed commodo dolor.
								</p>
								<ButtonMain
									title="CTA Button"
									className="bg-black text-white font-uppercase inline-flex rounded justify-center px-8"
								/>
							</div>
						</div>

						<Screen />
					</div>
				</div>
			</li>

			<li className="bg-gray-800">
				<div className="max-w-screen-2xl mx-auto text-center text-white">
					<ul className="flex items-center text-sm">
						<li className="basis-2/12 flex justify-start">
							<a className="flex items-center p-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 -960 960 960"
									className="w-8 mr-1">
									<path
										d="M840-519v339q0 24-18 42t-42 18H179q-24 0-42-18t-18-42v-339q-28-24-37-59t2-70l43-135q8-27 28-42t46-15h553q28 0 49 15.5t29 41.5l44 135q11 35 1.5 70T840-519Zm-270-31q29 0 49-19t16-46l-25-165H510v165q0 26 17 45.5t43 19.5Zm-187 0q28 0 47.5-19t19.5-46v-165H350l-25 165q-4 26 14 45.5t44 19.5Zm-182 0q24 0 41.5-16.5T263-607l26-173H189l-46 146q-10 31 8 57.5t50 26.5Zm557 0q32 0 50.5-26t8.5-58l-46-146H671l26 173q3 24 20.5 40.5T758-550Z"
										class="fill-white"
									/>
								</svg>
								<span className="hidden md:block whitespace-nowrap">
									Dealers
								</span>
							</a>
						</li>
						<li className="flex justify-end ml-auto">
							<ul className="flex items-center">
								{buttonItems.map((menu, i) => (
									<li className="basis-full" key={i}>
										<ButtonHeader
											title={menu.title}
											buttonIcon={menu.buttonIcon}
											fillColor="fill-white"
											mobile
										/>
									</li>
								))}
							</ul>
						</li>
					</ul>
				</div>
			</li>

			<li className="bg-black">
				<div className="max-w-screen-2xl mx-auto">
					<ul className="flex items-center  text-white">
						<li className="lg:w-12">
							<button
								className=""
								onClick={() => {
									document.querySelector("#nav").classList.toggle("hidden");
								}}>
								<Hamburger
									className="min-w-full p-1"
									fillColor="#fff"
									style={{ minWidth: "3em", maxWidth: "3em" }}
								/>
							</button>
						</li>
						<li className="w-40 p-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								// width="180"
								// height="26"
								viewBox="0 0 180 26"
								className="w-full">
								<path
									fill="#F2BB00"
									d="M177.835 23.332h-.426v-.954h.542c.278 0 .579.062.579.46 0 .473-.332.494-.695.494m1.104-.474c0-.577-.295-.858-.921-.858H177v3h.409v-1.291h.435L178.56 25h.44l-.753-1.326c.392-.048.692-.274.692-.816"
								/>
								<path
									fill="#F2BB00"
									d="M177.507 25.631c-1.162 0-2.055-.92-2.055-2.144 0-1.199.893-2.12 2.055-2.12 1.151 0 2.04.921 2.04 2.12 0 1.223-.889 2.144-2.04 2.144m0-4.631c-1.361 0-2.507 1.076-2.507 2.487A2.493 2.493 0 0 0 177.507 26 2.485 2.485 0 0 0 180 23.487 2.48 2.48 0 0 0 177.507 21"
								/>
								<path
									fill="#FFC20F"
									d="M129.352 14.746a681.332 681.332 0 0 1-2.45 5.561c-1.354.857-4.44.414-4.213-2.316.142-1.72 2.687-5.963 6.58-3.955.25.136.177.498.083.71m-20.658 0a681.332 681.332 0 0 1-2.448 5.561c-1.355.857-4.44.414-4.214-2.316.141-1.72 2.687-5.963 6.58-3.955.251.136.176.498.082.71m35.271.279c1.258-2.09 5.343-3.129 6.324-.797.071.167.123.57.103.822-.005.065-.012.2-.185.2h-6.18s-.217.012-.062-.225m19.242 3.38c.357-.955 4.436-9.98 4.436-9.98h8.791c.266 0 .493-.108.614-.375L179 3.838h-9.619l1.303-3.304h-5.817l-1.264 2.86c-.072.166-.25.402-.768.402h-3.045l-2.002 4.631 3.959-.001-5.044 11.677-11.266.012c-.24-.023-2.338.138-2.406-1.673h10.417c.5-.002.932-.29 1.144-.71 1.336-2.84.982-7.108-3.049-8.468-3.221-.967-7.968 0-10.823 3.044-1.744 1.773-3.61 4.951-3.546 7.806h-2.787c-1.153 0-1.449-.852-1.052-1.71.395-.856 7.851-17.863 7.851-17.863h-5.77l-4.446 9.688c-3.35-2.6-14.172.144-14.344 9.895h-3.087c-1.103 0-1.342-.839-.978-1.72.364-.88 4.092-9.208 4.092-9.208h-5.909l-.559 1.17c-4.629-3.044-14.397.99-14.603 9.739l-15.939-.002c-2.593-.017-4.306-2.225-3.279-4.352C79.718 8.809 88.44 5.408 91.522 5.634c1.345.099 1.066 1.285.112 2.51-.257.328.044.62.269.62h5.715c2.348-3.46 2.101-9.359-5.203-8.715C80.174 1.125 69.905 10.966 70 18.585c.043 3.541 3.679 7.122 8.12 7.193h18.375l.729-1.7c3.486 3.447 7.776 1.598 9.146-.482.61 1.3 2.51 2.18 3.414 2.18h6.943l1-2.35c2.975 3.945 7.634 2.825 9.427.185.874 1.46 2.428 2.167 3.166 2.167h7.605l.901-2.105c1.566 1.988 3.524 2.117 3.864 2.104l13.752.002.78-1.791c.383.706 1.98 1.789 3.788 1.789l10.528.002 2.399-5.655h-9.829c-1.052 0-1.258-.765-.902-1.72M59.678 16.363c-.141 1.708-2.707 5.925-6.63 3.93-.253-.135-.177-.495-.082-.706a1261.5 1261.5 0 0 1 2.426-5.505c.086-.053.179-.101.277-.144 1.454-.672 4.225-.143 4.009 2.425m-2.247-6.92L61.418.537h-5.632l-8.77 19.442h-3.653c-.657 0-.91-.674-.592-1.368l4.378-9.537h-6.025s-4.863 10.709-4.933 10.905H34.02c-.707 0-1.102-.57-.757-1.375.418-.974 4.35-9.53 4.35-9.53h-6.036L26.97 19.326c-.005.024-.147.28-.221.653l-17.032-.001c-2.613-.018-4.34-2.212-3.304-4.326C9.793 8.754 18.582 5.374 21.687 5.599c1.355.097 1.072 1.257.113 2.493-.256.33.041.617.271.617h5.759c2.367-3.44 2.117-9.3-5.243-8.66C10.252 1.118-.095 10.897.001 18.468c.043 3.52 3.798 7.148 8.28 7.148H26.7l.815-1.874c.556.823 1.713 1.875 3.358 1.875h5.197s.67-1.417.943-1.953c.45.639 1.56 1.952 3.369 1.952l9.904.004.53-1.097c3.471 2.763 10.4 2.05 13.531-5.622 2.079-5.092-.953-10.746-6.915-9.46"
								/>
							</svg>
						</li>
						{menuItems.map((menu, i) => (
							<li className={`hidden lg:block ${i === 0 && "ml-auto"}`} key={i}>
								<Link href={menu.url} className="px-2 py-3">
									{menu.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</li>
		</ul>
	);
}
