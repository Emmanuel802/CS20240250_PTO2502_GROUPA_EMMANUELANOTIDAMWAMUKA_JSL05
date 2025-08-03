# 🗂️ Kanban Task Manager (JSL05 Project)

A dynamic Kanban-style task board that allowing users to create, edit, and persist tasks using the browser's local storage. This project demonstrates the use of ES module structure, DOM manipulation, and client-side data handling in a single-page application.

---

## 📌 Project Description

The Kanban Task Manager is a task-tracking application where users can:

- View tasks sorted into columns (To Do, Doing, Done)
- Add new tasks through a modal form
- Edit/Delete existing tasks
- Automatically save and load tasks using `localStorage`

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- DOM APIs
- Figma (Design purposes)
- `localStorage` API

---

## ✅ Features

### 💡 Implemented

- Modular folder structure (`scripts/`)
- Task creation modal
- Task editing and remove modal
- Initial task rendering
- Dynamic task rendering by status
- Live updates to the UI when new tasks are added
- Data persistence using browser `localStorage`

### 🧩 Scripts Breakdown

| File              | Purpose                                          |
| ----------------- | ------------------------------------------------ |
| `scripts.js`      | Main script to render tasks and manage DOM logic |
| `initialData.js`  | Contains the initial task data                   |
| `modal.js`        | Controls logic for creating and editing tasks    |
| `localStorage.js` | Handles saving/loading tasks using localStorage  |

---

## 🚀 Setup Instructions

Follow the steps below to run the project locally on your machine:

### 1. Clone or Download the Repository

- Click the green **Code** button on GitHub and choose **Download ZIP**, or run:
  ```bash
  git clone https://github.com/your-username/jsl05-kanban-board.git
  ```
