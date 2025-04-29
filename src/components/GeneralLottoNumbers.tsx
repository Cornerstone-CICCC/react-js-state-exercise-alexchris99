type Props = {
    Lotto: ()=> void
}

const GeneralLottoNumbers = (props: Props) => {
  return (
    <button type="button" onClick={props.Lotto}>Lotto Numbers</button>
  )
}

export default GeneralLottoNumbers