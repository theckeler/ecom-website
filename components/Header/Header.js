import Link from "next/link";

import Button from "@/header/Button";
import Ham from "@/icons/Hamburger";
import Cart from "@/icons/Cart";

export default function Header({ className }) {
	return (
		<ul className="mb-3">
			{/* <li className="bg-gray-600">
				<div className="max-w-screen-2xl mx-auto text-center text-white p-1">
					<ul className="flex flex-col lg:flex-row p-3">
						<li className="basis-2/12 flex justify-start">
							<a>Dealer</a>
						</li>
						<li className="basis-full">
							<div>Promo</div>
						</li>
						<li className="basis-4/12 flex justify-end">
							<ul className="flex flex-col lg:flex-row items-center w-full text-xs">
								<li className="basis-full">
									<Button title="Find a Store" fillColor="fill-white" />
								</li>
								<li className="basis-full">
									<Button
										title="Help"
										buttonIcon="help"
										fillColor="fill-white"
									/>
								</li>
								<li className="basis-full">
									<Button
										title="Account"
										buttonIcon="account"
										fillColor="fill-white"
									/>
								</li>
								<li className="basis-full">
									<Button
										title="Cart"
										buttonIcon="cart"
										fillColor="fill-white"
									/>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</li> */}

			<li className="bg-black">
				<div className="max-w-screen-2xl mx-auto">
					<ul className="p-3 flex flex-col lg:flex-row text-white">
						<li>
							<Link href="/">Home</Link>
						</li>
						{/* <li>Lawn Mowers</li>
						<li>Commerical</li>
						<li>Service & Parts</li>
						<li>Attachments</li> */}
					</ul>
				</div>
			</li>
		</ul>
	);
}
