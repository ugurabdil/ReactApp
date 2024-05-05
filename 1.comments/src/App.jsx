import { useState } from 'react'

import './App.css'
import ComCreate from './components/ComCreate'
import { useSelector } from 'react-redux'

function App() {

  return (
   <div className='App'>
    <div className='app-com-create' >
    <ComCreate></ComCreate>
    </div>
    
   </div>
  )
}

export default App
