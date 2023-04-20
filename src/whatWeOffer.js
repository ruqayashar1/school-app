import React from "react";
function WhatWeOffer(props) {
  return (
    <>
  <h1>We provide:</h1>
  <div>
  <p>Excellent educational experience in a creative and safe environment</p>
  <p>We make learning a joyful and interesting experience to your child</p>
  <p>We are located in {props.address} </p>
  </div>
  </>
    )
  }
export default WhatWeOffer;