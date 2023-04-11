const taskInput = document.querySelector("#new-item-input")
const form = document.querySelector("form")
const list = document.querySelector("#todo-list")

//1. добавить обработчик события для ивента (submit) у формы и предотвратить перезагрузку странички и сохранить в переменной text значение которое ввел пользователь и очистить инпут и потом вывести в консоли переменную text

//2. создать пустой массив с названием todoItems, внутри обработчика создать объект со свойствами name и status и соотвественно хранить в ключе name значение из переменной text а в status по умолчанию всегда поставить false булевое значение и после добавить этот объект внутрь todoItems

//3. Создать функцию с названием createTaskNode которая принимает три параметра (name, status, index) и создает на основе этих данных такой html элемент и возвращает этот элемент
/*
<li>
    <input type="checkbox" id="item_{index}">
    <label for="item_{index}">{name}</label>
    <button>Remove</button>
</li>
*/

const todoItems = []
// alert("ERROR: empty value")
// return
form.addEventListener("submit", function (event) {
    event.preventDefault()
    let text = taskInput.value.trim()
    // text = text.trim()
    if (text === "") {
        alert("ERROR: empty value")
        form.reset()
        return
    }
    const taskObj = {
        name: text,
        status: false
    }
    todoItems.unshift(taskObj)
    console.log(todoItems);
    rerender()
    
    form.reset()
})

function rerender() {
    list.innerHTML = ""
    for (let index = 0; index < todoItems.length; index++) {
        const {name, status} = todoItems[index]
        const taskNode = createTaskNode(name, status, index)
        list.append(taskNode)
    }
}

function createTaskNode(name, status, index) {
    const input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    input.setAttribute("id", `item_${index}`)
    input.checked = status

    const label = document.createElement("label")
    label.setAttribute("for", `item_${index}`)
    label.innerText = name
    
    if (status) label.classList.add("checked")

    input.addEventListener("change", function () {
        todoItems[index].status = !todoItems[index].status
        label.classList.toggle("checked")
    })

    const button = document.createElement("button")
    button.innerText = "Remove"

    const li = document.createElement("li")
    li.append(input, label, button)

    return li
}