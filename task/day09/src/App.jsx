import React from 'react'
import { useState } from 'react'
import Arrays from './Pages/Arrays'
import ArrayAdd from './Pages/ArrayAdd'
import ArrayUpdate from './Pages/ArrayUpdate'
import ArrayDelete from './Pages/ArrayDelete'
import Crud from './Pages/crud'
const App = () => {
  return(
    <>
    <div>
      <Arrays/>
    </div>
    <div>   
       <ArrayAdd/>
      </div>

    <div>   
       <ArrayUpdate/>
    </div>

    <div>    
      <ArrayDelete/>
    </div>

    <div><Crud/></div>

    </>

  )
}

export default App
