let taskInput = document.querySelector(".task-input");
let error = document.querySelector(".error");
let addBtn = document.querySelector(".button-add");
let ulList = document.querySelector(".tasks-list ul");
let newTask;

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
	}
};

const deleteTask = e => {
	e.target.closest("li").remove();
};

addBtn.addEventListener("click", addNewTask);
ulList.addEventListener("click", toolsHandling);
