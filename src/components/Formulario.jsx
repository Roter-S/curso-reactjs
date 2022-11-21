import React, { useState } from 'react'

const Formulario = () => {

    const [todo, setTodo] = useState({
        todoName: '',
        todoDescripcion: '',
        todoEstado: 'pendiente',
        todoCheck: false
    })

    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const { todoName, todoDescripcion, todoEstado } = todo
        if (!todoName.trim() || !todoDescripcion.trim() || !todoEstado.trim()) {
            console.log('Vacio')
            setError(true)
            return
        }
        setError(false)
    }

    const handleChange = e => {
        const { name, value, checked, type } = e.target
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const PintarError = () => (
        <div className="alert alert-danger">Campos Vacios</div>
    )

    return (
        <div className='container'>
            <h3>Formulario</h3>
            {
                error && <PintarError />
            }
            <form onSubmit={handleSubmit} className='container'>
                <input
                    name='todoName'
                    placeholder='Ingrese Todo'
                    type='text'
                    className='form-control mb-2'
                    onChange={handleChange}
                    value={todo.todoName}
                />
                <textarea
                    name='todoDescripcion'
                    className='form-control mb-2'
                    placeholder='Ingrese descripcion del todo'
                    onChange={handleChange}
                    value={todo.todoDescripcion}
                />
                <select name='todoEstado'
                    className='form-control mb-2'
                    onChange={handleChange}
                    value={todo.todoEstado}
                >
                    <option value='pendiente'>Pendiente</option>
                    <option value='completada'>completada</option>
                </select>
                <div className="form-check">
                    <input
                        id="todoCheck"
                        name='todoCheck'
                        className="form-check-input"
                        type="checkbox"
                        onChange={handleChange}
                        checked={todo.todoCheck}
                    />
                    <label
                        htmlFor='todoCheck'
                        className="form-check-label"
                    >
                        Dar Prioridad
                    </label>
                </div>
                <button type='submit' className='btn btn-primary'>Agregar</button>
            </form>
        </div>
    )
}

export default Formulario