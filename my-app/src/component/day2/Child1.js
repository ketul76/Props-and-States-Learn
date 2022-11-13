import react, { useState } from 'react';
import Parent1 from './Parent1';

function Child1({name1,setName,object,setObject,arrObj,setArrObj}) {
    // console.log(Object.keys(props.city))
    const [users,setUsers] = useState({
        name : "",
        city: "",
    }) 

    // // props.users.map((cvalue,index,array) => ())
    // const user1 =  props.users.filter(function (cvalue,index,array){
    //     return cvalue.name //   == "om";
    // })

    // let user2  = ''
    // props.users.forEach(function (value2,index,array) {
    //     user2 +=  value2.name //= "om";
    // })
    // console.log("User2 " , user2);
    function onChangeHandler(e){
        setUsers({...users,[e.target.name] : e.target.value})
    }
    function submitHandler(e) {
        e.preventDefault();
        
        let filterArray = arrObj.filter((value) =>{
            if(value.id === 2)
            {
                value.name = users.name
                value.city = users.city
                console.log("V:" ,value);
            }
            return arrObj; 
        })
        setArrObj(filterArray);
        console.log("arra 2 " , filterArray);
    }
    
    return (
        <>

            {/* {props.name}
            <br/>
            {props.age}
            <br/>
            {props.isActive.toString()}
            <br/>
            <ul>
            {props.languages.map((lang,index) => (
                <li key={index}>{lang}</li>
            ))}
            </ul>
            <br/>
            <ul>
            {props.users.map((usersData,index) => (
                
                    <li style={{fontSize:"3rem"}} key={index}>{usersData.name} {usersData.age}</li>
            ))}
            </ul>
            <br/>
            {props.city.name} {props.city.isActive} <br/> {props.city.population} */}

            {name1}
            <button onClick={function (){
                return setName(name1 == "ketul" ? "uday" : "ketul");
            } } > Click Here </button>
            <br/>

            {object.name} {object.age} {object.city}
            <button onClick={() => setObject({...object, name: object.name == "ketul"  ? "om" : "ketul"}) }>NAME CHANGE</button>
            <button onClick={() => setObject({...object, city: object.city == "Ahmedabad"  ? "Baroda" : "Ahmedabad"}) }>City CHANGE</button>
            {/* <button onClick={ () => setObject({name:"om",age:10,city: 'kadi'})} >Object Change</button> */}
            <br/><br/>

            {arrObj.map((e,index) => (
                <li key={index}>{e.name} {e.city}</li>
            ))}

            <br/>

            <button>Change Array Object Value</button>

            <br/>

            <form onSubmit={submitHandler} >
                <input type="text" name="name" placeholder='NAME:'  value={users.name} onChange={onChangeHandler}/>
                <input type="text" name="city" placeholder='CITY:'  value={users.city} onChange={onChangeHandler}/>
                <input type="submit" value="Submit"/>
            </form>

        </>
    )
}

export default Child1;