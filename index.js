import addTarefa from "./addTarefa.js";

const inputTarefa = document.getElementById("inputTarefa");
const newTarefa = document.getElementById("addTarefa");

// chamando a função para adicionar uma tarefa
newTarefa.addEventListener("click", (nT) => {
  nT.preventDefault();
  if (inputTarefa.value === "") {
    alert("Primeiro digite o nome da tarefa no campo específico");
  } else {
    addTarefa();
  }
});
