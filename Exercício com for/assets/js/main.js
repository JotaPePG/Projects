const elements = [
	{tag: "p", texto: "Frase 1"},
	{tag: "div", texto: "Frase 2"},
	{tag: "section", texto: "Frase 3"},
	{tag: "footer", texto: "Frase 4"}
]

const container = document.querySelector(".container");
const box = document.createElement("div");
box.classList.add("box");

let tittle = document.createTextNode("Lorem ipsum porra!");
let head = document.createElement("h1");
head.appendChild(tittle);
box.appendChild(head);

for (let index = 0; index < elements.length; index++) {
	let { tag, texto } = elements[index];
	let createdTag = document.createElement(tag);
	let textNode = document.createTextNode(texto);

	createdTag.appendChild(textNode);
	box.appendChild(createdTag);
}

container.appendChild(box);
box.style.backgroundColor = "red";