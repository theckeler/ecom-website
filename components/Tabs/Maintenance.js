import ToggleButton from "../Buttons/Toggle";
import Button from "@/components/Buttons/Main";
import ScrollButton from "../Buttons/Scroll";
import Article from "@/components/Product/Article";

const articles = [
	{
		title: "How to Change the Air Filter in Zero-Turn Lawn Mower",
		copy: "Changing the air filter in your zero-turn lawn mower is very easy with a little direction. Watch our instructional video that will take you step by step through",
		type: "MAINTENANCE",
		url: "?oops=1#Click-the-Zero-Turn-Mowers-link-that-is-the-plp",
	},
	{
		title: "How to Change the Deck Belt on a Cub Cadet Zero-Turn Rider",
		copy: "Change the mower deck belt on your Cub Cadet zero-turn mower with these helpful tips. Cub Cadet has the mower deck parts and advice you need to do a mower deck belt replacement on your own. Learn mower about repairing your",
		type: "REPAIRS",
		url: "?oops=1#Click-the-Zero-Turn-Mowers-link-that-is-the-plp",
	},
	{
		title: "How to Change the Gas on a Cub Cadet Zero-Turn Rider",
		copy: "Changing the air filter in your zero-turn lawn mower is very easy with a little direction. Watch our instructional video that will take you step by step through",
		type: "MAINTENANCE",
		url: "?oops=1#Click-the-Zero-Turn-Mowers-link-that-is-the-plp",
	},
	{
		title: "How to Change the Oil on a Cub Cadet Zero-Turn Rider",
		copy: "Learn how to change the oil in a riding lawn mower with instructions from Cub Cadet. Our video and tips make changing the lawn mower oil on your zero-turn",
		type: "MAINTENANCE",
		url: "?oops=1#Click-the-Zero-Turn-Mowers-link-that-is-the-plp",
	},
	{
		title: "Maintenance Schedule and Tips",
		copy: "Learn how to keep your mower running smoothly with Cub Cadet's zero-turn mower maintenance schedule and tips.",
		type: "MAINTENANCE",
		url: "?oops=1#Click-the-Zero-Turn-Mowers-link-that-is-the-plp",
	},
	{
		title: "Zero-Turn Operation Tips",
		copy: "Find out how to use a zero-turn riding lawn mower with these tips from Cub Cadet. Zero-turn mowers allow you greater control over your lawn, especially",
		type: "TRICKS AND TIPS",
		url: "?oops=1#Click-the-Zero-Turn-Mowers-link-that-is-the-plp",
	},
];

export default function TabMaintenance() {
	return (
		<div className="border-b">
			<ToggleButton title="Maintenance" id="maintance" />

			<div className="group/buttons hidden relative" id="maintance-text">
				<ScrollButton
					buttonType="back"
					rotate={true}
					className="left-0 -translate-x-1/4"
					onClick={(e) => {
						document.querySelector("#maintance-container").scrollTo({
							top: 0,
							left: -document
								.querySelector("#maintance-scroll")
								.getBoundingClientRect().width,
							behavior: "smooth",
						});
					}}
				/>

				<ScrollButton
					buttonType="forward"
					className="right-0 translate-x-1/4"
					onClick={(e) => {
						document.querySelector("#maintance-container").scrollTo({
							top: 0,
							left: document
								.querySelector("#maintance-scroll")
								.getBoundingClientRect().width,
							behavior: "smooth",
						});
					}}
				/>

				<Article articles={articles} />
			</div>
		</div>
	);
}
