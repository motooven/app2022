import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store"
import {Provider} from "react-redux";


const rerenderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
}

rerenderApp()
store.subscribe(rerenderApp)



reportWebVitals()
export default rerenderApp
