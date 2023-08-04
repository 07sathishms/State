import React, { useState } from "react";
export default function Form(){
    const[data,setData] = useState([]);
    const handle = (e)=>{
        e.preventDefault();

        const form = new FormData(e.target);
        const newdata = {
            name: form.get('name'),
            email: form.get('email')
        }
        setData([...data,newdata]);
        e.target.reset();
    }
  
    return(
        <div>
        <h1>REGISTRATION FORM</h1>
        <form onSubmit={handle}>
            <input type="text" name="name"></input>
            <input type="text" name="email"></input>
            <button type="submit">Submit</button>
        </form>

        <h1>Output</h1>

        {data.map((item) => (
  <div key={item.id}>
    Name: {item.name}, Email: {item.email}
  </div>
))}
        </div>
    )
}