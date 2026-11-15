import React from 'react'
import { useState } from 'react'

const ArrayUpdate = () => {
    const [fruits, setFruits] = useState(['Apple', 'Banana', 'Mango', 'Orange'])
    const updateFruits=() => {
        setFruits((fruits) => (fruits.map((fruit, index) => {
            if(fruit =='Apple'){
                return 'Mango'
            }
            return fruit
        })))
    }
  return (
    <div>
      {fruits.map((fruit, index) => (
        <div key={index}>{fruit}</div>
      ))}
      <button onClick={updateFruits}>Update</button>
    </div>
  )
}

export default ArrayUpdate
