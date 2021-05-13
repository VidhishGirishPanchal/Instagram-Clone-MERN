import './App.css';
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/screens/Home";
import Profile from "./Components/screens/Profile";
import Signin from "./Components/screens/Signin";
import Signup from "./Components/screens/Signup";
import CreatePost from "./Components/screens/CreatePost";

function App() {
  return (
  
     <Router>
    <Navbar />
   <Switch>
   <Route exact path="/"><Home /></Route>
   <Route exact path="/profile"><Profile /></Route>
   <Route exact path="/signin"><Signin /></Route>
   <Route exact path="/signup"><Signup /></Route>
   <Route exact path="/createpost"><CreatePost /></Route>
   </Switch>
    </Router>
  
  );
}

export default App;
