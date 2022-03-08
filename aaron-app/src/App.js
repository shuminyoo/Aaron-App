import { BrowserRouter as Router, Route} from "react-router-dom";

import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

function App() { 
  return ( 
    <div>
      <Router>
       <Route exact path = "/" component={LoginPage} />
       <Route exact path = "/main" component={MainPage} />
      </Router>
    </div>
    );
}

export default App;
