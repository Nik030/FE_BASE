// var str
// let name = prompt("Write your name")
// console.log(`Hello ${name}`)

// function declaration
function printName() {
    let name = prompt("Write your name")
    console.log(`Hello ${name}`)
}

// printName()

// Объявить функцию, которая считывает значение через prompt и выводит “ДА” если число четное и “НЕТ” в ином случае.
// function checkOddOrEven() {
//     let number = prompt("Write a number")
//     if(number % 2 === 0 ) {
//         console.log("Да");
//     } else {
//         console.log("Нет");
//     }
// }
// checkOddOrEven()

function checkOddOrEven(num) {
    if(num % 2 === 0 ) {
        console.log("Да");
    } else {
        console.log("Нет");
    }
}

// let number = prompt("Write a number")

// checkOddOrEven(4)
// checkOddOrEven(3)
// checkOddOrEven(16)
// checkOddOrEven(number)

// Создать функцию, которая в качестве аргументов получает два числа и выводит в консоль наибольшее.
// printMax

function printMax(firstNum, secondNum) {
    if(firstNum > secondNum) {
        console.log(firstNum);
    } else {
        console.log(secondNum);
    }
}

// printMax(4, 6)
// printMax(6, 4)

// function pow(a, b = 2) {
//     let result = a**b // 2^3 = 8; result = 8

//     return result // return 8
// }

// pow(2, 3)
// pow(3, 2)
// pow(2, 5)
// pow(2)
// pow(4)

// let c = pow(2, 3) // 8
// console.log(c);

function pow(a, b = 2) {
    return a**b
}

// let result = pow(2, 3)
// написать процесс используя функцию pow, который находит гипотенузу по длине двух катетов. Использовать теорему Пифагора. // 3 4
// let a = pow(3)
// let b = pow(4)
// let c = pow(a + b, 0.5)
// console.log(c);
// console.log(pow(pow(3) + pow(4), 0.5));

// написать функцию которая получает одно число, и если число четное то возвращать true а если не четное то false и выводить результат в консоли
// check
// function test() {
//     return true
// }

function check(num) {
    // if(num % 2 === 0) {
    //     return true
    // } else {
    //     return false
    // }

    return num % 2 === 0
}

// console.log(check(2));
// console.log(check(3));


// ===========================================================================================
// 
// let str = "Hello"

// function printString() {
//     var str = "Hello"
//     console.log(str)
// }

// hoisting
// if (1 === 1) {
//     let str = "Hello"
// }

// var str = "Hello"
// var str = "test"
// var str = "ts"


// console.log(str);
// printString()

// ===========================================================================================

// Написать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до (указанного числа) а результат выполнения возвращать из функции и выводить в консоли
// createArr

// 1 создать функцию createArr
// 2 получать в аргументы одно число
// 3 создать пустой массив внутри функции
// 4 запонлить массив числами от 0 до (указанного числа). Использовать цикл
// 5 возвращать этот массив
// 6 вывести в консоли этот массив

// const result = createArr(11)
// console.log(result);

// function declaration
// function createArr(a) {
//     const arr = []

//     for (let index = 0; index < a; index++) {
//         arr.push(index)
//     }

//     return arr
// }

// const result = createArr(11)
// console.log(result);

// ===========================================================================================
// function expression

// const createArr = function(a) {
//     const arr = []

//     for (let index = 0; index < a; index++) {
//         arr.push(index)
//     }

//     return arr
// }

// const result = createArr(11)
// console.log(result);

// const printHello = function() {
//     console.log("Hello")
// }

// const obj = {
//     print: printHello,
//     cout: console.log,
//     printWarn: console.warn,
//     printError: console.error,
//     printSecond: function(str) {
//         console.log(str)
//     }
//     // text: "hello world"
// }

// obj.printError("Hello from printError")

// obj.printSecond("Hello from printSecond")

// const cout = console.log
// cout("Log from cout")

// // console.log

// obj.print()
// obj.cout("Hello world")
// obj.printWarn("Hello world")




// Написать функцию, которая получает в качестве аргумента два числа и возвращает массив из чисел от большого к меньшему а результат выполнения возвращать из функции и выводить в консоли, использовать function expression
// 1 создать функцию createArr (function expression)
// 2 получать в аргументы два числа
// 3 найти из них наибольшее и наименьшее
// 4 запонлить массив числами от наибольшего до наименьшего. Использовать цикл
// 5 возвращать этот массив
// 6 вывести в консоли этот массив

const createArr = function(a, b) {
    const arr = []
    let min, max;
    if (a > b) {
        max = a
        min = b
    } else {
        max = b
        min = a
    }

    for (let index = max; index >= min; index--) {
        arr.push(index)
    }

    return arr
}

console.log(createArr(3, 10));
console.log(createArr(50, 10));