export default function toggleMenu(toggleMe) {
	document.querySelectorAll(".popup-item").forEach((e) => {
		e.classList.add("hidden");
	});
	if (toggleMe !== null) {
		document.querySelector(`#${toggleMe}`).classList.remove("hidden");
		document.querySelector("#sticky-nav").scrollIntoView();
	}
}
