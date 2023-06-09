import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './global.css'
// should be  <React.StrictMode> <App /> </React.StrictMode>
// but it renders the app twice, causing duplicate visualizations
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
