import React from 'react'
import "./App.css"
import Headers from "./components/Headers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogContainer} from "./components/Dialogs/DialogContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {UserContainer} from "./components/Users/UserContainer";



const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Headers/>
                <Navbar/>
                <Route path="/profile/:userId?" render={ () => <ProfileContainer/> } />
                <Route path="/dialogs" render={ () => <DialogContainer/> } />
                <Route path="/users" render={ () => <UserContainer/> } />
                <Footer/>
            </div>
        </BrowserRouter>
    )
}


export default App