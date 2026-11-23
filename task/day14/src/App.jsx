import React, { useEffect, useState } from 'react'

const App = () => {
    const[products,setProducts] = useState([])
    const [time,setTime]=useState(0)
  const fetchProducts = async()=>{
    const res = await fetch("https://dummyjson.com/products?limit=3")
    const data = await res.json()
    setProducts(data.products)
    console.log(data)
  }

  useEffect(()=>{
    fetchProducts();

  },[])

  useEffect(()=>{
        setInterval(()=>{
      setTime(time+1)
    },1000)
  },[time])

  return (
    <>
    <h1>{time}</h1>
    <div className='flex justify-center flexwrap m-10 gap-2 '>
        {products.map((el,i)=>(
          <div className='border border-4 gap-2' key={i}>
          <img src={el.images}/>
          <h1>{el.title}</h1>
          <h4>{el.price}</h4>
          <button>Buy Now</button>
          </div>
      ))}

    </div>

    </>
  )
}

export default App
