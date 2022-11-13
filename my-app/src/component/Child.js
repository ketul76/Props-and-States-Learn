import React,{useState} from "react";

function Child({string,setName,number,setNumber}){
    return(
        <>
            {string}
            <button onClick={() => setName(string === "ketul" ? "uday" : "ketul") }>Click</button>
            <br/>
            {number}
            <button onClick={() => (number < 5 ? setNumber(number + 1) : false)}>Increase</button>
            <button onClick={() => (number !== 0 && setNumber(number - 1) )}>Decrease</button>
        </>
    )
}


export default Child;