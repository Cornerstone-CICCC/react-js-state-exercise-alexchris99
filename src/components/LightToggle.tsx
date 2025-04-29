type Props = {
    lightToggle: boolean
    onToggle: () => void
}

const LightToggle = (props: Props) => {
  return (
    <div>
        <button type="button" onClick={props.onToggle}>Ligth Toggle</button>
    </div>
  )
}

export default LightToggle