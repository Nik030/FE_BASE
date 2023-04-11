const taskInput = document.querySelector("#new-item-input")
const form = document.querySelector("form")
const list = document.querySelector("#todo-list")
const dateInput = document.querySelector("#new-item-date")
//1. добавить обработчик события для ивента (submit) у формы и предотвратить перезагрузку странички и сохранить в переменной text значение которое ввел пользователь и очистить инпут и потом вывести в консоли переменную text
//2. создать пустой массив с названием todoItems, внутри обработчика создать объект со свойствами name и status и соотвественно хранить в ключе name значение из переменной text а в status по умолчанию всегда поставить false булевое значение и после добавить этот объект внутрь todoItems
//3. Создать функцию с названием createTaskNode которая принимает три параметра (name, status, index) и создает на основе этих данных такой html элемент и возвращает этот элемент
/*
<li data-date={date}>
    <input type="checkbox" id="item_{index}">
    <label for="item_{index}">{name}</label>
    <input type="text" value="{name}" class="hidden">
    <div>
        <button>Edit</button>
        <button>Remove</button>
    </div>
</li>
*/

const todoItems = []
// alert("ERROR: empty value")
// return
form.addEventListener("submit", function (event) {
    event.preventDefault()
    let taskName = taskInput.value.trim()
    // taskName = taskName.trim()
    if (taskName === "") {
        alert("ERROR: empty value")
        form.reset()
        return
    }

    let taskDate = dateInput.value
    const taskObj = {
        name: taskName,
        status: false,
        date: taskDate
    }
    todoItems.unshift(taskObj)
    console.log(todoItems);
    rerender()
    
    form.reset()
})

function rerender() {
    list.innerHTML = ""
    for (let index = 0; index < todoItems.length; index++) {
        const taskNode = createTaskNode(todoItems[index], index)
        list.append(taskNode)
    }
}
// изменить функцию createTaskNode так чтобы она первым параметром принимала объект задачи а вторым параметром принимала index задачи а потом внутри функции createTaskNode с помощью деструктуризации забрать эти значание зи этого объекта name, status

// при нажатии на кнопку Edit отображать инпут и скрыть лейбл и наооброрт при повторном нажатии
function createTaskNode({name, status, date}, index) {
    const li = document.createElement("li")
    li.setAttribute("data-date", date)
    
    const taskStatus = document.createElement("input")
    taskStatus.setAttribute("type", "checkbox")
    taskStatus.setAttribute("id", `item_${index}`)
    taskStatus.checked = status

    const label = document.createElement("label")
    label.setAttribute("for", `item_${index}`)
    label.innerText = name
    
    if (status) label.classList.add("checked")

    taskStatus.addEventListener("change", function () {
        todoItems[index].status = !todoItems[index].status
        label.classList.toggle("checked")
    })

    const editInput = document.createElement("input")
    editInput.setAttribute("type", "text")
    editInput.value = name
    editInput.classList.add("hidden")

    const removeButton = document.createElement("button")
    removeButton.innerText = "Remove"
    removeButton.addEventListener("click", function() {
        todoItems.splice(index, 1)
        rerender()
    })

    const editButton = document.createElement("button")
    editButton.innerText = "Edit"
    editButton.addEventListener("click", function() {
        label.classList.toggle("hidden")
        editInput.classList.toggle("hidden")

        // внутри условия забрать значение из инпута редактирования поменять значение свойства name у объекта по index и поменять текстовое содержание label
        if (editInput.classList.contains("hidden")) {
            if (editInput.value.trim() === "") {
                alert("ERROR: empty value")
                editInput.value = name
                return
            }
            todoItems[index].name = editInput.value
            label.innerText = editInput.value
            // rerender()
        }
    })

    const btnsDiv = document.createElement("div")
    btnsDiv.append(editButton, removeButton)

    li.append(taskStatus, label, editInput, btnsDiv)

    return li
}
