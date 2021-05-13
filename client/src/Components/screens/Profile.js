import React from 'react'
import "./Profile.css"

function Profile() {
    return (
        <div className="profilemain">
           <div className="flexing">
               <div>
                   <img className="profile-pic"
                    src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="profile-pic"
                    />
               </div>
               <div style={{paddingLeft: "5%"}}>
                   <h1>Ramesh Verma</h1>
                   <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
                       <h5>40 posts</h5>
                       <h5>40 followers</h5>
                       <h5>40 following</h5>
                   </div>
               </div>
           </div>
            <div className="gallery">
            <img className="item" src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="userpost" />
            <img className="item" src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="userpost" />
            <img className="item" src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="userpost" />
            <img className="item" src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="userpost" />
            <img className="item" src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="userpost" />
            <img className="item" src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="userpost" />

            </div>
        </div>
    )
}

export default Profile
