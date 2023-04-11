// DOM -> document object model
// .main {}
// #main {}
// div

// const paragraph = document.querySelector(p)
// // console.log(paragraph);

// const paragraphs = document.querySelectorAll("p")
// console.log(paragraphs);

// for (let index = 0; index < paragraphs.length; index++) {
//     console.log(paragraphs[index]);
// }

// const paragraph = document.querySelector(".second-box p")
// console.log(paragraph);

// const p = document.querySelector(".f-paragraph")
// console.log(p);
// p.innerText = "Hello world"

// const div = document.querySelector(".second-box")
// console.log(div.innerHTML);
// div.innerHTML = `<a href="#">Test</a>`

// взять все параграфы с классом item и поменять текст внутри них на "Hello"
// 1 - получить все параграфы с классом item с помощью метода querySelectorAll
// 2 - пройтись по каждому параграфу с помощью цикла
// 3 - поменять значения свойства innerText на "Hello"

// const itemsList = document.querySelectorAll("p.item")
// for (let index = 0; index < itemsList.length; index++) {
//     itemsList[index].innerText = "Hello"
// }

// взять все параграфы с классом item, пройтись циклом по каждому параграфу и добавить в новый массив текстовое содержание каждого параграфа и новый массив вывести в консоли
// 1 - получить все параграфы с классом item с помощью метода querySelectorAll
// 2 - создать новый пустой массив
// 3 - пройтись по каждому параграфу с помощью цикла
// 4 - значение свойства innerText каждого параграфа добавить в новый массив
// 5 - вывести массив в консоли

// const itemsList = document.querySelectorAll("p.item")
// const newArray = []
// for (let index = 0; index < itemsList.length; index++) {
//     newArray.push(itemsList[index].innerText)
// }

// console.log(newArray);

// const imgELem = document.querySelector("img")
// console.log(imgELem.src);
// console.log(imgELem.alt);

// imgELem.setAttribute("src", "https://timesofindia.indiatimes.com/photo/77573846/77573846.jpg")
// imgELem.setAttribute("alt", "image")
// imgELem.setAttribute("data-content", "new")

// взять все img из див с классом main и потом только первым 4 img поменять src на что-то другое

// 1 - получить все img который кнутри div с классом main с помощью метода querySelectorAll
// 2 - пройтись по первым 4 img с помощью цикла
// 3 - использовать метод setAttribute и поменять у каждого img значение src на что-то другое
// const imgList = document.querySelectorAll("div.main img")
// for (let index = 0; index < 4; index++) {
//     imgList[index].setAttribute("src", "https://timesofindia.indiatimes.com/photo/77573846/77573846.jpg")
// }

// const pElem = document.createElement("p")
// const pElem2 = document.createElement("p")
// const divElem = document.querySelector(".main")
// pElem.innerText = "1"
// pElem2.innerText = "2"
// divElem.prepend(pElem, pElem2)
// divElem.prepend(pElem, pElem2)
// divElem.appendChild(pElem)

const paragraphsTexts = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"]

// пройтись по массиву paragraphsTexts, создать для каждого элемента из масива параграф, добавить туда значение элемента из массива а потом новый параграф добавить внутри дива с айди paragraphs
// 1 - получить див с айди paragraphs и хранить в какой то переменной
// 2 - пройтись циклом по массиву paragraphsTexts
// 3 - создать на каждом шагу новый html элемент параграфа и хранить в переменной
// 4 - добавить значение элемента из массива в новый параграф
// 5 - добавить новый параграф в див с айди paragraphs

const div = document.querySelector("#paragraphs")

for (let index = 0; index < paragraphsTexts.length; index++) {
    const p = document.createElement("p")
    p.innerText = paragraphsTexts[index]
    div.append(p)
}