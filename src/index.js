import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store"


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
store.subscribe(rerenderApp)



reportWebVitals()
export default rerenderApp
