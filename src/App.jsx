import React from 'react'
import MainLayout from './layout/MainLayout'
import MainRouter from './routes/MainRouter'

const App = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
      <MainRouter/>
    </div>
  )
}

export default App
