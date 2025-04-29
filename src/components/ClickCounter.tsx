type Props = {
    count: ()=> void
}

const ClickCounter = (props: Props) => {
  return (
    <button type="button" onClick={props.count}>Increase</button>
  )
}

export default ClickCounter