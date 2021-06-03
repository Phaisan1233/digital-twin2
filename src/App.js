import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home";
import Navbar from "./components/navbar";
import test from "./components/dragtesting";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={test} />
      </div>
    </Router>
  );
}

export default App;
