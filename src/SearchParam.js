import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

function SearchParam() {

    const [location, setName] = useState("Seattle,WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropDown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropDown] = useDropdown("Breed", " ", breeds);

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form >
                <label htmlFor="location">
                    <input id="location" value={location} placeholder="Location"
                        onChange={e => setName(e.target.value)} />
                </label>

                <button>Submit</button>
                <AnimalDropDown />
                <BreedDropDown />
            </form>
        </div>
    )
}

export default SearchParam;