// scripts/modal.js

export function openEditModal(task, onSave, onDelete) {
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";

  backdrop.innerHTML = `
    <div class="modal">
      <button class="close-button">&times;</button>
      <div class="modal-content">
        <label>Title</label>
        <input type="text" id="modal-title" value="${task.title}" />
        <label>Description</label>
        <textarea id="modal-description">${task.description}</textarea>
        <label>Status</label>
        <select id="modal-status">
          <option value="todo" ${
            task.status === "todo" ? "selected" : ""
          }>To Do</option>
          <option value="doing" ${
            task.status === "doing" ? "selected" : ""
          }>Doing</option>
          <option value="done" ${
            task.status === "done" ? "selected" : ""
          }>Done</option>
        </select>
        <div style="margin-top: 15px;">
          <button id="save-button">Save</button>
          <button id="delete-button" style="background-color: red; margin-left: 10px;">Delete</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);

  backdrop.querySelector(".close-button").onclick = () => backdrop.remove();

  backdrop.querySelector("#save-button").onclick = () => {
    const updated = {
      ...task,
      title: document.getElementById("modal-title").value.trim(),
      description: document.getElementById("modal-description").value.trim(),
      status: document.getElementById("modal-status").value,
    };
    onSave(updated);
    backdrop.remove();
  };

  backdrop.querySelector("#delete-button").onclick = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      onDelete(task.id);
      backdrop.remove();
    }
  };
}

export function openNewTaskModal(onCreate) {
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";

  backdrop.innerHTML = `
    <div class="modal">
      <button class="close-button">&times;</button>
      <div class="modal-content">
        <label>Title</label>
        <input type="text" id="new-title" placeholder="Enter task title" />
        <label>Description</label>
        <textarea id="new-description" placeholder="Enter task description"></textarea>
        <label>Status</label>
        <select id="new-status">
          <option value="todo">To Do</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <div style="margin-top: 15px;">
          <button id="create-button">Create Task</button>
          <button id="cancel-button" style="margin-left: 10px;">Cancel</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);

  backdrop.querySelector(".close-button").onclick = () => backdrop.remove();
  backdrop.querySelector("#cancel-button").onclick = () => backdrop.remove();

  backdrop.querySelector("#create-button").onclick = () => {
    const title = document.getElementById("new-title").value.trim();
    const description = document.getElementById("new-description").value.trim();
    const status = document.getElementById("new-status").value;

    if (!title) {
      alert("Please enter a title.");
      return;
    }

    onCreate({
      id: Date.now(),
      title,
      description,
      status,
    });

    backdrop.remove();
  };
}
