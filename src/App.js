import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />

        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
