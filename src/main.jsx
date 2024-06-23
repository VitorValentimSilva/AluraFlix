import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes'
import VideoProvider from './contextos/VideoProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VideoProvider>
      <AppRoutes />
    </VideoProvider>
  </React.StrictMode>,
)
