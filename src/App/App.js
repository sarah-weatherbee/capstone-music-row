import React from 'react';
import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Auth />
      <Home />
    </div>
  );
}

export default App;
