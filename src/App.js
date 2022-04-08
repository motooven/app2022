import React from 'react'
import "./App.css"
import Headers from "./components/Headers";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";


const App = (props) => {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Headers/>
              <Navbar/>
              <Route path="/profile" render={ () => <Profile state={props.state}/> } />
              <Route path="/dialogs" render={ () => <Dialogs state={props.state}/> } />
              <Footer/>
          </div>
      </BrowserRouter>
  )
}


export default App
