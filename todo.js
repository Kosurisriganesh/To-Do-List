let todoElement = document.getElementById("To-Do");
let tasklist = document.querySelector(".Task-list");

document.getElementById("Add").onclick = function () {
    if (todoElement.value.length === 0) {
        alert("Enter the task details");
    } else {
        let newTask = document.createElement("div");
        newTask.classList.add("task");

        let taskDetails = document.createElement("span");
        taskDetails.classList.add("work");
        taskDetails.textContent = todoElement.value;

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("del");
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

        newTask.appendChild(taskDetails);
        newTask.appendChild(deleteButton);

        tasklist.appendChild(newTask);

        deleteButton.onclick = function () {
            newTask.remove();
        };

        todoElement.value = "";
    }
};
