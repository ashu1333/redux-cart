import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />

        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={Detail} />
        <Route exact path="/cart" component={Cart} />
      </Router>
    </div>
  );
}

export default App;
