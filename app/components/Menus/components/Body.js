import LoremIpsum from "@/components/LoremIpsum";

export default function MenuBody({ className, loadComponent, componentType }) {
	return (
		<div className="p-3 bg-white dark:bg-black dark:text-white">
			<ul className={`${componentType === "mainNav" && "lg:pb-0"}`}>
				{loadComponent ? loadComponent : <LoremIpsum />}
			</ul>
		</div>
	);
}
