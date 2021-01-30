import React from 'react';
//import './App.css';
import './assets/styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthorList from './Components/AuthorList/AuthorList';
import AuthorAddedList from "./Components/AuthorList/AuthorAddedList";

function App() {
  return (
    <div className="App">
      <h1> Library workspace </h1>
        <AuthorList />
        <AuthorAddedList/>
    </div>
  );
}

export default App;
