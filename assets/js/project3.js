const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("ul");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  toDo();
  input.value = "";
});
function toDo() {
  if (input.value === "") {
    alert("value is empty");
  } else {
    let value = input.value;
    let newList = document.createElement("li");
    let text = document.createElement('p');
    let deleteBtn = document.createElement("button");

    text.textContent = value;
    deleteBtn.textContent = "Delete";
    list.append(newList);
    newList.append(text);
    newList.append(deleteBtn);
  }
}

list.addEventListener("click", function (e) {
  if (e.target.nodeName === "BUTTON") {
    e.target.closest("LI").remove();
  }
});
