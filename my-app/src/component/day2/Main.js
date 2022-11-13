import React,{useState} from "react";
import Parent1 from "./Parent1";
import Child1 from "./Child1";
import Comp1 from "./comp/Comp1";
import Comp2 from "./comp/Comp2";
import Comp3 from "./comp/Comp3";
import Home from "./comp/Home";
import Error from "./comp/Error";

function Main(){
    const [conditional,setConditional] = useState('');
    return(
        <>
       

        <button onClick={() =>{setConditional("component1"); console.log(conditional)}}>Comp1</button>
        <button onClick={() =>{setConditional("component2"); console.log(conditional)}}>Comp2</button>
        <button onClick={() =>{setConditional("component3"); console.log(conditional)}}>Comp3</button>
        {/* <button onClick={() => {setConditional("Err") ;console.log(conditional)}}>Error</button> */}
        <br/>
        {conditional === "" &&  <Home/> }
        {conditional === "component1" && <Comp1/>}
        {conditional === "component2" && <Comp2/>}
        {conditional === "component3" && <Comp3/>}
        {conditional !== ("component1" || "component2" || "component3" ) && (<Error/>)}
        

        </>
    )
}

export  default Main;