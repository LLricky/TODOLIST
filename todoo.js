let todoItems = [{

}, ];

//输出待办事项列表
function renderTodoItemslist(todoItems) {
    let listEle = document.querySelector(".todolist-frame > .list")
    console.log(listEle)
    for (let item of todoItems) {
        let itemDiv = document.createElement('div')
        itemDiv.className = 'todo-item'

        let markEl = document.createElement('input')
        markEl.type = 'checkbox'
        markEl.addEventListener("change", (e) => {
            console.log('finish:', item)
        })

        let titleEl = document.createElement('div')
        titleEl.className = 'item-title'

        let importantEl = document.createElement('div')
        importantEl.innerHTML = '<button>🔥</button>'

        let deleteEl = document.createElement('div')
        deleteEl.innerHTML = '<button>❌</button>'

        listEle.append(itemDiv)
        titleEl.innerText = item.title
        itemDiv.append(markEl)
        itemDiv.append(titleEl)
        itemDiv.append(importantEl)
        itemDiv.append(deleteEl)



    }
}

function renderInput(todoItems) {
    let addbnt = document.querySelector(".input-part  #add")
    addbnt.addEventListener('click', (e) => {
        let addbnt = document.querySelector(".input-part > input")
        todoItems = [] //不知道为什么，反正就可以用了。
        todoItems.push({
            title: addbnt.value,
            finished: false,
            isImportant: false
        })

        renderTodoItemslist(todoItems);

    })



}



renderInput(todoItems);