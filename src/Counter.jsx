
import { useState } from "react"

export default function Counter() {
  const[counter,lestcounter]=useState(1);
  function latest(){
    lestcounter(counter+1)

  }
  return (
    <div><p>Hello React:{counter}</p>
    <button onClick={()=>{latest()}}>+</button>
   </div>

  )
}


