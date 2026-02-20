$(document).ready(function () {
  $("#batonik").click(function () {
    $("#oils_per_supplier").slideToggle("slow");
  });
  $("#batonik2").click(function () {
    $("#oils_per_supplier2").slideToggle("slow");
  });
  $("#batonik3").click(function () {
    $("#oils_per_supplier3").slideToggle("slow");
  });
  $("#batonik4").click(function () {
    $("#oils_per_supplier4").slideToggle("slow");
  });
  $("#cargillek").click(function () {
    $("#cargill_open").fadeToggle("slow");
  });

  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");
const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

myButton.addEventListener("click", (event) => {
  if (myImg.style.display === "none") {
    myImg.style.display = "block";
    myButton.textContent = "hide";
  } else {
    myImg.style.display = "none";
    myButton.textContent = "show";
  }
});

function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("rotate");
}
function toggleSubMenu(button) {
  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");
}
