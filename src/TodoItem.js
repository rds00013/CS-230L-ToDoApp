import React, { useState } from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
    const { id, task, completed } = todo;
    const [isChecked, setIsChecked] = useState(completed);
    const [isHovered, setIsHovered] = useState(false);

    const todoStyle = {
        borderRadius: '5px',
        padding: '5px 10px',
        marginBottom: '5px',
        backgroundColor: isHovered ? '#ff7eff' : (id % 2 === 0 ? '#ff7f7f' : '#80ffc1'),
        border: `2px solid ${(isHovered ? '#FF00FF' : (id % 2 === 0 ? '#ff0000' : '#00ff81'))}`,
        textDecoration: completed ? 'line-through' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background-color 0.3s, border-color 0.3s'
    };

    const deleteButton = {
        border: '2px solid black',
        backgroundColor: 'white',
        cursor: 'pointer',
        borderRadius: '50%',
        padding: '5px 8px',
        marginLeft: '5px',
        color: 'red',
        fontWeight: 'bolder',
        float: 'right',
    }

    const handleDelete = () => {
        deleteTodo(id);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        toggleComplete(id);
    };

    return (
        <div
            style={todoStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                style={{ marginRight: '10px' }}
            />
            <span style={{ flex: 1 }}>{task}</span>
            <button
                style={deleteButton}
                onClick={handleDelete}
            >
                X
            </button>
        </div>
    );
};

export default TodoItem;