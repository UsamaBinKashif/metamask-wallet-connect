import React from 'react'
import Metamask from './components/Metamask';
import img from "./metamask.png";

import './App.css';

function App() {
  return (
    <div className="App">
    <>
     <div className="wrapper">
    <Metamask/>
       <img src={img} className="img-fluid" alt="logo"/>
     </div>
    </>
    </div>
    
  );
}

export default App;
