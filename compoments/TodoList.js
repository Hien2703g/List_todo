import { useState } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleAdd = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: newTodo }]);
            setNewTodo('');
        }
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <div className="w-full max-w-md bg-white p-5 shadow-md rounded">
                <h1 className="text-xl font-bold text-gray-700 mb-4">Todo List</h1>
                <div className="flex mb-4">
                    <input
                        type="text"
                        placeholder="Add new todo..."
                        className="flex-grow p-2 border rounded-l-md focus:outline-none"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
                        onClick={handleAdd}
                    >
                        Add
                    </button>
                </div>
                <ul className="space-y-2">
                    {todos.map(todo => (
                        <li
                            key={todo.id}
                            className="flex justify-between items-center bg-gray-100 p-3 rounded shadow"
                        >
                            <span className="text-gray-700">{todo.text}</span>
                            <button
                                className="text-red-500 hover:text-red-600"
                                onClick={() => handleDelete(todo.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
