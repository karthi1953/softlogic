 import React from 'react'
 import {useState} from 'react'
 
 const App = () => {
   const [task, setTask] = useState('')
   const [status, setStatus] = useState('')
   const [date,setDate] = useState(null)
   const [tasks, setTasks] = useState([{task:"", status:"", date:""}])

    const handleAddTask = (e) => {
      e.preventDefault()
      setTasks([...tasks, {task: task, status: status, date: date}])
      setTask("")
    }
 
   return (
    <>

     <form className='m-2 d-flex justify-content '>
        <input className="border rounded" type="text" placeholder="Enter the Task" name="task"value={task} onChange={(e)=>setTask(e.target.value)}/>
       <select className="border rounded" name="status" onChange={(e)=>setStatus(e.target.value)}>
         <option value="pending">Pending</option>
         <option value="in-progress">In Progress</option>
         <option value="completed">Completed</option>
       </select>
       <input className="border rounded" onChange={(e)=>{setDate(e.target.value)}} type="date" name="date"/>
       <button className="border rounded bg-blue-500 text-white" type="submit" onClick={(e)=>handleAddTask(e)}>Add Task</button>
     </form>

    {tasks.length == 0 ? (<h1>No datas available to sow</h1>) : (
      
     <div>
      {tasks.map((e,i)=>(
        <div key={i}>
        <h2>{e.task}</h2>
        <h3>{e.status}</h3>
        <h4>{JSON.stringify(e.date)}</h4>
        </div>



      )
      )}
           </div>

    )
    }

     </>
   )
 }
 
 export default App
 