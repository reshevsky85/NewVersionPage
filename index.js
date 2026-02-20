$(document).ready(function () {
  $("#first_sap_screen").click(function () {
    $("#test").slideToggle("slow");
  });
  $("#first_sap_screen2").click(function () {
    $("#test2").slideToggle("slow");
  });
  $("#first_sap_screen3").click(function () {
    $("#test3").slideToggle("slow");
  });
  $("#first_sap_screen4").click(function () {
    $("#test4").slideToggle("slow");
  });
  $("#first_sap_screen5").click(function () {
    $("#test5").slideToggle("slow");
  });
  $("#first_sap_screen6").click(function () {
    $("#test6").slideToggle("slow");
  });
  $("#first_sap_screen7").click(function () {
    $("#test7").slideToggle("slow");
  });
  $("#first_sap_screen8").click(function () {
    $("#test8").slideToggle("slow");
  });
});

// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");
// const toggleButton = document.getElementById("toggle-btn");
// const sidebar = document.getElementById("sidebar");

// myButton.addEventListener("click", (event) => {
//   if (myImg.style.display === "none") {
//     myImg.style.display = "block";
//     myButton.textContent = "hide";
//   } else {
//     myImg.style.display = "none";
//     myButton.textContent = "show";
//   }
// });

// function toggleSidebar() {
//   sidebar.classList.toggle("close");
//   toggleButton.classList.toggle("rotate");
// }
// function toggleSubMenu(button) {
//   button.nextElementSibling.classList.toggle("show");
//   button.classList.toggle("rotate");
// }
// Get the input field element
const searchInput = document.getElementById("myInput");

// Add an event listener that triggers on every key press in the search field
searchInput.addEventListener("keyup", function () {
  // 1. Get the search query, and convert it to uppercase for case-insensitive search
  const filter = searchInput.value.toUpperCase();

  // 2. Get all the rows in the table body
  const tableRows = document.querySelectorAll("#myTable tr");

  // 3. Loop through each table row
  tableRows.forEach((row) => {
    // Get the text content of the entire row
    const rowText = row.textContent || row.innerText;

    // 4. Check if the row's text includes the filter text
    if (rowText.toUpperCase().includes(filter)) {
      // If it matches, make sure the row is visible
      row.style.display = "";
    } else {
      // If it doesn't match, hide the row
      row.style.display = "none";
    }
  });
});
document.querySelectorAll(".modal-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-target");
    const modal = document.getElementById(modalId);

    // Hide all modals first
    document.querySelectorAll(".slide-modal").forEach((m) => {
      if (m !== modal) m.classList.remove("show");
    });

    // Toggle the clicked one
    modal.classList.toggle("show");
  });
});

document.querySelectorAll(".close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    const modalId = closeBtn.getAttribute("data-target");
    document.getElementById(modalId).classList.remove("show");
  });
});
