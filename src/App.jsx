import imgUno from './assets/images/img-1.jpg'
import ButtonState from './components/ButtonState'
import ListFruts from './components/fruts/ListFruts'
import MyButton from './components/MyButton'
import UserMessage from './components/UserMessage'

const App = () => {
  const title = 'Mi titulo desde una constante'
  const classTitle = 'text-center'
  const user = true
  const fruts = ['🍇', '🍉', '🍊']
  const frutsTwo = ['🍎', '🍅', '🥝', '🍒']

  return (
    <>
      <ButtonState />
      <h1 className={classTitle}>{title}</h1>
      <img src={imgUno} alt={`img-${title}`} />
      <MyButton text="Boton 1" />
      <MyButton text="Boton 2" />
      <MyButton text="Boton 3" />
      <UserMessage user={user} />
      <ListFruts fruts={fruts} />
      <ListFruts fruts={frutsTwo} />
    </>
  )
}

export default App