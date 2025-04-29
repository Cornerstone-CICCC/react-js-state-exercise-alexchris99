import { useState } from "react"
import LightToggle from "./components/LightToggle"
import GeneralLottoNumbers from "./components/GeneralLottoNumbers"
import ClickCounter from "./components/clickCounter"
import "./App.css"

function App() {
  const [lightToggle, setLigthToggle] = useState<boolean>(false)
  const [genLotto, setLotto] =  useState([])
  const [count, setCount] =  useState(0)


  const handdleLightToggle = ()=>{
    setLigthToggle(!lightToggle)
  }

  let arr: number[] = []
  const createLotto = ()=>{
      arr = []
      for(let i=0; i<7; i++){

        const num = Math.floor((Math.random() * (50-1) + 1))
        arr.push(num)
      }
      setLotto(arr)
  }

  const handleIncrease = ()=>{
    setCount(count + 1)
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      width: "100%",
      alignItems: "center"
    }}>
      <h2>LigthToggle</h2>
      <LightToggle lightToggle={lightToggle} onToggle={handdleLightToggle}/>
      <div style={{
          background: lightToggle ? "white" : "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          width: "20rem",
          height: "20rem"
        }}>
      </div>

      <h2>General Lotto Numbers</h2>
      <GeneralLottoNumbers Lotto={createLotto}/>
      <div>
        <ul>
          {genLotto.map((lolottoNumber)=>(
            // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
            <li>{lolottoNumber}</li>
          ))}
        </ul>
      </div>

      <h2>Click Counter</h2>
      <ClickCounter count={handleIncrease}/>
      <div>
        <p>{count}</p>
      </div>
    </div>
  )
}

export default App
