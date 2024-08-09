import { useState } from "react"

export default function Counter4() {
    const[counter,lora]=useState(0)
    function run4(){
        lora(counter-5)
    }
  return (
    <div>
        <p>Hello React:{counter}</p>
        <button onClick={()=>{run4()}}>-</button>

    </div>
  )
}
