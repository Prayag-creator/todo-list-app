import React from 'react';
import TodoItem from './ToDoItem';

function TodoList({ 
  todos, 
  deleteTodo, 
  toggleComplete, 
  editingId,
  editingText,
  setEditingText,
  startEditing,
  saveEdit,
  cancelEdit
}) {
  if (todos.length === 0) {
    return <p className="empty-list">No tasks yet. Add a task to get started!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          isEditing={todo.id === editingId}
          editingText={editingText}
          setEditingText={setEditingText}
          startEditing={startEditing}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;
