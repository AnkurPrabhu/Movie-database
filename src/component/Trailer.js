import Hero from "./hero.js";
import axios from "axios";
import { useState,useEffect } from "react";









  
   
    

    axios.get(`https://www.googleapis.com/youtube/v3/search&part=snippet?0api_key=AIzaSyD7Qo5TIdJS1d1dKnxh_u5OOBNXL6hfLsc&language`)
    .then(response => {
    console.log(response.data);
    });










// AIzaSyD7Qo5TIdJS1d1dKnxh_u5OOBNXL6hfLsc

const Trailer = () => {
  return (
    <>
      <Hero text="Trailer" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
             <div > 
               hie
             </div>
             
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Trailer;
