"use client";

export default function FooterIndependentDealers({ headerCSS, linkCSS }) {
	return (
		<div>
			<h3 className={headerCSS}>Independent Dealers</h3>
			<ul className="footer-col">
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers">
						Find a Dealer
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/dealer-delivery-or-pick-up.html">
						Dealer Delivery or Pick-Up
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/become-a-dealer.html">
						Become a Dealer
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/dealer-advantage.html">
						Dealer Advantage
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/Right-Parts-Pledge.html">
						Right Parts Pledge
					</a>
				</li>
			</ul>
		</div>
	);
}
