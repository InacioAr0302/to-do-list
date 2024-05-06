export default function addTarefa() {
  // const tarefa = document.getElementById("tarefa");
  const inputTarefa = document.getElementById("inputTarefa");

  const ul = document.getElementById("ul");
  ul.style.display = "flex";
  ul.style.justifyContent = "center";
  ul.style.alignItems = "center";

  const li1 = document.createElement("li");
  li1.style.listStyle = "none";
  li1.style.display = "flex";
  li1.style.gap = "1.5rem";

  const span = document.createElement("span");
  span.id = "tarefa";
  span.innerText = inputTarefa.value;

  //  editando uma tarefa

  const buttonPencil = document.createElement("button");
  buttonPencil.id = "buttonPencil";
  buttonPencil.classList = "fa fa-pencil";

  buttonPencil.addEventListener("click", () => {
    const editar = prompt("Edite sua tarefa..");
    span.innerText = editar;
  });

  // removendo uma tarefa

  const buttonTrash = document.createElement("button");
  buttonTrash.classList = "fa fa-trash";
  buttonTrash.addEventListener("click", () => {
    const remove = confirm("Realmente deseja excluir a tarefa?");
    if (remove === true) {
      ul.removeChild(li1);
    } else {
      return;
    }
  });

  li1.appendChild(span);
  li1.appendChild(buttonPencil);
  li1.appendChild(buttonTrash);
  ul.appendChild(li1);

  inputTarefa.value = "";
}
