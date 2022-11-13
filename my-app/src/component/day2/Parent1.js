import react, { useState } from 'react';
import Child1 from "./Child1";

function Parent1(){
    const [name1,setName] = useState("ketul");
    const [object,setObject] = useState({
        name: "ketul",
        age: 25,
        city: "Ahmedabad",
    })

    const [arrObj,setArrObj] = useState([
        {id:1,name: "Ketul",city: "Ahmedabad"},
        {id:2,name: "Manan",city: "Mahmedabad"},
        {id:3,name: "Uday",city: "Surat"},
        {id:4,name: "Om",city: "Baroda"},
    ])
    // const name= "Ketul";
    // const age= 25;
    // const isActive = false;
    // const languages = ["Eng","guj","hin"];
    // const users = [
    //     {name:"manan" ,age: 20},
    //     {name:"om",age:10},]

    // const city = {
    //     name: "Ahmedabad",
    //     isActive: true,
    //     population: 8000000,
    // }
    return (
   
        <>


         {<Child1 
            name1={name1}
            setName = {setName}

            object = {object}
            setObject = {setObject}

            arrObj = {arrObj}
            setArrObj = {setArrObj}
            /> }
        </>
    )
}

export default Parent1;