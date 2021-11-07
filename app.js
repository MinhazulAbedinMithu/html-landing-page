const handleMenu = () => {
	const menu = document.querySelector(".menu-icon");
	menu.classList.toggle("change-icon");
};

const nav = document.querySelector("nav");

window.onscroll = () => {
	this.scrollY > 20 ? nav.classList.add("sticky")
		: nav.classList.remove("sticky");
};

const galleryFilter = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

galleryFilter.addEventListener("click", (e) => {
	if (e.target.classList.contains("filter-item")) {
		galleryFilter.querySelector(".active").classList.remove("active");
		e.target.classList.add("active");

		const filterValue = e.target.getAttribute("data-filter");

		galleryItems.forEach((item) => {
			if (item.classList.contains(filterValue) || filterValue === "all") {
				item.classList.remove("hide");
				item.classList.add("show");
			} else {
				item.classList.remove("show");
				item.classList.add("hide");
			}
		});
	}
});
