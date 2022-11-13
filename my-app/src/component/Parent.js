import React,{useState} from 'react'
import Child from './Child'

export const Parent = () => {
    const [name,setName] = useState("ketul");
    const [number,setNumber] = useState(0);

    let varName = "ketul";
    const Number = 12345;
    const Boolean = true;
    const Array = ["name" ,1234,"ketul",false];
    const Obj = {
        name: "ketul",
        age: 25,
    };
    const ArrObj = [
        {name: "MAnan",age:20,},
        {name: "om",age:10},
    ];


    console.log(varName);

  return (
    <div>
        {/* <Child string={name}  setName={setName}  number={number} setNumber={setNumber}/> */}
        
    </div> 
  )
}

export default Parent;