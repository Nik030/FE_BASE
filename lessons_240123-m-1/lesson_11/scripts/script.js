// ================== Найти сумму всех чисел из массива arr и вывести в консоли результат ==================
// const arr = [2, 38, 895, 10, 26]
// let sum = 0;

// for(let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i] // sum = 0 + 2; sum = 2; sum = 2 + 38
//     sum += arr[i]
// }

// console.log(sum)

// ================== Найти сумму положительных чисел. ==================
// const arr = [2, -38, 895, -10, 26, -9, 52, 99, -62]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum += arr[i]
//     }
// }

// console.log(sum);

// ================== Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее и вывести результат в консоли
// const arr = [2, 38, 895, 10, 26, 9, 52, 99, 62, 5, 7, 16, 24]
// let sumOfEvens = 0
// let sumOfOdds = 0
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2 === 0) {
//         sumOfEvens += arr[index]
//     } else {
//         sumOfOdds += arr[index]
//     }
// }

// if (sumOfEvens > sumOfOdds) {
//     console.log(sumOfEvens - sumOfOdds);
// } else {
//     console.log(sumOfOdds - sumOfEvens);
// }

// ================== Найти сумму чисел из массива, чей индекс равен значению элемента ==================
// const arr = [1, 34, 52, 4, 9, -5, 6, 59, 52, 9]
// let sum = 0

// for (let index = 0; index < arr.length; index++) {
//     if(index === arr[index]) {
//         sum += arr[index]
//     }
// }
// console.log(sum);

// ============================================================================================================

// const user = ["John", "Smith", 35, 4500]
// console.log(`Name of person ${user[0]}`);
// console.log(`LastName of person ${user[1]}`);
// console.log(`Age of person ${user[2]}`);
// console.log(`Salary of person ${user[3]}`);

// const user = {
//     name: "John",
//     lastname: "Smith",
//     age: 35,
//     salary: 4500,
//     'life events': 'test',
//     lifeEvents: 'test'
// }

// console.log(user);
// console.log(`Name of person ${user['name']}`);
// console.log(`Lastname of person ${user['lastname']}`);
// console.log(`Age of person ${user['age']}`);
// console.log(`Salary of person ${user['salary']}`);

// console.log(`Name of person ${user.name}`);
// console.log(`LastName of person ${user.lastname}`);
// console.log(`Age of person ${user.age}`);
// console.log(`Salary of person ${user.salary}`);
// console.log(user["life events"]);
// console.log(user.lifeEvents);

// user.name = "Jake"
// user.proffesion = "Developer"
// console.log(user.gender);

const products = [
    {
        name: "Product 1",
        price: 1500,
        type: "a",
        discount: 50
    },
    {
        name: "Product 2",
        price: 2000,
        type: "b",
        discount: 5
    },
    {
        name: "Product 3",
        price: 500,
        type: "c",
        discount: 7
    },
    {
        name: "Product 4",
        price: 3200,
        type: "b",
        discount: 10
    }
]

// ================== пройти по массиву продуктов и вывести в консоли такую строку "Название продукта: {name}"
// for(let i = 0; i < products.length; i++) {
//     console.log(`Название продукта: ${products[i].name}`);
// }
// пройтись по массиву продуктов и найти общую сумму товаров а потом вывести в консоли результат. "Общая цена всех продуктов: {total price}"
// let sum = 0
// for(let i = 0; i < products.length; i++) {
//     sum += products[i].price
// }
// console.log(`Общая цена всех продуктов: ${sum}`);

// ================== создать новый пустой массив потом пройтись по массиву продуктов и добавить в новый массив те продукты у которых type="b" и в конце вывести новый массив в консоли
// 1 - создать новый пустой массив с названием newArray
// 2 - пройтись циклом по массиву продуктов (products)
// 3 - проверить равно ли свойство type у продукта строке "b"
// 4 - если равно то добавить в новый пустой массив который создали в начале с помощью метода push, если не равно ничего не делать
// 5 - после окончания работы цикла вывести этот новый массив в консоли
// const newArray = []
// for (let index = 0; index < products.length; index++) {
//     if(products[index].type === "b") {
//         newArray.push(products[index])
//     }
// }

// console.log(newArray);

// ================== пройтись по массиву продуктов и вывести в консоли окончательную цену после скидки для каждого продукта 
// "Цена после скидки у {name of product} : {цена после скидки}"
// о.ц. - о.ц. * скидку / 100
// {
//     name: "Product 4",
//     price: 3200,
//     type: "b",
//     discount: 10
// }
for (let i = 0; i < products.length; i++) {
    const {name, price, discount} = products[i]
    console.log(`Цена после скидки у ${name} : ${price - price * discount / 100}`);
}