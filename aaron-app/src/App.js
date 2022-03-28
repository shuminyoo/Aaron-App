import { BrowserRouter as Router, Route} from "react-router-dom";

import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import LearnPage from "./LearnPage";

function App() { 
  return ( 
    <div>
      <Router>
       <Route exact path = "/" component={LoginPage} />
       <Route exact path = "/main" component={MainPage} />
       <Route exact path ="/learn" component={LearnPage} />
      </Router>
    </div>
    );
}

export default App;
