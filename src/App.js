import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import TodoList from "./TodoList";


function App() {
    const [todos, setTodos] = useState([ ]);
    const [taskInput, setTaskInput] = useState('');

    const toggleComplete = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    const handleTaskInputChange = (e) => {
        setTaskInput(e.target.value);
    };

    const handleAddTask = () => {
        if (taskInput.trim() !== '') {
            const newTask = {
                id: todos.length + 1,
                task: taskInput,
                completed: false,
            };
            setTodos([...todos, newTask]);
            setTaskInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <div className="container">
            <h1 className="header">Simple Todo App</h1>
            <div className="todo-container">
                <div className="input-container">
                    <input
                        type="text"
                        value={taskInput}
                        onChange={handleTaskInputChange}
                        onKeyPress={handleKeyPress} // Listen for Enter key press
                        placeholder="Enter task..."
                        className="task-input"
                    />
                    <button onClick={handleAddTask} className="add-button">
                        Add Task
                    </button>
                </div>
            </div>
            <div className="todo-list">
                <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
            </div>
        </div>
    );
}

export default App;
