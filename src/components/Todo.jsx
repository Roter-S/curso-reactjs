import React from 'react'

const Todo = ({ todo, eliminarTodo, editarEstadoTodo }) => {
    const { id, nombre, descripcion, estado, prioridad } = todo

    return (

        


        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    {nombre}
                    <span
                        className={`btn badge rounded-pill ${estado ? "bg-success" : "bg-primary"}`}
                        onClick={() => editarEstadoTodo(id)}
                    >
                        ({estado ? 'Finalizado' : 'Pendiente'})
                    </span>
                </div>
                {descripcion}
            </div>
            <span className="badge bg-primary rounded-pill">{prioridad && 'Prioridad'}</span>
            <div className="btn-group-vertical btn-group-sm ms-3" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger" onClick={() => eliminarTodo(id)}>Eliminar</button>
            </div>
        </li>
    )
}

export default Todo