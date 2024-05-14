import { useState } from 'react'
import './App.css'

import CustomerForm from './Components/CustomerForm/CustomerForm';
import CustomerList from './Components/CustomerList/CustomerList';

function App() {
  

  return (
    <div className='App'>
      <h1>Cutomer Manage System</h1>
      
      <CustomerForm/>
      <CustomerList/>
    </div>
  )
}

export default App
