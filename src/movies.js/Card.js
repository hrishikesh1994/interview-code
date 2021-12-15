import React from "react";
import image1 from "./images/image1.jpg";

function Card() {
  return (
    <div
      style={{
        backgroundColor: "snow",
        height: "400px",
        border: "2px",
        width: "350px",
      }}
    >
      <img
        style={{ margin: 0, padding: 0, width: "350px", height: "250px" }}
        src={image1}
        alt="image"
      />
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "cursive",
          fontSize: 25,
        }}
      >
        Movie Name - Sooryavanshi
      </p>

      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "cursive",
          fontSize: 20,
        }}
      >
        Rating - 2/5
      </p>

      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "cursive",
          fontSize: 20,
        }}
      >
        Realease Date - 5 Nov 2021
      </p>
    </div>
  );
}

export default Card;
