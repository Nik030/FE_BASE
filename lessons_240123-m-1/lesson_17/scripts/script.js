// const divElem = document.createElement("div")
// inline styles
// divElem.style.width = "300px"
// divElem.style.height = "300px"
// divElem.style.backgroundColor = "green"
// console.log(divElem.style.cssText);
// divElem.style.cssText += "border: 1px solid black; box-shadow: 2px 2px 10px black;"
// divElem.setAttribute('style', "width: 100px; height: 100px; background-color: green; border: 1px solid black; box-shadow: black 2px 2px 10px;")
// console.log(Math.floor(Math.random() * 255)); // [0, 1), [0, 255]

// divElem.addEventListener("mouseover", function() {
//     const r = Math.floor(Math.random() * 255)
//     const g = Math.floor(Math.random() * 255)
//     const b = Math.floor(Math.random() * 255)
//     console.log(r, g, b);
//     const rgb = `rgb(${r}, ${g}, ${b})`
//     console.log(rgb);
//     divElem.style.backgroundColor = rgb
//     setInterval(function () {
//         const r = Math.floor(Math.random() * 255)
//         const g = Math.floor(Math.random() * 255)
//         const b = Math.floor(Math.random() * 255)
//         console.log(r, g, b);
//         const rgb = `rgb(${r}, ${g}, ${b})`
//         console.log(rgb);
//         divElem.style.backgroundColor = rgb
//     }, 100)
// })

// divElem.addEventListener("mouseout", function() {
//     divElem.style.backgroundColor = "green"
// })

// document.body.append(divElem)

// Написать цикл, который создает 5 дивов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255) и добавить в див с классом main и этим дивам задать высоту и ширину 150px

// const mainDiv = document.querySelector(".main")
// for (let index = 0; index < 5; index++) {
//     const div = document.createElement("div")
//     div.style.width = "150px"
//     div.style.height = "150px"
//     const b = Math.floor(Math.random() * 255)
//     const rgb = `rgb(128, 128, ${b})`
//     // Math.floor() down
//     // Math.round() math
//     // Math.ceil() up
//     div.style.backgroundColor = rgb
//     mainDiv.append(div)
// }

const form = document.querySelector("form")
const productNameInp = document.querySelector("#productName")
const productPriceInp = document.querySelector("#productPrice")
const products = []
const productsDiv = document.querySelector(".products")
// 1. сделать так чтобы при отправке формы данные из нее добавлялись в массив с продуктами в виде объекта.(products)
// 2. Добавить функцию, которая получает наименование карточки и цену и возвращает Node с карточкой товара. createProductCard(name, price)
/* 
<div class="card">
    <p>Product: {name}</p>
    <p>Price: {price}</p>
</div>
*/

function createProductCard(name, price) {
    const pName = document.createElement("p") // <p></p>
    pName.innerText = `Product: ${name}` // <p>Product: {name}</p>
    const pPrice = document.createElement("p") // <p></p>
    pPrice.innerText = `Price: ${price}` // <p>Product: {price}</p>
    const cardDiv = document.createElement("div") // <div></div>
    cardDiv.classList.add("card") // <div class="card"></div>
    cardDiv.append(pName, pPrice)
    return cardDiv
}

function rerender() {
    productsDiv.innerHTML = ""
    for (let index = 0; index < products.length; index++) {
        const {name, price} = products[index]
        const card = createProductCard(name, price)
        productsDiv.append(card)
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault()
    const product = {
        name: productNameInp.value,
        price: productPriceInp.value
    }
    products.push(product)
    console.log(products);
    rerender()
    form.reset()
})
