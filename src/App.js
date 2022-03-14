import React from 'react'
import {useState} from 'react';
import './App.css';
import Whishlist from './Components/Whishlist'

import Vegitables2 from './Components/Vegitables2';
function App() {
const[data2,setData2]=useState(0)
  
  return (
    <div className="App">
      hiii
      <Whishlist />
      <hr/>
    
        <Vegitables2 num={20} />
    </div>
  );
}

export default App;
