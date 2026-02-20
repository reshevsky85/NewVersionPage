const typedHome = new Typed(".multiple-text", {
	strings: [
		"Enter the world of the oil team",
		"Know our Factories",
		"Know the oils",
		"Know the suppliers",
		"And lots more",
		"Enjoy and be professional!",
	],
	typeSpeed: 50,
	backSpeed: 10,
	backDelay: 1000,
	loop: true,
});

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");
const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
	sidebar.classList.toggle("close");
	toggleButton.classList.toggle("rotate");
}
