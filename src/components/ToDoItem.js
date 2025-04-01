import React from 'react';

function TodoItem({ 
  todo, 
  deleteTodo, 
  toggleComplete, 
  isEditing,
  editingText,
  setEditingText,
  startEditing,
  saveEdit,
  cancelEdit
}) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
            className="edit-input"
          />
          <div className="edit-buttons">
            <button onClick={saveEdit} className="save-button">Save</button>
            <button onClick={cancelEdit} className="cancel-button">Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <div className="todo-content">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="todo-checkbox"
            />
            <span 
              className={`todo-text ${todo.completed ? 'completed-text' : ''}`}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.text}
            </span>
          </div>
          <div className="todo-actions">
            <button 
              onClick={() => startEditing(todo.id, todo.text)} 
              className="edit-button"
              disabled={todo.completed}
            >
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
