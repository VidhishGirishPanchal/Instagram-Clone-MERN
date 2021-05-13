import React, {useState} from 'react'
import "./Signin.css";
import {Link, useHistory} from "react-router-dom";
import M from "materialize-css";


function Signup() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const PostData = ()=>{

  //   if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
  //     M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
  //     return
  // }

    return fetch("/signup" , {
      method: "post",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        password,
        email
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
        M.toast({html: data.error, classes :"#f44336 red"})
      }else{
        M.toast({html: data.message, classes :"#4caf50 green"})
        history.push("/signin");
      }
    })
  }

    return (
        <div className="mycard">
            <div className="card auth-card input-field">
        <h1 className="instatext">Instagram</h1>
        <input 
        type="text"
        placeholder="name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
         />
        <input 
        type="text"
        placeholder="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
         />
          <input 
        type="password"
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         />
           <button onClick={()=>PostData()} className="btn waves-effect waves-light #1565c0 blue darken-3" type="submit" name="action">
           SIGNUP
           </button>
          <br />
          <br />
          
          Already have an account?<Link to="/signin" className="sendto">Signin</Link>
        </div>
        
        </div>
    )
}

export default Signup
