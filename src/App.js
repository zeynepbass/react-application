import Profile from './Profile.js'
import './App.css';
import React, { useState } from 'react';
import Api from './api.js';
import Film from "./film.js";
function App() {
 const [name,setName]=useState("");
 const [tnc,setTnc]=useState(false);
 const [interest,setInterest]=useState("");
  const [status,setStatus]=React.useState(true);
  function getFormData(e){
    console.warn(name,tnc,interest)
    e.preventDefault();
  }
  return (
    <div className="App">
      {status ? <h1>hello</h1>:null}

      <button onClick={()=>setStatus(!status)}>toggle</button>
      <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <form onSubmit={getFormData}>
     <h1 className='text-center'>form</h1>
     <input type="text" palceholder="enter name" onChange={(e)=>setName(e.target.value)} />     <br></br>
     <select onChange={(e)=>setInterest(e.target.value)}>
      <option>select options</option>
      <option>marvel</option>
      <option>dc</option>
     </select><br></br>
     <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>accept terms and conditions</span> <br></br>
     <button type="submit">submit</button>
     </form>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
 <Profile/>
 <Api/>
 <Film/>
    </div>
  );
}

export default App;
