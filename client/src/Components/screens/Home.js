import React from 'react'
import "./Home.css"

function Home() {
    return (
        <div className="home">
           <div className="card home-card">
               <h5>Ramesh Verma</h5>
               <div className="card-image">
               <img
                    src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="profile-pic"
                    />
               </div>
               <div className="card-content">
               <i className="material-icons" style={{color: "red"}}>favorite</i>
                    <h6>Amazing Title</h6>
                    <p>This is the card-body-description</p>
                    <input type="text" placeholder="Add a comment" />
               </div>
           </div>

           <div className="card home-card">
               <h5>Ramesh Verma</h5>
               <div className="card-image">
               <img
                    src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="profile-pic"
                    />
               </div>
               <div className="card-content">
               <i className="material-icons" style={{color: "red"}}>favorite</i>
                    <h6>Amazing Title</h6>
                    <p>This is the card-body-description</p>
                    <input type="text" placeholder="Add a comment" />
               </div>
           </div>

           <div className="card home-card">
               <h5>Ramesh Verma</h5>
               <div className="card-image">
               <img
                    src="https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="profile-pic"
                    />
               </div>
               <div className="card-content">
               <i className="material-icons" style={{color: "red"}}>favorite</i>
                    <h6>Amazing Title</h6>
                    <p>This is the card-body-description</p>
                    <input type="text" placeholder="Add a comment" />
               </div>
           </div>

           
        </div>
    )
}

export default Home
