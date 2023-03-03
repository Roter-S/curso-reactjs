import React, { useState, useEffect } from 'react'
import Formulario from './Formulario'
import Todo from './Todo'

const TodoList = () => {
    const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

    const [todos, setTodos] = useState(initialStateTodos)

    const agegarTodo = (todo) => {
        setTodos((old) => [...old, todo])
    }

    const eliminarTodo = (id) => {
        setTodos((old) => old.filter(item => item.id !== id))
    }

    const editarEstadoTodo = (id) => {
        const editarEstadoTodo = todos.map(item => (
            item.id === id ? { ...item, estado: !item.estado } : item
        ))

        setTodos(editarEstadoTodo)
    }

    const ordenarTodos = (arrayTodos) => {
        return arrayTodos.sort((a, b) => {
            if (a.prioridad === b.prioridad) {
                return 0;
            }
            if (a.prioridad) {
                return -1;
            }
            if (!a.prioridad) {
                return 1;
            }
        });
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className='container'>
            <Formulario agregarTodo={agegarTodo} />
            <hr />
            <ol className="list-group list-group-numbered">
                {ordenarTodos(todos).map(item => (
                    <Todo
                        key={item.id}
                        todo={item}
                        eliminarTodo={eliminarTodo}
                        editarEstadoTodo={editarEstadoTodo}
                    />
                ))}
                {
                    todos.length === 0 && (
                        <div className="alert alert-success text-center" role="alert">
                            Sin tareas
                        </div>

                    )
                }
            </ol>
        </div>

    )
}

export default TodoList