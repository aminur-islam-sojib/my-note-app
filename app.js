const addBtn = document.querySelector(".btn");
const cancelBtn = document.querySelector(".cancelBtn2");
const cancelBtn2 = document.querySelector(".cancelBtn");
const input = document.querySelector("#title");
const saveBtn3 = document.querySelector("#saveBtn33");
let notes = [];

function loadNotes() {
  const saveNotes = localStorage.getItem("userNotes");
  return saveNotes ? JSON.parse(saveNotes) : [];
}

function openNoteDialog() {
  const dialog = document.querySelector("dialog");

  if (dialog) {
    return dialog.showModal();
  } else {
    // return "No dialog found";
  }
}

function closeNoteDialog() {
  document.querySelector("dialog").close();
}

function saveNote() {
  // e.preventDefault();

  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;

  if (title === "" && content === "") {
    document.getElementById("errMsg").innerHTML = "Please Input a message";
  } else {
    notes.push({ title: title, content: content });
    renderNote();
  }
}

function saveNotes() {
  localStorage.setItem("userNotes", JSON.stringify(notes));
}

addBtn.addEventListener("click", () => {
  openNoteDialog();
  input.focus();
});

cancelBtn.addEventListener("click", () => {
  closeNoteDialog();
});

cancelBtn2.addEventListener("click", () => {
  closeNoteDialog();
});

function clearInput() {
  document.querySelector("#title").value = "";
  document.querySelector("#content").value = "";
}

saveBtn3.addEventListener("click", () => {
  saveNote();
  renderNote();
  saveNotes();

  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;
  if (title !== "" || content !== "") {
    closeNoteDialog();
    clearInput();
  }
});

function renderNote() {
  const container = document.getElementById("notesContainer");

  container.innerHTML = notes
    .map(
      (note) => `
  
    <div class="card">
    <div  class = "inHeading">
    <h1>${note.title}</h1>
    <div><button class="deleteBtn">❌</button></div>
    </div>
    <p class = "inCaption">${note.content}</p>
    </div>

  `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  notes = loadNotes();
  renderNote();
});

console.log(notes);
