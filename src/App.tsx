import React from 'react';
//import './App.css';
import './assets/styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthorList from './Components/AuthorList/AuthorList';

function App() {
  return (
    <div className="App">
      <h1> Library workspace </h1>
        <AuthorList />
    </div>
  );
}

export default App;
