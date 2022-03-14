import React from "react";
import { useState } from "react";
export default function Whishlist() {
  const [whishLis, setWishList] = useState("");
  const [arr, setArr] = useState([]);
  
  const addItem = (e) => {
   
 let   newArray = [...arr, whishLis];
    setArr(newArray);
    console.log("newArray ", newArray, "arr ", arr);
    setWishList(" ");
  };
   const handleChange=(e)=>{
        console.log('first ', e.target.value)
        setWishList(e.target.value);
        
       
    }
  return (
    <div>
      <h1>Whishlist</h1>
      <input
        type="text"
        disabled={arr.length > 2 ? true : false}
        onChange={handleChange}
        placeholder="add whishlist"
        id="whishlist"
      />
      <p style={{ color: "red" }}>
        {" "}
        {arr.length > 2 ? "you cant add more item" : null}{" "}
      </p>
      <button disabled={arr.length > 2 ? true : false} onClick={addItem}>
        ADD
      </button>
      <br />

      {arr.map((item, index) => {
        return <p key={index}>{item} </p>;
      })}
    </div>
  );
}
