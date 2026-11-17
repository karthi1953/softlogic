import React, { useState } from 'react'

const ArrofObj = () => {
    const[arr,setArr]=useState([ { id: 1, name: "Arun", marks: 75 },
                        { id: 2, name: "Bala", marks: 85 },
                        { id: 3, name: "Kumar", marks: 65 }])

    const newStudent = { id: 4, name: "Priya", marks: 90 }

    const handleAdd = () => {
      setArr((arr)=>[...arr,newStudent])
    }
    const handleUpdate = () => {
      setArr((p)=>[...p].map((e,i)=>e.id==2?{...e,marks:95}:e))
    }
    const handleDelete = (id)=> {

      setArr((p)=>[...p].filter((e)=>e.id!=id))

    }

  return (
    <div>
      {arr.map((e)=>(
        <div key={e.id}>
          <div>{e.name}</div>
          <div>{e.marks}</div>
          <button onClick={()=>handleDelete(e.id)}>Delete</button>
        </div>
      ))}

      
      <button onClick={handleAdd}>Add Student</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  )

}

export default ArrofObj;
