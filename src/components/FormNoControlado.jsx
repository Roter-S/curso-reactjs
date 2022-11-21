import React, { useRef } from 'react'

const FormNoControlado = () => {
    const formulario = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        const datos = new FormData(formulario.current)
        const objetosDatos = Object.fromEntries([...datos.entries()])
        const { todoName, todoDescripcion, todoEstado } = objetosDatos
        if (!todoName.trim() || !todoDescripcion.trim() || !todoEstado.trim()) {
            console.log('Vacio')
            return
        }
        console.log(objetosDatos)
    }

    return (
        <>
            <h2>FormNoControlado</h2>
            <form ref={formulario} onSubmit={handleSubmit} className='container'>
                <input
                    name='todoName'
                    placeholder='Ingrese Todo'
                    type='text'
                    className='form-control mb-2'
                    defaultValue='Tarea #1'
                />
                <textarea
                    name='todoDescripcion'
                    className='form-control mb-2'
                    placeholder='Ingrese descripcion del todo'
                    defaultValue='Descirpción Tarea #1'
                />
                <select name='todoEstado'
                    className='form-control mb-2'
                    defaultValue='Pendiente'
                >
                    <option value='pendiente'>Pendiente</option>
                    <option value='completada'>completada</option>
                </select>
                <button className='btn btn-primary'>Agregar</button>
            </form>
        </>
    )
}

export default FormNoControlado