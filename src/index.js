import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/State";


const rerenderApp = () => {
    ReactDOM.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    )
}

rerenderApp()
store.subscriber(rerenderApp)



reportWebVitals()
export default rerenderApp
