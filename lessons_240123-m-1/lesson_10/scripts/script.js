// const a = "6"
// console.log(isNaN(+a));

// alert("Hello world")

// Запросить у пользователя число, потом проверить что точно ввел число, если нет показать модальное окно с текстом вы ввели не число, а потом проверить число больше или меньше нуля и вывести в консоли меньше или больше нуля

// const num = prompt("Write a number") // 

// if (isNaN(num)) {
//     alert("Write only number")
// } else if(num > 0) {
//     console.log("Num больше нуля")
// } else if(num < 0) {
//     console.log("Num меньше нуля")
// } else {
//     console.log("Num равно ноль")
// }

// написать программу которая получает год от пользователя и проверяет год на високосность

// const year = +prompt("Write a year")

// if (year % 400 === 0) {
//     console.log("Високосный")
// } else if (year % 100 === 0) {
//     console.log("не високосный")
// } else if (year % 4 === 0) {
//     console.log("Високосный")
// } else {
//     console.log("не високосный")
// }

// && = и
// || = или

// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log("Високосный")
// } else {
//     console.log(`не високосный`)
// }

// const arr = [0, 1, 2, 3, 6] // [2]=62,[3]=20,[4]=862
// console.log(arr[50])
// arr[3] = `world`
// arr[3] = ["a", "b", "c"]
// arr[3] = arr
// arr[3] = 'test'
// console.log(arr)


// arr.push(700, 800, 900) // add elems from end
// const lastElem = arr.pop() // get last elem and delete from array
// console.log(lastElem)
// arr.push(lastElem)
// arr.unshift(700, 800, 900) // add elems from start
// console.log(arr.shift()); // // get first elem and delete from array
// delete arr[2]
// console.log(arr[2]);
// arr.splice(2, 1) 
// arr.splice(3, 0, 11, 12, 36, 95, 78)
// arr.splice(4, 0, 4, 5) // [0, 1, 2, 3, 6]
// arr.splice(2, 1)
// console.log(arr)



//Написать программу, в которой объявлен массив с 5 числовыми элементами. Программа должна заполнить новый пустой массив квадратами чисел из первого массива.
// const arr = [1, 4, 2, 5, 3]
// const result = []
// result.push(arr[0]**2, arr[1]**2, arr[2]**2, arr[3]**2, arr[4]**2)

// console.log(result)



// =======================
// const arr = [1, 4, 2, 5, 3, 4, 8, 62, 52]
// const result = []

// for(let index = 0; index < arr.length; index++) { // 0-> 1-> 2-> 3-> ... 10
//     // console.log(arr[index]) arr[index]**2
//     result.push(arr[index]**2)
//     // result[index] = arr[index]**2
// }

// console.log(result);

// const arr = [1, 4, 2, 5, 3, 4, 8, 62, 52] // arr[8] = 52, arr[7] = 62 ..., arr[1] = 4, arr[0] = 1 

// for (let index = arr.length - 1; index >= 0; index--) {
//     console.log(arr[index]) // arr[0] => 1
// }

// const arr = [-1, 4, 2, -5, 3, -4, -8, 62, -52]

// написать цикл, который выводит только положительные числа из массива

// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > 0) {
//         console.log(arr[index])
//     }
// }

// Написать цикл, который выводит только четные числа из промежутка 0 - 10
for (let index = 0; index <= 10; index += 2) {
    // if (index % 2 === 0) {
    //     console.log(index)
    // }

    console.log(index)
}