import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
 // <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  //</Provider>
    
  ,
)
