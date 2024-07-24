import React from "react"
import Home from "./home/Home"
import { Route, Routes } from "react-router-dom"
import Courses from "./courses/Courses"
import Signup from "./components/Signup"
import Contacts from "./contacts/Contacts"
import Abboutus from "./abbout/Abboutus"




function App() {
  return (<>

  <div className="dark:bg-slate-900 dark:text-white">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contact" element={<Contacts/>}/>
    <Route path="/abbout" element={<Abboutus/>}/>
    
   

  </Routes>
  </div>
  </>
   
  )
}

export default App

