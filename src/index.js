import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./Redux/State";


ReactDOM.render(
    <App state={state}/>,
  document.getElementById('root')
)


reportWebVitals()
