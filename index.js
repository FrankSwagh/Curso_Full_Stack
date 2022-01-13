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
  const [votado, SetVotado] = useState(0)

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

    let x = 0
    let menor = 0
    let mayor = 0
    let prio


    for (x = 0; x < 5; x++) {
      prio = mayor
      if (mayor === menor) menor += 1

      if (mayor >= 6) menor = 0

      console.log("prim", copy[mayor])
      console.log("segundo", copy[menor])

      if (copy[mayor] >= copy[menor] ) {
        prio = mayor

        menor += 1
      } 
      if (copy[mayor] < copy[menor]) {
        mayor=menor  
      } 


    }
    //console.log("mayor",mayor)
    //console.log("may", copy[mayor])
    SetVotado(prio)
    setPuntos(copy)
    setVoto(copy[selected])
    console.log(copy)

  }


  const SetRandom = () => {
    let numero = Math.floor(Math.random() * (6 + 0) - 0)
    setSelected(numero)

  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button handleClick={() => SetRandom(selected)} text="Next anecdote" />
      <Button handleClick={Copiar} text="Vote" />
      <p>Has {voto} votes</p>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[votado]}</p>
      <p>Has {puntos[votado]} votes</p>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))
