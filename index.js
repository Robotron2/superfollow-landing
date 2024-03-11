// Toggling the mobile menu and changing the icon
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.querySelector("#menu-btn .fa-bars");
const closeIcon = document.querySelector("#menu-btn .fa-times");

// Initially, the close (times) icon is hidden
closeIcon.style.display = "none";

menuBtn.addEventListener("click", function () {
	if (mobileMenu.classList.contains("hidden")) {
		mobileMenu.classList.remove("hidden");
		menuIcon.style.display = "none";
		closeIcon.style.display = "block";
	} else {
		mobileMenu.classList.add("hidden");
		menuIcon.style.display = "block";
		closeIcon.style.display = "none";
	}
});

// Close the mobile menu if the user clicks outside of it
window.addEventListener("click", function (e) {
	if (
		!menuBtn.contains(e.target) &&
		!mobileMenu.contains(e.target) &&
		!mobileMenu.classList.contains("hidden")
	) {
		mobileMenu.classList.add("hidden");
		menuIcon.style.display = "block";
		closeIcon.style.display = "none";
	}
});

function toggleMenu() {
	const mobileMenu = document.getElementById("mobile-menu");
	mobileMenu.classList.toggle("hidden");

	const menuIcon = document.getElementById("menu-icon");
	menuIcon.innerHTML = mobileMenu.classList.contains("hidden")
		? "&#9776;"
		: "&#x2715;";
}

function toggleAccordion(button) {
	const content = button.nextElementSibling;
	const btnText = button.querySelector(".accordion-btn");

	content.classList.toggle("accordion-open");
	btnText.textContent = content.classList.contains("accordion-open")
		? "-"
		: "+";

	const allAccordions = document.querySelectorAll(".accordion-content");
	allAccordions.forEach((acc) => {
		if (acc !== content && acc.classList.contains("accordion-open")) {
			acc.classList.remove("accordion-open");
			const otherBtnText =
				acc.previousElementSibling.querySelector(".accordion-btn");
			otherBtnText.textContent = "+";
		}
	});
}
