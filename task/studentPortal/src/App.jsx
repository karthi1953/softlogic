import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Courses from './pages/Courses'
import Assignments from './pages/Assignments'
import Navbar from './components/Navbar'

function App() {

  return (
   <>
  <Navbar/>

  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/assignments" element={<Assignments />} />

  </Routes>
    </>
  )
}

export default App
