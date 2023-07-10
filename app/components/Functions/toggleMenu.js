export default function toggleMenu(toggleMe) {
	//console.log(toggleMe);
	document.querySelectorAll(".popup-item").forEach((e) => {
		// console.log(e.id);
		if (toggleMe === null) {
			e.classList.add("hidden");
			document.querySelector("#fixed-screen").classList.add("hidden");
			document.querySelector("body").classList.remove("overflow-hidden");
		} else if (e.id === toggleMe) {
			e.classList.remove("hidden");
			document.querySelector("#fixed-screen").classList.remove("hidden");
			document.querySelector("body").classList.add("overflow-hidden");
		}
	});
}
