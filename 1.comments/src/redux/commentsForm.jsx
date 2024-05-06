import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addComments } from './commentSlice';


const CommentForm=()=>{
    const[Comment, setComment]=useState('');
    const dispatch=useDispatch();

    const handleSubmit=()=>{
        dispatch(addComments(Comment));
        setComment('');
    }

return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={Comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Yorumunuzu buraya yazın"
      />
      <button type="submit">Yorum Ekle</button>
    </form>
  );
};

export default CommentForm;


  

