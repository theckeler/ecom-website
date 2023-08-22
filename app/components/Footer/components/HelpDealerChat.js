import Help from "@/icons/Help";
import StoreIcon from "@/icons/Store";
import IconChat from "@/icons/Chat";

export default function FooterHelp({ className }) {
	const linkCSS =
		"underline flex items-center justify-center font-bold min-h-default";
	const subCSS = "text-sm text-center w-full";

	return (
		<>
			<ul className="max-w-screen-2xl mx-autogrid mx-auto grid grid-cols-1 md:grid-cols-3 p-4">
				<li className="mb-6">
					<a href="?oops=1" className={linkCSS}>
						<Help
							className="h-8 mr-1"
							style={{ minWidth: "2em", maxWidth: "2em" }}
						/>{" "}
						Help Center
					</a>
					<div className={subCSS}>Find the answers to your questions.</div>
				</li>
				<li className="mb-6">
					<a href="?oops=1" className={linkCSS}>
						<StoreIcon
							className="h-8 mr-1"
							style={{ minWidth: "2em", maxWidth: "2em" }}
						/>{" "}
						Find a Dealer
					</a>
					<div className={subCSS}>Cub Cadet Dealers are here to help.</div>
				</li>
				<li className="">
					<a href="?oops=1" className={linkCSS}>
						<IconChat
							className="h-8 mr-1"
							style={{ minWidth: "2em", maxWidth: "2em" }}
						/>{" "}
						Chat
					</a>
					<div className={subCSS}>Mon–Fri, 6am–8pm EST</div>
				</li>
				
			</ul>
		</>
	);
}
