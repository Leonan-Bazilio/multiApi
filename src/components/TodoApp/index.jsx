import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const API_URL = "http://localhost:5173/db.json";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get(API_URL);
    setTasks(response.data.tasks);
    console.log(response.data.tasks);
    console.log(tasks);
  };
  const addTask = async () => {
    if (task) {
      const newTask = { text: task };
      const response = await axios.post(API_URL, newTask);
      setTasks([...tasks, response.data]);
    }
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, text) => {
    setEditingTaskId(id);
    setEditingTaskText(text);
  };

  const updateTask = async (id) => {
    const updatedTask = { text: editingTaskText };
    await axios.put(`${API_URL}/${id}`, updatedTask);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editingTaskText } : task
      )
    );
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
                <div>
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
