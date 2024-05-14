import React from 'react'
import CustomerItem from '../CustomerItem/Customerİtem';
import "./CustomerList.css"


function CustomerList() {
  return (
    <ul className='customer-list'>
     <CustomerItem/>
    </ul>
  );
}

export default CustomerList