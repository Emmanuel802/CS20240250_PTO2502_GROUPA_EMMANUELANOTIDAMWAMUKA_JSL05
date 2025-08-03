// scripts/localStorage.js

const STORAGE_KEY = "tasks";

export function loadTasks() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}

export function saveTasks(taskList) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(taskList));
}
