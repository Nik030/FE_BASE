// const mainDiv = document.createElement("div")
// mainDiv.classList.add("main")
// console.log(mainDiv.classList);
// document.body.append(mainDiv)
// console.log(mainDiv.classList.contains("test"));
// mainDiv.classList.replace("main", "test")
// console.log(mainDiv.classList);

// const div = document.querySelector("div")
// console.log(div.classList);
// div.classList.toggle("hello")
// div.classList.remove("test2")
// console.log(div.classList);
// div.classList.replace("test2", "hello")
// =====================================
// const div = document.querySelector(".main")
// const switchButton = document.querySelector(".switch")
// switchButton.addEventListener("click", function() {
    // =====================================
    // if(div.classList.contains("color")) {
    //     div.classList.remove("color")
    // } else {
    //     div.classList.add("color")
    // }
    // =====================================
    // div.classList.toggle("color")
    // =====================================
// })
// =====================================
// const addColor = document.querySelector(".addColor")
// const removeColor = document.querySelector(".removeColor")

// addColor.addEventListener("click", function() {
//     div.classList.add("color")
// })

// removeColor.addEventListener("click", function() {
//     div.classList.remove("color")
// })

// вместо двух баттон использовать один
// и когда добавляем класс color то поменять цвет текстa который в диве с классом main на белый и поменять цвет фона на черный а при повторном клике удалить класс color
// =====================================
// const cardsDiv = document.querySelector(".cards")
// const cardsElems = []
// for (let index = 0; index < 10; index++) {
//     const card = document.createElement("div") // <div></div>
//     card.innerText = index+1 // <div>{index}</div>
//     card.classList.add("card") // <div class="card">{index}</div>
//     card.addEventListener("click", callback)
//     cardsElems.push(card)
//     cardsDiv.append(card)
// }

// event.target
// function callback(event) {
//     console.log(event);
//     for (let index = 0; index < cardsElems.length; index++) {
//         cardsElems[index].classList.remove("active")
//     }
//     event.target.classList.add("active")
// }
// Доработать этот код 
// при нажатии на какой то квадрат удалить класс active у остальных

// создать новый массив с названием cardsElems
// добавить каждый card который создаем внутри цикла в этот новый массив
// объявить callbakc вне цикла 
// удалить у всех остальных card которые хранятся в массиве cardsElems класс active а у target добавить класс active


const words = [
    {
        en: "cat",
        ru: "кот"
    },
    {
        en: "dog",
        ru: "собака"
    },
    {
        en: "bird",
        ru: "птица"
    },
    {
        en: "flower",
        ru: "цветок"
    }
]

{/* 
<div class="card">
    <p class="ru">Кот</p>
    <p class="en">Cat</p>
</div> 
*/}
const cardsDiv = document.querySelector(".cards")
const ruParagraphs = [];
const enParagraphs = [];

for (let index = 0; index < words.length; index++) {
    const div = document.createElement("div")
    div.classList.add("card")
    const {en, ru} = words[index]
    const ruParagraph = document.createElement("p")
    // ruParagraph.classList.add("ru") // .ru
    ruParagraph.innerText = ru
    ruParagraphs.push(ruParagraph)

    const enParagraph = document.createElement("p")
    // enParagraph.classList.add("en") // .en
    enParagraph.innerText = en
    enParagraph.classList.add("hidden")
    enParagraphs.push(enParagraph)

    div.append(ruParagraph, enParagraph)
    cardsDiv.append(div)
}

const ruBtn = document.querySelector("#ruBtn")
const enBtn = document.querySelector("#enBtn")
// const ruParagraphs = document.querySelectorAll(".ru")
// const enParagraphs = document.querySelectorAll(".en")

ruBtn.addEventListener("click", function() {
    // for (let index = 0; index < ruParagraphs.length; index++) {
    //     ruParagraphs[index].classList.remove("hidden")
    // }
    // for (let index = 0; index < enParagraphs.length; index++) {
    //     enParagraphs[index].classList.add("hidden")
    // }

    for (let index = 0; index < words.length; index++) {
        ruParagraphs[index].classList.remove("hidden")
        enParagraphs[index].classList.add("hidden")
    }
})

enBtn.addEventListener("click", function() {
    // for (let index = 0; index < ruParagraphs.length; index++) {
    //     ruParagraphs[index].classList.add("hidden")
    // }
    // for (let index = 0; index < enParagraphs.length; index++) {
    //     enParagraphs[index].classList.remove("hidden")
    // }

    for (let index = 0; index < words.length; index++) {
        ruParagraphs[index].classList.add("hidden")
        enParagraphs[index].classList.remove("hidden")
    }
})
// при нажатии на кнопки ru, en все карточки переключить либо на русский либо на английский соотвественно
