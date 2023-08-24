import LinksReveal from "@/components/Links/Reveal";
import IconDeckBelt from "@/icons/DeckBelt";
import IconChangeBlades from "@/icons/ChangeBlades";
import IconLevelDeck from "@/icons/LevelDeck";
import HelpFindSupport from "./components/FindSupport";
import HelpTrackOrder from "./components/TrackOrder";

export default function Help() {
	const iconCSS = "w-24 mr-4";
	const linkTitleCSS = "text-lg text-bold";
	const titleCSS = "sm:text-2xl";

	return (
		<div className="">
			<div className="px-4 text-sm">
				We provide value to our Cub Cadet owners with support content to help
				you feel confident to tackle simple tasks or advice to extend the
				lifetime of your machine.
			</div>

			<LinksReveal
				{...{
					title: {
						copy: "How-Tos",
						className: titleCSS,
					},
					links: [
						{
							title: "How to Change the Deck Belt on a Riding Mower",
							icon: <IconDeckBelt className={iconCSS} />,
							className: linkTitleCSS,
						},
						{
							title: "How to Change the Blades on a Riding Mower",
							icon: <IconChangeBlades className={iconCSS} />,
							className: linkTitleCSS,
						},
						{
							title: "How to Level the Deck on a Riding Mower",
							icon: <IconLevelDeck className={iconCSS} />,
							className: linkTitleCSS,
						},
						,
						{
							title: "See all how-to content",
							className: `bg-amber-400 text-center p-2 mt-4 uppercase font-bold ${linkTitleCSS}`,
						},
					],
					className: "mt-4",
					row: false,
				}}
			/>

			<div className="sm:pt-4 sm:mt-6 sm:border-t">
				<ul className="sm:grid md:grid-cols-2 gap-4">
					<li>
						<LinksReveal
							{...{
								title: {
									copy: "Track My Order",
									className: titleCSS + " sm:hidden block",
								},
								component: <HelpTrackOrder />,
							}}
						/>
					</li>
					<li>
						<LinksReveal
							{...{
								title: {
									copy: "Find Support by Model",
									className: titleCSS + " sm:hidden block",
								},
								component: <HelpFindSupport />,
							}}
						/>
					</li>
				</ul>
			</div>
		</div>
	);
}
