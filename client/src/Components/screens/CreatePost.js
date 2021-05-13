import React, {useState} from 'react'
import "./CreatePost.css";
import {useHistory} from "react-router-dom";
import M from "materialize-css";

function CreatePost() {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    const PostDetails = ()=>{
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "insta-clone");
        data.append("cloud_name", "vdshgp");
        fetch("https://api.cloudinary.com/v1_1/vdshgp/image/upload",{
            method: "post",
            body: data
        })
        .then((res)=>{res.json()})
        .then((data)=>{setUrl(data.url)})
        .catch(err=>console.log(err))
// fetching createpost path
        return fetch("/createpost" , {
            method: "post",
            headers:{
              "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
              title,
              body,
              pic: url
             })
          }).then((res)=>res.json())
          .then(data=>{
            console.log(data);
            if(data.error){
              M.toast({html: data.error, classes :"#f44336 red"})
            }else{
              M.toast({html: "Created Post Successfully.", classes :"#4caf50 green"})
              history.push("/");
            }
          })
    }

    return (
        <div className="card createpostcard input-field">
        <input 
        type="text" 
        placeholder="Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
         />
        <input 
        type="text" 
        placeholder="Body" 
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        />

            <div className="file-field input-field">
        <div className="btn #1565c0 blue darken-3">
            <span>UPLOAD IMAGE</span>
            <input type="file" onChange={(e)=>setImage(e.target.files)} />
        </div>
        <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
        </div>
        </div>
        <button onClick={PostDetails} className="btn waves-effect waves-light #1565c0 blue darken-3" type="submit" name="action">
           SUBMIT POST
           </button>
           
        </div>
    )
}

export default CreatePost
