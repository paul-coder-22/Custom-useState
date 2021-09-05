import React from "react";

function Pet({ name, animal, breed }) {
    /*     return React.createElement("div", {}, [ *.*  create <div></div>
            React.createElement("h1", {}, name),
            React.createElement("h2", {}, animal),
            React.createElement("h2", {}, breed),
        ]); */
    return (
        <>
            <div>
                {/* expression */}
                <h1>{name}</h1>
                <h2>{animal}</h2>
                <h2>{breed}</h2>ṇ
            </div>
        </>
    )
};

export default Pet;