$(document).ready(function () {
	$("#slot").click(function () {
		$("#slot1").slideToggle("slow");
	});
});

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");
const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
	sidebar.classList.toggle("close");
	toggleButton.classList.toggle("rotate");
}
function toggleSubMenu(button) {
	button.nextElementSibling.classList.toggle("show");
	button.classList.toggle("rotate");
}
