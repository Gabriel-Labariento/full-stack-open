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

const StatisticLine = (props) => {
  if (props.text == 'positive') return (
    <tr>
     <td>{props.text} {props.value} %</td>
    </tr> 
  )
  return (
    <tr>
      <td>{props.text} {props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const average = props.average
  const positive = props.positive

  if (good + neutral + bad <= 0) return (<p>No Feedback Given</p>)
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good}></StatisticLine>
        <StatisticLine text="neutral" value={neutral}></StatisticLine>
        <StatisticLine text="bad" value={bad}></StatisticLine>
        <StatisticLine text="average" value={average}></StatisticLine>
        <StatisticLine text="positive" value={positive}></StatisticLine>
      </tbody>
    </table>
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
       <Statistics good={good} neutral={neutral} bad={bad} average={average} positive={positive}></Statistics>
    </>
  )
}

export default App