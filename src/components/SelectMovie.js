import React, { useState } from "react";
function SelectMovie({ movie, changeMovie, options }) {
    // create state - movie name and price
    // const [movie, setMovie] = useState("");
    return (
        <div className="movie-container">
            <label>Pick a movie:</label>
            <select id="movie" value={movie} onChange={changeMovie}>
                {options.map(({ id, name, price }, index) => (
                    <option id={id} value={price}>
                        {name} ₹({price})
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectMovie;
