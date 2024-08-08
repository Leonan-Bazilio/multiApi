import { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState("");

  useEffect(() => {
    const tasksInLocalStorage = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(tasksInLocalStorage);
  }, []);

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const addTask = () => {
    if (task) {
      const newTask = { id: Date.now(), text: task };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      saveTasksToLocalStorage(updatedTasks);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const editTask = (id, text) => {
    setEditingTaskId(id);
    setEditingTaskText(text);
  };

  const updateTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: editingTaskText } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
    setEditingTaskId(null);
    setEditingTaskText("");
  };

  return (
    <div className={styles.container}>
      <h2>Todo App</h2>
      <input
        className={styles.input}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <input
                className={styles.editInput}
                type="text"
                value={editingTaskText}
                onChange={(e) => setEditingTaskText(e.target.value)}
                onBlur={() => updateTask(task.id)}
              />
            ) : (
              <>
                {task.text}
                <div className={styles.buttonsTask}>
                  <button onClick={() => editTask(task.id, task.text)}>
                    Edit
                  </button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
