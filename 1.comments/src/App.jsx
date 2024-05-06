// src/App.js

import React from 'react';
import CommentForm from './redux/commentsForm';
import CommentList from './redux/commentsList';

function App() {
  return (
    <div className="App">
      <CommentForm />
      <CommentList />
    </div>
  );
}

export default App;
