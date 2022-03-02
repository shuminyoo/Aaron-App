import { Router, Route} from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

function App() {
  return ( 
    <div>
      <Router>
       <LoginPage exact path ="/login" component = {LoginPage} />
       <MainPage exact path ="/Main" component= {MainPage} />
      </Router>
    </div>
    );
}

export default App;
