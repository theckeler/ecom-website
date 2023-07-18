export default function ToggleMenu(e, toggleMe) {
	document.querySelector("body").classList.remove("overflow-hidden");
	document.querySelector(`#screen`).classList.add("hidden");
	document.querySelectorAll(".popup-item").forEach((e) => {
		e.classList.add("hidden");
	});
	if (toggleMe !== null) {
		document.querySelector(`#${toggleMe}`).classList.remove("hidden");
		document.querySelector("#screen").classList.remove("hidden");
		document.querySelector("body").classList.add("overflow-hidden");
	}
}
