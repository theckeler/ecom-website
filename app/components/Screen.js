export default function Screen({}) {
	return (
		<div
			className="fixed left-0 top-0 z-40 bg-black flex w-screen h-screen opacity-70"
			onClick={() => {
				document.querySelector("#nav").classList.toggle("hidden");
			}}
		/>
	);
}
