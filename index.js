import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.all}
    {props.text}
  </button>
)

const Hist = (props) => {
  const {  good, neutral, bad, sum, sump  } = props
  let res = sump / sum
  let tot = good / sum
  if (sum === 0) {
    return (
    <div>
      <p>  </p>
      <p>  </p>
      <p>  </p>
      <p>  </p>
      <p><b>No feedback given</b></p>
    </div>)
  } else {
    return (
    <div>
      <Stadisticas text="Good" value= {good}></Stadisticas>
      <Stadisticas text="Neutral" value= {neutral}></Stadisticas>
      <Stadisticas text="Bad" value= {bad}></Stadisticas>
      <Stadisticas text="Average" value= {res}></Stadisticas>
      <Stadisticas text="Positive" value= {tot}></Stadisticas>
    </div>)
  }

}

const Stadisticas = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [sum, setSum] = useState(0)
  const [sump, setSump] = useState(0)
  const [pos, setPos] = useState(0)

  const SetToGood = newGood => {
    setSum(sum + 1)
    setSump(sump + 1)
    setPos(pos + 1)
    setGood(newGood)
  }

  const SetToNeutral = newNeutral => {
    setSum(sum + 1)
    setSump(sump + 0)
    setNeutral(newNeutral)
  }

  const SetToBad = newBad => {
    setSump(sump - 1)
    setSum(sum + 1)
    setBad(newBad)
  }
  console.log("puntos", sump, "entre", sum)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => SetToGood(good + 1)} text="Bueno" />
      <Button handleClick={() => SetToNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => SetToBad(bad + 1)} text="Malo" />
      <h2>Statistics</h2>
      <Hist good={good} neutral={neutral} bad={bad} sum={sum} sump={sump} />

    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
