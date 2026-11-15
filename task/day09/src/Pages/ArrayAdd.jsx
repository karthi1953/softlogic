import React from 'react'
import { useState } from 'react'
const ArrayAdd = () => {
     const [colors, setColors] = useState(['Red', 'Green', 'Blue'])  
 const addColor = () => {
    setColors((colors)=>([...colors,'yellow']))
 }
  return (
    <div>
      {colors.map((el,i)=>{
        return(
            <div> {el}</div>
        )
      })}
      <button onClick={addColor}>Add color</button>
    </div>
  )
}

export default ArrayAdd
