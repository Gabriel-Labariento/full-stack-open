import Part from "./Part"

const Content = (props) => {
  const names = [props.part1, props.part2, props.part3]
  const number = [props.exercises1, props.exercises2, props.exercises3]
  return (
    <>
      <Part name={names[0]} number={number[0]}></Part>
      <Part name={names[1]} number={number[1]}></Part>
      <Part name={names[2]} number={number[2]}></Part>
    </>
  )
}

export default Content