export default function IconCart({
	className = null,
	fillColor = "fill-black",
	cartNum = 3,
}) {
	return (
		<div className="relative">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 96 960 960"
				className={className}>
				<path d="M286.788 975Q257 975 236 953.788q-21-21.213-21-51Q215 873 236.212 852q21.213-21 51-21Q317 831 338 852.212q21 21.213 21 51Q359 933 337.788 954q-21.213 21-51 21Zm400 0Q657 975 636 953.788q-21-21.213-21-51Q615 873 636.212 852q21.213-21 51-21Q717 831 738 852.212q21 21.213 21 51Q759 933 737.788 954q-21.213 21-51 21ZM205 255h589.074q22.964 0 34.945 21Q841 297 829 318L694 561q-11 19-28.559 30.5Q647.881 603 627 603H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Z" />
			</svg>
			<div className="absolute -top-1 right-1 w-5 h-5 flex justify-center items-center rounded-full bg-amber-400 text-black text-xs">
				{cartNum}
			</div>
		</div>
	);
}
