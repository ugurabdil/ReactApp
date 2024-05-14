import React from 'react'
import { FaPlus } from "react-icons/fa";
import '../CustomerForm/CustomerForm.css'
function CustomerForm() {
  return (
    
      <form className='customer-form' action=""> <input type="text" className="customer-input" placeholder='Add a new customer' />
      <button className='customer-form-btn'> <FaPlus /></button>
      </form>
     
    
  )
}

export default CustomerForm