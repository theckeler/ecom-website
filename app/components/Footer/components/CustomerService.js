"use client";

export default function FooterCustomerService({ headerCSS, linkCSS }) {
	return (
		<div>
			<h3 className={headerCSS}>Customer Service</h3>
			<ul className="footer-col">
				<li>
					<a
						className={linkCSS}
						data-target="#call-modal"
						data-toggle="modal"
						href="#"
						title="Click for details">
						(877) 428 2349
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/track-my-order"
						title="Go to Track Order">
						Track Order
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/account"
						title="Go to My Account">
						My Account
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/cub-cs-landing-page-2023.html"
						title="Go to Cub Cadet Support site">
						FAQs &amp; Support
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://stanleyblackanddecker.com/brands/product-safety"
						title="Product Safety">
						Product Safety
					</a>
				</li>
			</ul>
		</div>
	);
}
