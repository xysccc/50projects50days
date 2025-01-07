const doms = {
  addBtn: document.getElementById("add"),
  body: document.body,
};
doms.addBtn.addEventListener("click", () => addNoteDom());
function addNoteDom(text = "") {
  let isEdit = false;
  const note = document.createElement("div");
  note.className = "note";
  note.innerHTML = `<div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class='main${isEdit ? "hidden" : ""}'></div>
    <textarea class='${isEdit ? "" : "hidden"}'></textarea>`;
  const editBtn = note.querySelector(".edit");
  const mainDiv = note.querySelector(".main");
  const textarea = note.querySelector("textarea");
  const delBtn = note.querySelector(".delete");
  mainDiv.innerHTML = `<p>${text}</p>`;
  textarea.value = text;
  textarea.addEventListener("input", setlocalStorage);
  editBtn.addEventListener("click", function () {
    isEdit = !isEdit;
    mainDiv.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
    if (!isEdit) {
      const p = document.createElement("p");
      p.append(textarea.value);
      mainDiv.replaceChildren(p);
    }
  });

  delBtn.addEventListener("click", function () {
    note.remove();
    setlocalStorage();
  });
  doms.body.append(note);
}
function setlocalStorage() {
  const textareas = document.querySelectorAll("textarea");
  const values = Array.from(textareas, (v) => v.value);
  localStorage.setItem("notes", JSON.stringify(values));
}
function init() {
  const notes = JSON.parse(localStorage.getItem("notes"));
  for (const v of notes) {
    addNoteDom(v);
  }
}
init();