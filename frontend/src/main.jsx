import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/assets/App.css'
import AppProvider from './app/providers/AppProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
 //<React.StrictMode>
    <AppProvider />
 //</React.StrictMode>,
)
