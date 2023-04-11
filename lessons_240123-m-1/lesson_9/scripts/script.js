// const
// let
// var не используем

// const text = "Hello world"
// let text = "Hello world"
// console.log(text)

// A-Z a-z $ _ 0-9

// 1text -> нельзя
// a1, a$, _a, $a

// car name
// car_name -> snake case
// carName -> camel case
// car-name -> kebab case, error

// const name = prompt("Write your name")
// console.log(typeof name)
// console.log("Hello " + name) // concatenation
// console.log(`Hello ${name}`) // interpolation

// string, number
// const a = 5.9
// const b = "hello"

// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof a)
// console.log(typeof b)

// const r = 120
// const g = 50
// const b = 83

// вывести в консоли такую строку => "rgb(120, 50, 83)"
// console.log('"rgb('+r+", "+g+", "+b+')"')
// console.log(`"rgb(${r}, ${g}, ${b})"`)

// My name is 'John'
// console.log(`My name is 'John'`)

// const a = 12
// const b = 4

// console.log(a + b) // сложение
// console.log(a - b) // вычитание
// console.log(a / b) // деление
// console.log(a * b) // умножение
// console.log(a % b) // остаток от деления
// console.log(a ** b) // возведение в степень

// const a = "2" // string
// const b =  3  // number

// console.log(typeof Number(a))
// console.log(typeof +a)
// console.log(typeof String(b))
// console.log(a + b) // "23"
// console.log(+a + b) // 5
// console.log(a - b) // -1

// const a = "a"
// console.log(typeof Number(a)) // NaN = Not a Number

// Предположите, что получится в результате 'b' + 'a' + +'c' + 'a'

// Написать программу, которая запрашивает у пользователя его возраст (в годах) и выводит, сколько ему лет.

// const age = prompt("Напишите ваш возраст")
// console.log(`Вам ${age} лет`)

// Написать программу, которая считывает через prompt число и выводит в консоль ее квадрат

// const num = prompt("Write a number")
// console.log(num**2);

//Написать программу, которая считывает два числа (объявляем две переменные и записываем туда результат работы двух вызовов prompt) и выводит их сумму. Не забудьте преобразовать полученные значения в число.

// const a = prompt("Write a first number")
// const b = prompt("Write a second number")

// console.log(+a + +b)

const a = 10 // number
const b = '10' // string

// == (5 == 5): === (number == string)
// <
// >
// <=
// >=
// !=
// !==

if(a == b) { 
    console.log(1);
} else if (a < b) {
    console.log(0);
} else if (a > b) {
    console.log(-1);
}