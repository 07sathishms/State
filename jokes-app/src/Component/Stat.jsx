import React, { useCallback } from "react";
import { useState } from "react";
export default function Stat(){
const[count,Setcount] = useState(0);

const handleIncrement = () => {
    Setcount(count + 1);
  };
 const handledec = () => {
    Setcount(count - 1);
  };
  const handleres = () => {
    Setcount(0);
  };
       return(
        <div>
            <h1>{count}</h1>
           <input type="button" value="+" onClick={handleIncrement} />
           <input type="button" value="-" onClick={handledec} />
           <input type="button" value="reset" onClick={handleres} />
        </div>
       )
}