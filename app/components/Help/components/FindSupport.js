import InputButton from "@/form/InputButton";

export default function HelpFindSupport() {
	const iconCSS = "w-24 mr-4";
	const titleCSS = "text-base text-bold";

	return (
		<div className="bg-gray-200 p-4">
			<strong className="text-2xl">Find Support by Model</strong>
			<p className="text-xs mt-1">
				Your model number is essential to finding the right replacement parts,
				product manuals, or locating parts on your machine.
			</p>
			<p className="text-xs mt-2">
				The Model number is eleven characters long and is printed on the left of
				the product identification label. Characters can include numbers,
				letters or hyphens.
			</p>
			<a
				href="#top"
				className="underline text-xs text-center block w-full p-4 bg-gray-300 mt-4">
				Can&apos;t find your model number?
			</a>

			<InputButton
				{...{
					className: "mt-4",
					padding: "p-2",
					input: {
						id: "find-support",
						placeholder: "Model, part or item number",
						name: "find-support",
						className: "border-amber-400 border-2",
					},
					button: {
						title: "Find Support",
						ariaLabel: null,
						className: "bg-amber-400 text-black",
					},
				}}
			/>
		</div>
	);
}
