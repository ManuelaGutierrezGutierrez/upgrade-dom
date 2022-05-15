//2.1 Inserta dinamicamente en un html un div vacio con javascript.

let div1 = document.createElement("div");
document.body.appendChild(div1);
div1.classList.add("container");
console.log(div1);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let div2 = document.createElement("div");
div2.innerHTML = "<p></p>";
document.body.appendChild(div2);
console.log(div2);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
// let div3 = document.createElement("div")
let div3 = document.createElement("div");
for (let i = 0; i < 6; i++) {
	div3.appendChild(document.createElement("p"));
}
console.log(div3);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let pText = document.createElement("p");
pText.innerHTML = "Soy dinámico!";
document.body.appendChild(pText);
console.log(pText);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let findH = document.querySelector("h2.fn-insert-here");
findH.innerText = "Wubba Lubba dub dub";
console.log(findH);

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

let myUl = document.createElement("ul");

apps.forEach(function (item) {
	let iList = myUl.appendChild(document.createElement("li"));
	iList.innerHTML = item;
});

console.log(myUl);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let removeElement = document.querySelectorAll(".fn-remove-me");
removeElement.forEach(function (element) {
	document.body.removeChild(element);
});

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//Recuerda que no solo puedes insertar elementos con .appendChild.

let textP = document.createElement("p");
textP.innerHTML = "Voy en medio!";
document.body.insertBefore(
	textP,
	document.querySelectorAll("div[fn-insert-here]")[1]
);
console.log(textP);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let divList = document.querySelectorAll('div[class="fn-insert-here"]');

divList.forEach(function (item) {
	let pInside = document.createElement("p");
	pInside.innerHTML = "Voy dentro!";
	item.appendChild(pInside);
});

console.log(divList);
