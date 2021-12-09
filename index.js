import React from 'react'
import ReactDOM from 'react-dom'

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