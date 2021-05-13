import React from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <>
          
 <nav>
    <div className="nav-wrapper white">
      <Link to="/" className="brand-logo left">Instagram</Link>
      <Link to="#" data-target="mobile-demo" className="right sidenav-trigger"><i className="material-icons">menu</i></Link>
      <ul className="right hide-on-med-and-down">
      <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">Signin</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/createpost">CreatePost</Link></li>
        
      </ul>
    </div>
   
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><Link to="sass.html">Sass</Link></li>
    <li><Link to="badges.html">Components</Link></li>
    <li><Link to="collapsible.html">Javascript</Link></li>
    <li><Link to="mobile.html">Mobile</Link></li>
  </ul>

        </>
    )
}

export default Navbar


 {/* <nav class="nav-extended">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons"></i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><a href="#test1">Test 1</a></li>
        <li class="tab"><a class="active" href="#test2">Test 2</a></li>
        <li class="tab"><a class="active" href="#test2">Test 3</a></li>
        <li class="tab"><a href="#test4">Test 4</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul> */}

 {/* //////////////////////////////// */}
 
