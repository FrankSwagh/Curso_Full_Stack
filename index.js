import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newGood => {
    setGood(newGood)
  }

  const setToNeutral = newNeutral => {
    setNeutral(newNeutral)
  }

  const setToBad = newBad => {
    setBad(newBad)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text = "Bueno" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text = "Neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text = "Malo" />
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
/* 
const Header = (props) => {
  return (
    <div>
      <p>El nombre del curso es {props.course.name}</p>
    </div>
  )
}

const Content = (props) => {
  
  let arreglo = []
  arreglo = Object.values(props.parts)
  console.log(arreglo)
  return (

    <div>

      <p>El contenido se basa en {arreglo[1][0].name} con {arreglo[1][0].exercises} ejercicios </p>
      <p>El contenido se basa en {arreglo[1][1].name} con {arreglo[1][1].exercises} ejercicios </p>
      <p>El contenido se basa en {arreglo[1][2].name} con {arreglo[1][2].exercises} ejercicios </p>

    </div>
  )
}

const Total = (props) => {
  let arreglo = []
  arreglo = Object.values(props.parts)
  return (
    <div>
      <p>La suma es igual a {arreglo[1][0].exercises + arreglo[1][1].exercises + arreglo[1][2].exercises} </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 
*/