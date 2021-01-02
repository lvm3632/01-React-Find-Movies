import React from "react";
import ReactDOM from "react-dom";
import List from "./containers/List";
import "bootswatch/dist/lux/bootstrap.min.css";

const App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark border-bottom border-white">
        <a href="/" className="navbar-brand">
          MovieApp
        </a>
      </nav>
      <main className="bg-dark">
        <div className="container">
          <List />
        </div>
      </main>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
