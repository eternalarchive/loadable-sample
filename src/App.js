import React from "react";
import { Route, Link } from "react-router-dom";
import { About, Home } from "./pages";

function App() {
  const handleMouseOver = () => {
    About.preload();
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about" onMouseOver={handleMouseOver}>
            About
          </Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
