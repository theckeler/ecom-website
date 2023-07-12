"use client";

export default function FooterOwnersCenter({ headerCSS, linkCSS }) {
	return (
		<div>
			<h3 className={headerCSS}>Owner&apos;s Center</h3>
			<ul className="footer-col">
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/product-recalls.html">
						Product Recalls
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/operatorsmanuals"
						title="Go to Operator's Manuals">
						Operator&apos;s Manuals
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/content-asset-page-includes/registration.html">
						Product Registration
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/servicelocator"
						title="Go to Service Locator">
						Service Locator
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/service-and-parts#part-finder">
						Find a Part
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/service-and-parts#diagrams">
						Lookup Parts via Diagram
					</a>
				</li>
				<li>
					<a className={linkCSS} href="https://cubcadetgear.us/">
						Cub Cadet Gear
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/ew-info-page.html"
						target="_self"
						title="Find Your Warranty Plan"
						aria-label="Extended Warranty">
						Extended Warranty
					</a>
				</li>
			</ul>
		</div>
	);
}
