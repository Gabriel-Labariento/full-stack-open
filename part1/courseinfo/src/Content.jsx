import Part from "./Part"

const Content = (props) => {
  return (
    <>
      <Part name={props.part1.name} number={props.part1.exercises}></Part>
      <Part name={props.part2.name} number={props.part2.exercises}></Part>
      <Part name={props.part3.name} number={props.part3.exercises}></Part>
    </>
  )
}

export default Content