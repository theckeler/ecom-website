import Facebook from "./Facebook";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";
import Instagram from "./Instagram";
import YouTube from "./YouTube";

export default function Icons({ icon, className }) {
	const iconList = {
		facebook: Facebook,
		linkedin: LinkedIn,
		twitter: Twitter,
		instagram: Instagram,
		youtube: YouTube,
	};

	const Icon = iconList[icon];
	if (typeof Icon === "function") {
		return <Icon className={className} />;
	}
}
