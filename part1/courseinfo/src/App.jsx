
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

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
  
  const getTotal = () => {
    let sum = 0;
    parts.forEach(part => {
      sum += part.exercises;
    });
    return sum;
  }

  const total = getTotal();
  
  return (
    <>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total total={total}></Total>
    </>
  )
}

export default App