import { NavLink } from "react-router-dom"



const Navbar = () => {
  return (
    <>
    <div className="navbar flex justify-between items-center p-4 bg-blue-500 text-white position-sticky ">
        <div>
            Student Dashboard
        </div>
        <div className="flex justify-between gap-4">
            <NavLink to="/"  className={({ isActive }) => 
    isActive ? "bg-blue-600" : "hover:bg-blue-600"}>Dashboard</NavLink>
            <NavLink to="/profile" className={({ isActive }) => 
    isActive ? "bg-blue-600" : "hover:bg-blue-600"}>Profile</NavLink>
            <NavLink to="/courses" className={({ isActive }) => 
    isActive ? "bg-blue-600" : "hover:bg-blue-600"}>Courses</NavLink>
            <NavLink to="/assignments" className={({ isActive }) => 
    isActive ? "bg-blue-600" : "hover:bg-blue-600"}>Assignments</NavLink>
        </div>
    </div>
    
    </>

    )}

    export default Navbar;