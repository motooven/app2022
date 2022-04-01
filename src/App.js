import React from 'react'
import "./App.css"
import Headers from "./components/Headers";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Headers/>
              <Navbar/>
              <Route path="/profile" render={ () => <Profile/> } />
              <Route path="/dialogs" render={ () => <Dialogs/> } />
              <Footer/>
          </div>
      </BrowserRouter>
  )
}


export default App
