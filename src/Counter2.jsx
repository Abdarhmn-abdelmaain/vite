import { useState } from "react"


export default function Counter2() {
    const[counter,latest]=useState(1)
    function run(){
        latest(counter-1)
    }
  return (
    <div><p>Hello React:{counter}</p>
    <button onClick={()=>{run()}}>-</button>
    </div>
  )
}

