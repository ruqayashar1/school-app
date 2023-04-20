import React from "react";
import SchoolLogo from "./schoolLogo";
import WhatWeOffer from "./whatWeOffer";
import LikeButton from "./LikeButton";

function App(){
  return (
    <>
    <div id= "logo">
    <h1>Al Munawar Educational Center </h1>
    <SchoolLogo/>
    </div>
    <div id = "otherInfo">
    <WhatWeOffer address = "Lang'ata" />
    <LikeButton/>
    </div>
    </>
  )
}

export default App


