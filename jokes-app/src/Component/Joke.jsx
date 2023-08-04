import React from "react";
export default function Joke(props){
    return(
        <>
        {props.setup && <h3>Setup:{props.setup}</h3>}
    {/* <h3>Setup:{props.setup}</h3> */}
    <p>Puncline:{props.puncline}</p>
        </>
    )
}