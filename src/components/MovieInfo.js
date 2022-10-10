import React, { useState } from "react";
// import Button from "@material-ui/core/Button";

// import { Typography } from '@material-ui/core';
import SelectMovie from "./SelectMovie.js";
import movies from "./MovieList";
import SelectSeat from "./SelectSeat.js";
// import Button from "@mui/material/Button";
import BookingStatus from "./BookingStatus.js";

import OccupiedSeats from "./OccupiedSeats";

/*
 ** MovieInfo is the parent componet */

function MovieInfo() {
  const [movie, setMovie] = useState("");
  const [options] = useState(movies);
  const [seat, setSeat] = useState(0);
  const [price, setPrice] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [enable, setEnable] = useState(false);

  const [rows] = useState(OccupiedSeats);
  const onclick = (e) => {
    // debugger;
    if (
      // React Ref
      ![...document.getElementById(e.target.id).classList].includes(
        "selected"
      ) &&
      ![...document.getElementById(e.target.id).classList].includes("occupied")
    ) {
      document.getElementById(e.target.id).classList.add("selected");
      console.log("App: inside if loop");
      setSeat(seat + 1);
      console.log(seat);
      setPrice(price + +document.getElementById("movie").value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("render checkout screen");
    setSubmit(true);
  };

  const isValidating = () => {
    if (seat > 0) {
      return setEnable(true);
    } else return setEnable(false);
  };

  return (
    <div>
      <span className="title">
        <h2>Movie Tickets booking</h2>
      </span>

      <SelectMovie
        movie={movie}
        changeMovie={(e) => setMovie(e.target.value)}
        s
        options={options}
      />
      <BookingStatus />

      <div className="container">
        {rows.map(({ id, occupied }, index) => (
          <SelectSeat row={id} click={onclick} occupied={occupied} />
        ))}
      </div>

      {seat > 0 && (
        <p className="text">
          You have selected <span id="count">{seat}</span> seats for a price of
          ₹<span id="total">{price}</span>
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          // onClick={handleSubmit}
          disabled={isValidating}
          variant="contained"
        >
          Checkout
        </button>
      </form>
    </div>
  );
}
export default MovieInfo;
