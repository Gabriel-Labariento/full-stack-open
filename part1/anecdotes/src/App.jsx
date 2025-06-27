import { useState } from 'react'

const Heading = ({text}) => {
  return (
     <h2>{text}</h2>
  )
}

const Button = (props) => (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )

const Statistics = (props) => {
  if (props.text == 'positive') return (
     <p>{props.text} {props.value} %</p>
  )
  return (
     <p>{props.text} {props.value}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const calculateAverage = () => {
    const newAverage = (good - bad) / (good + bad + neutral)
    setAverage(newAverage)
  }

  const findPositive = () => {
    const positiveRatio = good / (good + bad + neutral) * 100
    setPositive(positiveRatio)
  }

  const incrementGood = good => {
    const newValue = good + 1
    console.log("good value is", newValue)
    setGood(newValue)
    calculateAverage()
    findPositive()
  }

  const incrementNeutral = neutral => {
    const newValue = neutral + 1
    console.log("neutral value is", newValue)
    setNeutral(newValue)
    calculateAverage()
    findPositive()
  }

  const incrementBad = bad => {
    const newValue = bad + 1
    console.log("bad value is", newValue)
    setBad(newValue)
    calculateAverage()
    findPositive()
  }

  return (
    <>
       <Heading text='give feedback'></Heading>
       <Button onClick={() => incrementGood(good)} text="good"></Button>
       <Button onClick={() => incrementNeutral(neutral)} text="neutral"></Button>
       <Button onClick={() => incrementBad(bad)} text="bad"></Button>
       <Heading text="statistics"></Heading>
       <Statistics text="good" value={good}></Statistics>
       <Statistics text="neutral" value={neutral}></Statistics>
       <Statistics text="bad" value={bad}></Statistics>
       <Statistics text="average" value={average}></Statistics>
       <Statistics text="positive" value={positive}></Statistics>
    </>
  )
}

export default App