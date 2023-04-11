// const pElem = document.createElement("p")
// pElem.innerText = "Hello world"

const mainDiv = document.querySelector("#main")
// mainDiv.append(pElem)

function createParagraph(text) {
    const pElem = document.createElement("p") // <p></p>
    pElem.innerText = text // <p>{text}</p>
    return pElem // <p>{text}</p>
}

// const paragraphsTexts = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"]
// for (let index = 0; index < paragraphsTexts.length; index++) {
//     const paragraph = createParagraph(paragraphsTexts[index])
//     mainDiv.append(paragraph)
// }

// написать функцию которая принимает текст как аргумент и возвращает новый элемент параграфа с этим текстом и в цикле использовать эту функцию
// 1 - Написать функцию с названием createParagraph и передавать туда один аргумент с названием text
// 2 - внутри функции создать элемент параграфа и хранить в переменной
// 3 - после создания значение аргумента text добавить внутрь параграфа
// 4 - возвращать переменную где хранится параграф
// 5 - вызвать эту функцию внутри цикла и передавать параметр элементы массива paragraphsTexts
// 6 - результат вызова этой функции хранить в какой-то переменной
// 7 - Эту переменную добавить в mainDiv


// написать код который просит у пользователься ссылку на какую-то картинку и на какой-то пост (можно использовать #) хранит их в отдельных переменных, потом создает такой блок и добавляет внутрь mainDiv 
/* 
<div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt="post image">
    <a href="#">Link to post</a>
</div>
*/

// const imgLink = prompt("Link to img")
// const postLink = prompt("Link to post")
// mainDiv.innerHTML = `
// <div>
//     <img src="${imgLink}" alt="post image">
//     <a href="${postLink}">Link to post</a>
// </div>
// `

//<img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt="post image">
// const imgElem = document.createElement("img") // <img>
// imgElem.setAttribute("src", imgLink) // <img src="{imgLink}">
// imgElem.setAttribute("alt", "post image") // <img src="{imgLink}" alt="post image">

// <a href="#">Link to post</a>
// const aElem = document.createElement("a") // <a></a>
// aElem.setAttribute("href", postLink) // <a href="{postLink}"></a>
// aElem.innerText = "Link to post" // <a href="{postLink}">Link to post</a>

/*
<div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt="post image">
    <a href="#">Link to post</a>
</div>
*/
// const divElem = document.createElement("div") // <div></div>
// divElem.append(imgElem, aElem)
// mainDiv.append(divElem)


// написать код который итерирует массив products и для каждого продукта создает такой блок, потом создает такой блок и добавляет внутрь mainDiv
// в css Добавить для дива с id main стили флекси и позиционировать блоки продуктов горизонтально, и добавить отступы внешние между блоками продуктов (10px)
/* 
<div>
    <img src="{img}" alt="{name of product}">
    <p>Product: {name}</p>
    <p>Price: {price}$</p>
    <p>Count: {count}</p>
</div>
*/

const products = [
    {
        name: "Laptop",
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7",
        count: 15,
        price: 1500
    },
    {
        name: "Notebook",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71GZ9ZvNp7L.jpg",
        count: 10,
        price: 50
    }
]

// <p>Total price: {totalPrice}</p>
// <p>Total count: {totalCount}</p>
let totalPrice = 0
let totalCount = 0
for (let index = 0; index < products.length; index++) {
    const divElem = document.createElement("div")
    const {name , img, count, price} = products[index]
    // divElem.innerHTML = `
    //     <img src="${img}" alt="${name}">
    //     <p>Product: ${name}</p>
    //     <p>Price: ${price}$</p>
    //     <p>Count: ${count}</p>
    // `
    const imgElem = document.createElement("img")
    imgElem.setAttribute("src", img)
    imgElem.setAttribute("alt", name)

    // totalPrice = totalPrice + price
    // totalCount = totalCount + count
    totalCount += count
    totalPrice += price

    const pName = createParagraph(`Product: ${name}`)
    const pPrice = createParagraph(`Price: ${price}`)
    const pCount = createParagraph(`Count: ${count}`)
    divElem.append(imgElem, pName, pPrice, pCount)

    mainDiv.append(divElem)
}

document.body.append(
    createParagraph(`Total price: ${totalPrice}`),
    createParagraph(`Total count: ${totalCount}`)
)

// document.body
// document.querySelector("body")