import React, { useState } from 'react'

const ArrofObj = () => {
    const[arr,setArr]=useState([ { id: 1, name: "Arun", marks: 75 },
                        { id: 2, name: "Bala", marks: 85 },
                        { id: 3, name: "Kumar", marks: 65 }])

  return (
    <div style={{backgroundColor: 'blue'}}>
      {arr.map((e,i)=>(
        <>
        <div key={i}>{e.name}</div>
        <div key={i}>{e.marks}</div>
        </>

      ))}
    </div>
  )
}

export default ArrofObj;
