import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addComments } from './commentSlice';
import { formatProdErrorMessage } from '@reduxjs/toolkit';

const CommentForm=()=>{
    const[text, setText]=useState('');
    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        dispatch(addComments(text));
        setText('');
    }
}
return(
    <form onSubmit={handleSubmit}>
    <input placeholder='Yorum ekleyin...' type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
    <button type="submit">Add Comment</button>
</form>
)

export default CommentForm;


  

