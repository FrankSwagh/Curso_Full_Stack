import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <p>El nombre del curso es {props.course}</p>
    </div>
  )
}

const Content = (props) => {
console.log(props.parts)
let arreglo = []
arreglo = Object.values(props.parts)
console.log(arreglo)
console.log(arreglo[0].name)
console.log(arreglo[0].exercises)
  return (
    
    <div>
    
        <p>El contenido se basa en {arreglo[0].name} con {arreglo[0].exercises} ejercicios </p>
        <p>El contenido se basa en {arreglo[1].name} con {arreglo[1].exercises} ejercicios </p>
        <p>El contenido se basa en {arreglo[2].name} con {arreglo[2].exercises} ejercicios </p>
        
    </div>
  )
}

const Total = (props) => {
  let arreglo = []
  arreglo = Object.values(props.parts)
  return (
    <div>
      <p>La suma es igual a {arreglo[0].exercises + arreglo[1].exercises + arreglo[2].exercises} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))