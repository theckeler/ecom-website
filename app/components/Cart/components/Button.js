export default function CartButton({
	className,
	title,
	small,
	shipping,
	active,
}) {
	return (
		<button
			className={`w-full h-full border text-sm p-2 ${
				active && "bg-amber-400"
			} ${!shipping && "opacity-50 cursor-not-allowed"}`}>
			<div className="text-sm font-bold">{title}</div>
			<div className="text-xs mt-1">{shipping ? small : "Unavailable"}</div>
		</button>
	);
}
