import React from 'react'
import '../App.css';

function ComCreate() {
  return (
    <div className='com-create'>
        <input className='com-input' placeholder='Yorum yaz...' type="text" />
        <button className='com-btn'>Yorum yap</button>
        </div>
  )
}

export default ComCreate