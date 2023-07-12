"use client";

export default function FooterAbout({ headerCSS, linkCSS }) {
	return (
		<div>
			<h3 className={headerCSS}>About Us</h3>
			<ul className="footer-col">
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/about-us.html">
						Our Story
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/knowledge-center.html">
						How-To Articles
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/seasonal-offers.html">
						Special Offers
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/current-news/">
						News
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/financing">
						Financing
					</a>
				</li>
				<li>
					<a
						className={linkCSS}
						href="https://www.cubcadet.com/en_US/engine-advantage.html">
						Our Engine Advantage
					</a>
				</li>
			</ul>
		</div>
	);
}
