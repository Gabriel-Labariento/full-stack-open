import { useState } from 'react'

const Button = (props) => {
  return (
      <button onClick={props.onClick}>{props.text}</button>
  )
}

const Heading = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

const VoteDisplay = ({votes}) => (
  <p>It has {votes} votes</p>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [votes, setVotes] = useState({
    0: 0, 1: 0, 2: 0,
    3: 0, 4: 0, 5: 0,
    6: 0, 7: 0
  })
  

  const [selected, setSelected] = useState(0)
  const [maxVotesIndex, setMaxVotesIndex] = useState(0)
  const [maxVotes, setMaxVotes] = useState(0)
  
  const selectNewAnecdote = () => { // min and max included 
   const newSelected = Math.floor(Math.random() * (anecdotes.length))
   console.log(newSelected)
   setSelected(newSelected)
  }

  const addVote = index => {
    let copy = {...votes}
    copy[index] += 1
    setVotes(copy)
    
    let maxIndex = maxVotesIndex;
    let currMax = maxVotes;
    
    for(const[key, value] of Object.entries(copy)) {
      if (value > currMax) {
        currMax = value;
        maxIndex = key;
      }
    }
    setMaxVotes(currMax)
    setMaxVotesIndex(maxIndex)
    
    console.log("added vote to index", index, "its votes are now", copy[index])
  }

  const voteButtonHandler = () => {
    addVote(selected);
  }

  return (
    <div>
      <Heading text="Anecdote of the day"></Heading>
      {anecdotes[selected]}<br></br>
      <VoteDisplay votes={votes[selected]}></VoteDisplay>
      <div>
        <Button onClick={() => selectNewAnecdote()} text="next anecdote"></Button>
        <Button onClick={() => voteButtonHandler(selected, maxVotes, maxVotesIndex)} text="vote"></Button>
        <Heading text="Anecdote with most votes"></Heading>
        {anecdotes[maxVotesIndex]}<br></br>
        <VoteDisplay votes={votes[maxVotesIndex]}></VoteDisplay>
      </div>
    </div>
  )
}

export default App