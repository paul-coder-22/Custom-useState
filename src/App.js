import React from "react";
import ReactDOM from "react-dom";
import { Link, Router } from "@reach/router";

import SearchParam from "./SearchParam";

import Details from "./Details";

const App = () => {
    return (
        <React.StrictMode>
            <div>
                <header>
                    <Link to="/">Adopt Me!</Link>
                </header>
                <Router>
                    <SearchParam path="/" />
                    <Details path="/details/:id" />
                </Router>
            </div>
        </React.StrictMode>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));
// W6j.*D_uL&2ak2g