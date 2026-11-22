 import React from 'react'
 import {useState} from 'react'
 
 const App = () => {
   const [task, setTask] = useState('')
   const [status, setStatus] = useState('pending')
   const [date,setDate] = useState('')
   const [tasks, setTasks] = useState([])
   const[edit, setEdit] = useState(null)

    const handleAddTask = (e) => {
      e.preventDefault()
      if(!date){
        alert("Please select a date")
        return
      }
      setTasks([...tasks, {task: task, status: status, date: date}])
      setTask("")
    }

    const handleEdit= (el,taskId)=>{
      setTask(el.task)
      setStatus(el.status)
      setDate(el.date)
      setEdit(taskId)

    }

    const handleUpdateTask = (e)=>{
      e.preventDefault()
      setTasks(tasks.map((el,i)=> (i==edit?{task:task, status:status, date:date}:el)))
      setTask("")
      setStatus("")
      setDate(null)
      setEdit(null)
    }
    const handleDelete = (taskId)=>{
        setTasks(tasks.filter((e,i)=>(i!==taskId)))
    }
 
   return (
    <>

     <form className='m-2 d-flex justify-content '>
        <input className="border rounded" type="text" placeholder="Enter the Task" name="task"value={task} onChange={(e)=>setTask(e.target.value)}/>
       <select className="border rounded" value={status} name="status" onChange={(e)=>setStatus(e.target.value)}>
         <option value="pending">Pending</option>
         <option value="in-progress">In Progress</option>
         <option value="completed">Completed</option>
       </select>
       <input className="border rounded" value={date} onChange={(e)=>{setDate(e.target.value)}} type="date" name="date"/>
       {edit==null?(<button className="border rounded bg-blue-500 text-white" type="submit" onClick={(e)=>handleAddTask(e)}>Add Task</button>):(
        <button className="border rounded bg-green-500 text-white" type="submit" onClick={(e)=>handleUpdateTask(e)}>Update Task</button>
       )}
     </form>

    {tasks.length===0?<h1>No datas available to show</h1> : (
      
     <div>
      {tasks.map((el,i)=>(
        <div key={i}>
        <h2>{el.task}</h2>
        <h3>{el.status}</h3>
        <h4>{el.date}</h4>
        <button className="border rounded bg-yellow-500 text-white" onClick={() => handleEdit(el,i)}>Edit</button>
        <button className="border rounded bg-red-500 text-white" onClick={() => handleDelete(i)}>Delete</button>
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
 