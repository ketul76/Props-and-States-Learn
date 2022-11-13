import React,{useState} from 'react';
import './App.css';

function App() {
  const [formData,setFormData] = useState({
    fname: "",
    lanme: "",
    email: "",
    password: "",
    address: "",
    gender: "",
  });
  
  const [fnameErr,setFnameErr] = useState(false);
  const [lnameErr,setlnameErr] = useState(false);



  const onChangeHandler = (e,k) => {
    console.log(e.target.value);
    console.log(k);
    setFormData({...formData,[e.target.name]: e.target.value});
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    {formData.fname ? setFnameErr(true) : setFnameErr(false)}
    {formData.lname === "" ? setFnameErr(true) : setFnameErr(false)}
  }



  return (
    <div className="App">
      <h1>Register Form</h1>
      {/*  */}
      <form onSubmit={onSubmitHandler}>
      <div className="container">
          <div className="form-control">
          <label>First Name</label><br/>
          <input type="text" placeholder="Enter Your First Name" name='fname' value={formData.fname} onChange={(e) => onChangeHandler(e,"firstName") }  />
          {fnameErr ? <p  style={{color:"red"}}>this field required</p> : ""}
          </div>
          <div className="form-control">
          <label>Email</label><br/>
          <input type="email" placeholder="Enter Your Email" name='email' value={formData.email} onChange={(e) => onChangeHandler(e,"Email")} />
          </div>
          <div className="form-control">
          <label>Password</label><br/>
          <input type="password" placeholder="Enter Your Password" name='password' value={formData.password} onChange={(e) => onChangeHandler(e,"Password")} />
          </div>
          <div className="form-control">
            <label  for="gender">Gender:</label><br/>
            <input type="radio" id="male"  name="male-female" onChange={(e) => onChangeHandler(e,"male")} value="male"  /> Male
            <input type="radio" id="female" name="male-female"  onChange={(e) => onChangeHandler(e,"Female")} value="female" /> FeMale
          </div>

          <div className="form-control">
            <label>Last Name</label><br/>
            <input type="text" placeholder="Enter Your Last Name" value={formData.lanme} onChange={(e) => onChangeHandler(e,"Last Name")} />
          </div>
          <div className="form-control">
            <label>Select City</label><br/>
            <select onChange={(e) => onChangeHandler(e,"City")} >
            <option  value="ahmedabad">Ahmedabad</option>
            <option value="surat">Surat</option>
            <option value="Baroda">Baroda</option>
            </select>
          </div>
          <div className="form-control"> 
            <label>Hobbies:</label><br/>
            <input onChange={onChangeHandler} type="checkbox"  value="reading" />Reading
            <input onChange={onChangeHandler} type="checkbox"  value="Music" />Music
            <input onChange={onChangeHandler} type="checkbox"  value="writing" />Writing
          </div>
      
      </div><br/>
      {/*  */}
      <div className="address">
        <label>Address</label><br/>
        <input type="textarea" value={formData.address} onChange={(e) => onChangeHandler(e,"Address")}/><br/>
        <input className="submit" type="submit" value="Submit"/>
      </div>
      </form>
    </div>
  );
}

export default App;
