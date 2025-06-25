
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

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

  const getTotal = (parts) => {
    let sum = 0;
    parts.forEach(part => {
      sum += part.exercises;
    });
    return sum;
  }
  
  return (
    <>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total total={getTotal(course.parts)}></Total>
    </>
  )
}

export default App