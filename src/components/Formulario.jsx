import React, { useState } from 'react'
import { Toast } from './Toast'
import { v4 as uuidv4 } from 'uuid'

const Formulario = ({ agregarTodo }) => {

  const initialState = {
    nombre: '',
    descripcion: '',
    estado: 'pendiente',
    prioridad: false
  }
  const [todo, setTodo] = useState(initialState)

  const { nombre, descripcion, estado, prioridad } = todo

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre.trim()) {
      e.target[0].focus()
      Toast.fire({
        icon: 'error',
        title: 'Nombre vacío'
      })
      return
    }
    if (!descripcion.trim()) {
      e.target[1].focus()
      Toast.fire({
        icon: 'error',
        title: 'Descripción vacía'
      })
      return
    }

    Toast.fire({
      icon: 'success',
      title: 'Agregado'
    })

    agregarTodo({
      nombre: nombre,
      descripcion: descripcion,
      estado: estado === 'pendiente' ? false : true,
      prioridad: prioridad,
      id: uuidv4()
    })
    setTodo(initialState)
  }

  const handleChange = e => {
    const { name, value, checked, type } = e.target
    setTodo({
      ...todo,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  return (
    <>
      <h2>Agregar TODO</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className='form-control mt-2'
          name='nombre'
          placeholder='Ingrese todo nombre'
          value={nombre}
          onChange={handleChange}
        />

        <textarea
          className='form-control mt-2'
          name='descripcion'
          placeholder='Descripción'
          value={descripcion}
          onChange={handleChange}
        />

        <select
          name="estado"
          className='form-control mt-2'
          value={estado}
          onChange={handleChange}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>

        <div className='form-check'>
          <input
            type="checkbox"
            name="prioridad"
            className='form-check-input'
            checked={prioridad}
            onChange={handleChange}
          />
          <label htmlFor="prioridad" className='form-check-label'>
            Prioridad
          </label>
        </div>
        <button className='btn btn-primary'>Agregar</button>
      </form>
    </>
  )
}

export default Formulario