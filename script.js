import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

const firebaseConfig = {
  databaseURL:
    "https://leads-trucker-app-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
		<li>
			<p>${leads[i]}</p>
		</li>
		`;
  }
  ulEl.innerHTML = listItems;
}

onValue(referenceInDB, function (snapshot) {
  const snapshotDoesExist = snapshot.exists();
  if (snapshotDoesExist) {
    const snapshotValues = snapshot.val();
    const leads = Object.values(snapshotValues);
    render(leads);
  }
});

deleteBtn.addEventListener("dblclick", function () {
  remove(referenceInDB);
  ulEl.innerHTML = "";
});

inputBtn.addEventListener("click", function () {
  push(referenceInDB, inputEl.value);
  inputEl.value = "";
});

//
const modal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

// Open the modal when clicking "Open Modal" button
openModalButton.addEventListener("click", () => {
  modal.style.display = "flex"; // Display modal as a flexbox
});

// Close the modal when clicking the close button
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
const filterInput = document.getElementById("filterInput");
const tableBody = document.getElementById("tableBody");
const noResults = document.getElementById("noResults");

filterInput.addEventListener("keyup", function () {
  const filterValue = this.value.toLowerCase();
  const rows = tableBody.getElementsByTagName("tr");
  let visibleCount = 0;

  for (let row of rows) {
    const text = row.textContent.toLowerCase();
    if (text.includes(filterValue)) {
      row.classList.remove("hidden");
      visibleCount++;
    } else {
      row.classList.add("hidden");
    }
  }

  noResults.style.display = visibleCount === 0 ? "block" : "none";
});
