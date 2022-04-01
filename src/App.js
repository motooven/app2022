import React from 'react'
import "./App.css"
import Headers from "./components/Headers";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer";


const App = () => {
  return (
      <div className='app-wrapper'>
         <Headers/>
         <Navbar/>
         <Profile/>
         <Footer/>
      </div>
  )
}


export default App
