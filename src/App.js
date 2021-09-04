import React from "react";
import ReactDOM from "react-dom";
import SearchParam from "./SearchParam";

const App = () => {
    /*     return React.createElement("div", {}, [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { name: "Tuna", animal: "Dog", breed: "Mixed" }),
            React.createElement(Pet, {
                name: "Huna",
                animal: "Elephat",
                breed: "Mixed",
            }),
            React.createElement(Pet, { name: "Cuna", animal: "Horse", breed: "Mixed" }),
        ]); */
    return (
        <div>
            <h1 id="something-important">Adopt Me!</h1>
            <SearchParam />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));
