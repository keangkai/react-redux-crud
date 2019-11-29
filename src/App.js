import React from 'react';
import './App.css';
import CommentForm from "./CommentForm"
import ShowAllComment from "./ShowComment"

function App() {
  return (
    <div className="App">
      <CommentForm />
      <ShowAllComment />
    </div>
  );
}

export default App;
