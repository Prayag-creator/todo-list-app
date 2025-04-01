import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/ToDoForm.js';
import TodoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  // Load todos from localStorage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (text) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle todo completion status
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Start editing a todo
  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  // Save edited todo
  const saveEdit = () => {
    if (editingText.trim()) {
      setTodos(todos.map(todo => 
        todo.id === editingId ? { ...todo, text: editingText } : todo
      ));
      setEditingId(null);
      setEditingText('');
    }
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        deleteTodo={deleteTodo} 
        toggleComplete={toggleComplete}
        editingId={editingId}
        editingText={editingText}
        setEditingText={setEditingText}
        startEditing={startEditing}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
      />
    </div>
  );
}

export default App;
