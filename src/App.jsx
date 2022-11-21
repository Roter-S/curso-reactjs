import { useState } from 'react'
import FormNoControlado from './components/FormNoControlado'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormNoControlado />
      <Formulario />
    </>
  )
}

export default App
