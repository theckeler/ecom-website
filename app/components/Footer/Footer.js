"use client";

export default function Footer() {
	return (
		<footer className="bg-black text-white pt-12 pb-20">
			<ul className="max-w-screen-2xl mx-auto">
				<li className="">
					<ul className="grid grid-cols-3">
						<li className="">
							<div className="content-asset">
								<div className="container">
									<form
										data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/MCSubscription-FooterSubscribe"
										id="email-subscribe-form"
										role="form"
										autoComplete="on">
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group">
													<label htmlFor="email-signup">
														Sign up for Emails from Cub Cadet
														<br />
														<span className="legal">
															Sign up to receive communication on services,
															products and special offers. You may unsubscribe
															at any time. Please refer to our
															<a
																className="footer-link"
																href="https://www.cubcadet.com/en_US/privacy-and-security/privacy-policy.html">
																Privacy Policy
															</a>
															.
														</span>
													</label>
													<div className="input-group">
														<input
															aria-label="Join our Email List"
															className="form-control"
															data-missing-msg="Please fill out this field."
															data-missing-type="Required Field:"
															id="email-signup"
															name="hpEmailSignUp"
															pattern="^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$"
															placeholder="Enter Your Email Address"
															type="email"
															autoComplete="email"
														/>
														<span className="input-group-btn">
															<button
																className="btn btn-secondary"
																type="submit">
																Go
															</button>
														</span>
														<div className="invalid-feedback">&nbsp;</div>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</li>
						<li className="">
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
										<g
											fill="none"
											fillRule="evenodd"
											transform="translate(1 1)">
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
						<li className="">
							<ul className="social-links">
								<li>
									<a
										className="social-icon facebook"
										title="Go to Facebook"
										href="https://www.facebook.com/cubcadet/"
										target="_blank"
									/>
								</li>
								<li>
									<a
										className="social-icon instragram"
										title="Go to Instagram"
										href="https://www.instagram.com/cubcadet_usa/"
										target="_blank"
									/>
								</li>
								<li>
									<a
										className="social-icon twitter"
										title="Go to Twitter"
										href="https://twitter.com/CubCadet_USA"
										target="_blank"
									/>
								</li>
								<li>
									<a
										className="social-icon youtube"
										title="Go to YouTube"
										href="https://www.youtube.com/user/CubCadetRidingMowers"
										target="_blank"
									/>
								</li>
							</ul>
						</li>
					</ul>
					<ul className="grid grid-cols-4">
						<li className="footer-item ">
							<div className="content-asset">
								<h3 className="footer-category-heading">About Us</h3>
								<ul className="footer-col">
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/about-us.html">
											Our Story
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/knowledge-center.html">
											How-To Articles
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/seasonal-offers.html">
											Special Offers
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/current-news/">
											News
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/financing">
											Financing
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/engine-advantage.html">
											Our Engine Advantage
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li className="footer-item ">
							<div className="content-asset">
								<h3 className="footer-category-heading">Owner&apos;s Center</h3>
								<ul className="footer-col">
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/product-recalls.html">
											Product Recalls
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/operatorsmanuals"
											title="Go to Operator's Manuals">
											Operator&apos;s Manuals
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/content-asset-page-includes/registration.html">
											Product Registration
										</a>
									</li>
									<li>
										<a
											className="locate-store footer-link"
											href="https://www.cubcadet.com/en_US/servicelocator"
											title="Go to Service Locator">
											Service Locator
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/service-and-parts#part-finder">
											Find a Part
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/service-and-parts#diagrams">
											Lookup Parts via Diagram
										</a>
									</li>
									<li>
										<a className="footer-link" href="https://cubcadetgear.us/">
											Cub Cadet Gear
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/ew-info-page.html"
											target="_self"
											title="Find Your Warranty Plan"
											aria-label="Extended Warranty">
											Extended Warranty
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li className="footer-item ">
							<div className="content-asset">
								<h3 className="footer-category-heading">Independent Dealers</h3>
								<ul className="footer-col">
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers">
											Find a Dealer
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/dealer-delivery-or-pick-up.html">
											Dealer Delivery or Pick-Up
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/become-a-dealer.html">
											Become a Dealer
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/dealer-advantage.html">
											Dealer Advantage
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/Right-Parts-Pledge.html">
											Right Parts Pledge
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li className="footer-item ">
							<div className="content-asset">
								<h3 className="footer-category-heading">Customer Service</h3>
								<ul className="footer-col">
									<li>
										<a
											className="footer-link"
											data-target="#call-modal"
											data-toggle="modal"
											href="#"
											title="Click for details">
											(877) 428 2349
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/track-my-order"
											title="Go to Track Order">
											Track Order
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/account"
											title="Go to My Account">
											My Account
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://www.cubcadet.com/en_US/cub-cs-landing-page-2023.html"
											title="Go to Cub Cadet Support site">
											FAQs &amp; Support
										</a>
									</li>
									<li>
										<a
											className="footer-link"
											href="https://stanleyblackanddecker.com/brands/product-safety"
											title="Product Safety">
											Product Safety
										</a>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</li>

				<li className="footer-info-links">
					<div className="footer-site-links col-lg-6">
						<div className="content-asset">
							<h6>Global Sites</h6>
							<ul>
								<li className="site-link">
									<a href="https://www.cubcadet.ca">Canada</a>
								</li>
								<li className="site-link">
									<a href="https://eu.cubcadet.com/en/">Europe</a>
								</li>
								<li className="site-link">
									<a href="http://www.cubcadet.com.au/">Australia</a>
								</li>
								<li className="site-link">
									<a href="http://www.cubcadet.cn/">China</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-md-12 col-lg-6 copyright-notice">
						<div className="content-asset">
							<div className="copyright">
								<div className="terms-privacy-links">
									<span className="copyright-text">
										© 2022&nbsp;Cubcadet. All Rights Reserved.
									</span>
									<span>
										<a href="https://www.stanleyblackanddecker.com/privacy-policy">
											Privacy Policy
										</a>
									</span>
									<span>
										<a href="https://www.cubcadet.com/en_US/terms-of-use.html">
											Terms of Use
										</a>
									</span>
									<span>
										<a href="https://www.cubcadet.com/en_US/online-store-policies.html">
											Online Store Policies
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</li>

				<li className="text-sm">
					If you experience any problems accessing this website, please call us
					at
					<a
						aria-label="8 7 7. 4 2 8. 2 3 4 9.” title="
						call=""
						customer=""
						service=""
						style={{ color: "#979797" }}>
						<strong>1-877-428-2349</strong>
					</a>
					for assistance.
				</li>

				<li className="text-xs">
					<strong>
						WARRANTY ADDENDUM. IMPORTANT: This addendum defines the start of the
						warranty period.
					</strong>
					The applicable Warranty Period will begin on the original date of
					purchase of the Product or on the date of delivery of the Product,
					whichever is later.
					<strong>Engine Disclaimer: </strong>The engine horsepower information
					is provided by the engine manufacturer to be used for comparison
					purposes only. See your local Cub Cadet Dealer for warranty details.
					<strong>Pricing Disclaimer:</strong> Posted price is in USD Dollars
					and is&nbsp;manufacturer&apos;s suggested sale price. Models and
					pricing may vary by location. Taxes, freight, set-up&nbsp;and delivery
					not included. Optional equipment, accessories and attachments sold
					separately. See your retailer for details.&nbsp;
					<strong>Image Disclaimer:</strong>
					Products may vary from depicted model image in design, required
					attachments, safety features and non-functional appearance, and may
					not reflect dealer inventory or unit specifications.
					<strong>Specifications Disclaimer:</strong> Specifications subject to
					change without notice. Images may not reflect retailer inventory
					and/or unit specifications.
					<strong>Operator&apos;s Manual Disclaimer:</strong> The
					operator&apos;s manual posted is for general information and use. To
					ensure the download of the operator&apos;s manual specific to your
					unit, we require a model and serial number.&nbsp;
					<strong>Speed Disclaimer: </strong>Actual vehicle speed varies based
					on load, use and environmental conditions.
					<strong>Battery Disclaimer: </strong>Battery and battery powered
					product performance varies with load, use and environmental
					conditions. <strong>Software Disclaimer:</strong> Software available
					on Company websites is provided on an &apos;&apos;as is&apos;&apos;
					basis without any warranty of any kind, either express or implied. The
					download and use of any software is done at the user&apos;s own
					risk.&nbsp;
					<strong>Professional Products:</strong> Cub Cadet commercial products
					are intended for professional use.
					<strong>UTV:</strong> Cub Cadet Utility Vehicles (UTV) are intended
					for off-road use by adults only. Please see the operator’s manual and
					the warning labels posted on the vehicle itself for more details.{" "}
					<strong>Email disclaimer: </strong>Sign up to receive communication on
					services, products and special offers. You may unsubscribe at any
					time. Please refer to our
					<a
						className="footer-link"
						href="https://www.cubcadet.com/en_US/privacy-and-security/privacy-policy.html">
						Privacy Policy
					</a>
					.
				</li>
			</ul>
		</footer>
	);
}
