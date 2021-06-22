let divConteiner = document.querySelector(".feat-input");
let buttonFixConteiner = document.querySelector(".feat-button");
addConteiner = document.querySelector(".to-do-conteiner");
buttonFixConteiner.addEventListener("click", () => {
  let paragraph = document.createElement("span");
  paragraph.innerText = divConteiner.value;
  addConteiner.append(paragraph);
  divConteiner.value = "";
});
