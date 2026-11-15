import React from 'react'
import { useState } from 'react'
const Arrays = () => {
  const [arrProgram, setArrProgram] = useState(['Js', 'Python', 'Java', 'C++', 'Kotlin'])

  return (
    <div>
      {arrProgram.map((el, i) => {
        return(
          <div> {el}</div>
        )

      })}
    </div>
  )

}

export default Arrays
