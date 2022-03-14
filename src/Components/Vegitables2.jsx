import React from 'react'
import {useState} from 'react';

export default function Vegitables2() {
    const vegitable=['tomatoes', 'potatoes','carrots','onions'];
    const quantity=[10,8,5,7];
    const[count1, setCount1]=useState(quantity[0])
    const[count2, setCount2]=useState(quantity[1])
    const[count3, setCount3]=useState(quantity[2])
    const[count4, setCount4]=useState(quantity[3])
  return (
    <div>Vegitables2
        <h1> <span>{vegitable[0]} </span> {count1}  </h1>
        <button onClick={()=>{setCount1(count1+1)}}> + </button>
   
     <button onClick={()=>{setCount1(count2-1)}}> - </button>
     <hr/>
     <h1> <span>{vegitable[1]} </span> {count2}  </h1>
        <button onClick={()=>{setCount2(count2+1)}}> + </button>
   
     <button onClick={()=>{setCount2(count3-1)}}> - </button>
     <h1> <span>{vegitable[2]} </span> {count3}  </h1>
        <button onClick={()=>{setCount3(count3+1)}}> + </button>
   
     <button onClick={()=>{setCount2(count2-1)}}> - </button>
     <hr/>
     <h1> <span>{vegitable[3]} </span> {count4}  </h1>
        <button onClick={()=>{setCount4(count4+1)}}> + </button>
   
     <button onClick={()=>{setCount4(count4-1)}}> - </button>
     <hr/>

    </div>
  )
}
