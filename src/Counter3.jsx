import { useState } from "react"


export default function Counter3() {
    const[counter,last]=useState(0)
    function run2(){
        last(counter+5)
    }
  return (
    <div>
        <p>Hello React:{counter}</p>
        <button onClick={()=>{run2()}}>+</button>
        </div>
  )
}
