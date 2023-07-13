export default function CartButton({
	className,
	title,
	small,
	shipping,
	active,
}) {
	//console.log(active);

	return (
		<button
			className={`w-full border text-sm py-2 ${active && "bg-amber-400"} ${
				!shipping && "opacity-50"
			}`}>
			<div className="font-bold">{title}</div>
			<div className="text-xs mt-1">{shipping ? small : "Unavailable"}</div>
		</button>
	);
}
