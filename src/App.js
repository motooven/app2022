import React from 'react'
import "./App.css"
import Headers from "./components/Headers";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";


const App = (props) => {
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
