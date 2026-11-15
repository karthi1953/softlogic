import React from 'react'
import { useState } from 'react'
const ArrayDelete = () => {
    const [cities,setCities] =useState(['chennai','Kandy','Galle','Jaffna'])
    const delCities = () => {
        setCities((cities)=>{
            return cities.filter((el)=> el!=="chennai")
        })
    }
  return (
    <div>
      {cities.map((city, index) => (<div>{city}</div>))}
      <button onClick={delCities}>Delete</button>
    </div>
  )
}

export default ArrayDelete
