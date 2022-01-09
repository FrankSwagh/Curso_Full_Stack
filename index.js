import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.all}
    {props.text}
  </button>
)

const App = () => {
  const [selected, setSelected] = useState(0)
  const [voto, setVoto] = useState(0)
  const [puntos, setPuntos] = useState([0, 0, 0, 0, 0, 0])

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  

  const Copiar = () => {
    const copy = [...puntos]
    copy[selected] += 1
    setPuntos(copy)
    setVoto(copy[selected])
    console.log(copy)
  }


  const SetRandom = () =>{
    let numero = Math.floor(Math.random() * ((5 + 1 )- 1) + 1)
    setSelected(numero)
  }

  return (
    <div>
      <Button handleClick= {() => SetRandom(selected)} text="Next anecdote"/>
      <p>{anecdotes[selected]}</p>
      <Button handleClick = {Copiar} text = "Vote"/>
      <p>Has {voto} votes</p>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))
