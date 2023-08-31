
const addTask = document.getElementById('add-task');

const taskContainer = document.getElementById('task-container');

const inputTask = document.getElementById('input-task');

// Event Listener for add button


addTask.addEventListener('click', function() {

    let task = document.createElement('div');
    task.classList.add('task');


    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li)

    let checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add('deletetask');
    task.appendChild(deleteButton)


    if(inputTask.value === "") {
        alert('Please Enter a Task');

    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";


    checkButton.addEventListener('click', function() {

        checkButton.parentElement.style.textDecoration = "line-trough"
    })


    deleteButton.addEventListener('click', function() {

        let target = e.taget

        target.parentElement.parentElement.remove();
    })

})


