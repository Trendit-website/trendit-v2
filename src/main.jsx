import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import DashboardContext from './context/Dashboard.jsx'
import QueryProvider from './providers/QueryProvider.jsx'
import AppearanceProvider from './providers/AppearanceProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <DashboardContext>
        <NextUIProvider>
          <QueryProvider>
            <AppearanceProvider>
            <App />
            </AppearanceProvider>
          </QueryProvider>
        </NextUIProvider>
      </DashboardContext>
    </React.StrictMode>
  </BrowserRouter>
)
