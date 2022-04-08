import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addPostProfile} from "./Redux/State";


const rerenderApp = () => {
    ReactDOM.render(
        <App state={state} addPostProfile={addPostProfile}/>,
        document.getElementById('root')
    )
}

rerenderApp()



reportWebVitals()
export default rerenderApp
