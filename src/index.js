import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import state from './Redux/state';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App state={state}/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)
}

rerenderEntireTree(state.getState())

state.subscribe(rerenderEntireTree)