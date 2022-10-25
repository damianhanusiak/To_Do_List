const taskInput = document.querySelector(".task-input");
const error = document.querySelector(".error");
const addBtn = document.querySelector(".button-add");
const ulList = document.querySelector(".tasks-list ul");
let newTask;

const editWindow = document.querySelector(".edit-window");
const editWindowInfo = document.querySelector(".edit-window-info");
const editInput = document.querySelector(".edit-input");
const editAddBtn = document.querySelector(".accept");
const editCloseBtn = document.querySelector(".cancel");
let taskToEdit;

const addNewTask = () => {
	if (taskInput.value !== "") {
		newTask = document.createElement("li");
		newTask.textContent = taskInput.value;
		ulList.append(newTask);
		taskInput.value = "";
		error.textContent = "";
		createTools();
	} else {
		error.textContent = "Enter the content of your task!";
	}
};

const createTools = () => {
	const tool = document.createElement("div");
	tool.classList.add("tools");
	newTask.append(tool);

	const complete = document.createElement("button");
	const edit = document.createElement("button");
	const del = document.createElement("button");
	complete.innerHTML = "<i class='fa-solid fa-square-check'>";
	edit.innerHTML = "Edit";
	del.innerHTML = "<i class='fa-solid fa-trash'>";
	complete.classList.add("complete");
	edit.classList.add("edit");
	del.classList.add("delete");
	tool.append(complete, edit, del);
};

const toolsHandling = e => {
	if (e.target.matches(".delete")) {
		deleteTask(e);
	} else if (e.target.matches(".complete")) {
		e.target.closest("li").classList.toggle("completed");
		e.target.classList.toggle("completed");
	} else if (e.target.matches(".edit")) {
		editTask(e);
	}
};

const deleteTask = e => {
	e.target.closest("li").remove();
	const allTasks = ulList.querySelectorAll("li");
	if (allTasks.length === 0) {
		error.textContent = "No tasks on the list!";
	}
};

const editTask = e => {
	editWindow.style.display = "flex";
	taskToEdit = e.target.closest("li");
	editInput.value = taskToEdit.firstChild.textContent;
};

const closeEditWindow = () => {
	editWindow.style.display = "none";
	editWindowInfo.textContent = "";
};

const editTaskText = () => {
	if (editInput.value !== "") {
		taskToEdit.firstChild.textContent = editInput.value;
		editWindow.style.display = "none";
		editWindowInfo.textContent = "";
	} else {
		editWindowInfo.textContent = "You need to add some text!";
	}
};

const addTaskViaEnter = e => {
	if (e.key === "Enter") {
		addNewTask();
	}
};

addBtn.addEventListener("click", addNewTask);
ulList.addEventListener("click", toolsHandling);
editCloseBtn.addEventListener("click", closeEditWindow);
editAddBtn.addEventListener("click", editTaskText);
taskInput.addEventListener("keyup", addTaskViaEnter);
