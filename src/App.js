import React from 'react'
import "./App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogContainer} from "./components/Dialogs/DialogContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {UserContainer} from "./components/Users/UserContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";



const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
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