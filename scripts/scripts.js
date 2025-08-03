// scripts/scripts.js
import { initialData } from "./initialData.js";
import { saveTasks, loadTasks } from "./localStorage.js";
import { openEditModal, openNewTaskModal } from "./modal.js";

let tasks = loadTasks() || initialData;

document.addEventListener("DOMContentLoaded", () => {
  showAllTasks();

  const addTaskBtn = document.getElementById("add-task-btn");
  if (addTaskBtn) {
    addTaskBtn.addEventListener("click", () => {
      openNewTaskModal((newTask) => {
        tasks.push(newTask);
        showAllTasks();
      });
    });
  }
});

function showAllTasks() {
  const columns = {
    todo: document.querySelector('[data-status="todo"] .tasks-container'),
    doing: document.querySelector('[data-status="doing"] .tasks-container'),
    done: document.querySelector('[data-status="done"] .tasks-container'),
  };

  Object.values(columns).forEach((col) => (col.innerHTML = ""));

  tasks.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task-div";
    div.textContent = task.title;
    div.onclick = () => {
      openEditModal(task, handleSave, handleDelete);
    };

    if (columns[task.status]) {
      columns[task.status].appendChild(div);
    }
  });

  updateColumnCounts();
  saveTasks(tasks);
}

function handleSave(updatedTask) {
  const index = tasks.findIndex((t) => t.id === updatedTask.id);
  if (index !== -1) {
    tasks[index] = updatedTask;
    showAllTasks();
  }
}

function handleDelete(taskId) {
  tasks = tasks.filter((t) => t.id !== taskId);
  showAllTasks();
}

function updateColumnCounts() {
  const countByStatus = (status) =>
    tasks.filter((t) => t.status === status).length;

  document.getElementById("toDoText").textContent = `TODO (${countByStatus(
    "todo"
  )})`;
  document.getElementById("doingText").textContent = `DOING (${countByStatus(
    "doing"
  )})`;
  document.getElementById("doneText").textContent = `DONE (${countByStatus(
    "done"
  )})`;
}
