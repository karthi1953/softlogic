import React from 'react'

const crud = () => {
    const [mobiles,setMobiles] = useState([{id:1,name:"iPhone",price:50000},{id:2,name:"Samsung",price:40000},{id:3,name:"OnePlus",price:30000}])
  return (
    <div>
      {mobiles.map((mobile)=>{
        return(
            <div>
                <h1>{mobile.name}</h1>
                <h2>{mobile.price}</h2>
            </div>
        )})}
      
    </div>
  )
}


export default crud
