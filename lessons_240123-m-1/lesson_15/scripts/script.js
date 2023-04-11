// function printHello(text) {
//     console.log(`Hello ${text}`);
// }

// function printBye(text) {
//     console.log(`By ${text}`);
// }

// function getNameOfUser(callback) {
//     const name = prompt("Write your name")
//     // helloCallback(name)
//     // byeCallback(name)
//     callback(name)
// }

// // getNameOfUser(printHello, printBye)

// getNameOfUser(printHello)

// getNameOfUser(printBye)

// function forEach(arr, callback) {
//     for (let index = 0; index < arr.length; index++) {
//         callback(arr[index])
//     }
// }

// const arrayOfNumbers = [5, 26, 58, 20, 23, 0, 1, 35]
// function print(value) {
//     console.log(value)
// }

// function pow(value) {
//     console.log(value**2);
// } 

// forEach(arrayOfNumbers, print)
// forEach(arrayOfNumbers, pow)

// 1 - надо создать функцию с названием pow которая получает всего лишь один аргумент
// 2 - внутри функции pow выводим квадрат значение этого аргумента в консоли
// 3 - передавать эту функцию pow в forEach как callback функцию

// const pElem = document.querySelector("p")
// function clicked() {
//     console.log(`Clicked`);
// }
// pElem.addEventListener("click", clicked)

// =========================================================================
// const incrButton = document.querySelector("#incr")
// const decrButton = document.querySelector("#decr")
// const pElem = document.querySelector("p")
// let counter = 0

// function clickHandlerIncr() {
//     counter++
//     pElem.innerText = counter
// }
// incrButton.addEventListener("click", clickHandlerIncr)

// function clickHandlerDecr() {
//     counter--
//     pElem.innerText = counter
// }
// decrButton.addEventListener("click", clickHandlerDecr)

// написать функцию для события клик на баттоне (Decrement) при срабатывания которой значение уменьшится на единичку
// 1 - надо получить кнопку декремента в javascript_e
// 2 - перехватить событие клика на этой кнопке
// 3 - создать функцию которая уменьшает значение счетчика на единицу
// 4 - и вызваить эту функцию при клике на кнопку Decrement

// const pElem = document.querySelector("p")

// document.addEventListener("keydown", function(event) {
//     console.log(event.key);
    
//     // if (event.key === "Backspace") {
//     //     let a = pElem.innerText.split('')
//     //     a.pop()
//     //     pElem.innerText = a.join('')
//     //     return
//     // }

//     pElem.innerText += event.key
// })


// const pElem = document.createElement("p")
// pElem.innerText = "Click"
// pElem.addEventListener("click", function() {
//     console.log(`Clicked`);
// })

// document.body.append(pElem)


//Написать программу, которая формирует на основе массива строк множество параграфов и добавляет их в див с классом main. При клике на парагараф текст должен меняться на звездочки (*****).
const strArr = ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4", "Paragraph 5"]
// =====
function forEach(arr, callback) {
    for (let index = 0; index < arr.length; index++) {
        callback(arr[index])
    }
}

function createParagraph(text) {
    const pElem = document.createElement("p") // <p></p>
    pElem.innerText = text // <p>{text}</p>
    return pElem // <p>{text}</p>
}
// ============================================ первый вариант
const mainDiv = document.querySelector(".main")

// for (let index = 0; index < strArr.length; index++) {
//     const pElem = document.createElement('p')
//     pElem.innerText = strArr[index]
//     pElem.addEventListener("click", function() {
//         pElem.innerText = "*****"
//     })
//     mainDiv.append(pElem)
// }
// ============================================ второй вариант
function test(event) {
    console.log(event);
    event.target.innerText = "*****"
}

function t(arrElem) {
    const pElem = createParagraph(arrElem)
    pElem.addEventListener("click", test)
    mainDiv.append(pElem)
}

forEach(strArr, t)

const images = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg', 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg'];

const thumbnailsDiv = document.querySelector('#thumbnails')
const previewDiv = document.querySelector("#preview")
const emptyImgElem = document.createElement("img")
previewDiv.append(emptyImgElem)

for (let index = 0; index < images.length; index++) {
    const newImg = document.createElement("img") // <img>
    newImg.setAttribute("src", images[index]) // <img src="ссылка"> ссылка = images[index]
    newImg.addEventListener("click", function() { // при клике на <img src="ссылка"> берем ссылку (ссылка = images[index]) и перезаписываем значание аттрибута src у emptyImgElem этой ссылкой
        emptyImgElem.setAttribute("src", images[index])
    })
    //<img src="ссылка"> добавляем внутрь <div id="thumbnails"></div>
    thumbnailsDiv.append(newImg)
}