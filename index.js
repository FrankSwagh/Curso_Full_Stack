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
  return (
    <div>
      <p>El contenido se basa en {props.part} con {props.exercises} ejercicios, </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>La suma es igual a {props.exercises1 + props.exercises2 + props.exercises3} </p>
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'

  const part1 = { 
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name:'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
  <div>
    <Header course={course} />
    <Content part ={part1.name} exercises = {part1.exercises}/>
    <Content part ={part2.name} exercises = {part2.exercises}/>
    <Content part ={part3.name} exercises = {part3.exercises}/>
    <Total exercises1={part1.exercises }exercises2={part2.exercises} exercises3={part3.exercises} />
  </div>
)
}

ReactDOM.render(<App />, document.getElementById('root'))