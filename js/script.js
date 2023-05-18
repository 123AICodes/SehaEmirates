const specDropdown = document.querySelector(".dropdown-container.spec");
const facDropdown = document.querySelector(".dropdown-container.fac");
const specBTN = document.querySelector(".nav-link.spec");
const facBTN = document.querySelector(".nav-link.fac");
const navbar = document.querySelector(".navbar"),
	menuBtnOpen = document.querySelector(".menuBtn:nth-child(1)"),
	menuBtnClose = document.querySelector(".menuBtn:nth-child(2)");

specBTN.addEventListener("click", () => {
	specDropdown.classList.toggle("show");
	facDropdown.classList.remove("show");
});
facBTN.addEventListener("click", () => {
	facDropdown.classList.toggle("show");
	specDropdown.classList.remove("show");
});

menuBtnOpen.onclick = () => {
	navbar.classList.add("active");
	menuBtnOpen.style.display = "none";
	menuBtnClose.style.display = "inline-block";
};
menuBtnClose.onclick = () => {
	navbar.classList.remove("active");
	menuBtnClose.style.display = "none";
	menuBtnOpen.style.display = "inline-block";
};

window.addEventListener("scroll", () => {
	document.querySelector(".header-container").classList.toggle("scrollFix", window.scrollY > 50);
	document.querySelector(".goTop").classList.toggle("active", window.scrollY > 20);
});


function toggleDropdown(button) {
	var dropdowns = document.querySelectorAll(".dropdown");

	dropdowns.forEach(function (dropdown) {
		if (dropdown.contains(button)) {
			dropdown.classList.toggle("active");
		} else {
			dropdown.classList.remove("active");
		}
	});
}

AOS.init({
	duration: 1200
});


// loadmore
let loadMoreButton = document.querySelector('.btn.loadmore');
let currentItem = 3;

loadMoreButton.onclick = () => {
	let cards = [...document.querySelectorAll('.doctors-container .dr-grid.dr .box')];
	for (var i = currentItem; i < currentItem + 3; i++) {
		cards[i].style.display = 'inline-block';
	}
	currentItem += 3;
	if (currentItem >= cards.length) {
		loadMoreButton.style.display = 'none';
	}
};