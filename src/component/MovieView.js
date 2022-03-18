import Hero from "./hero.js";
import axios from "axios";
import { useParams } from "react-router-dom";

import {useEffect, useState} from 'react';

//ytapi =AIzaSyD7Qo5TIdJS1d1dKnxh_u5OOBNXL6hfLsc


const MovieView = () => {
    const {id}=useParams()
  
  
  
  const [movieDetails,setMovieDetails]=useState({})
  const [isLoading ,setisLoading ]=useState(true)

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=392abf4ab05c43770ed746e97a16742b&language=en-US`)
    .then(response => {
    
    setMovieDetails(response.data)
    setisLoading(false)
    });


      // console.log('make an api request',id)
      // fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=392abf4ab05c43770ed746e97a16742b&language=en-US`)
      //   .then(response=>response.json())
      //   .then(data=>{

        
              
      //         setMovieDetails(data)
      //         setisLoading(false)
            

      //   })

  },[id]) 
  
      function renderMovieDetails(){
        if (isLoading){
          return <Hero text="Loading..."/>

        }
        if(movieDetails){
          const posterPath=`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
         const backdropUrl=  `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
        
          return (
          
          <> 
        
          <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
   

          <div className="container my-5">
            <div className="row">
              <div className =" col-md-3">
                <img src={posterPath} alt="..." className="img-fluid shadow rounded " />           
              </div>
             
              <div className="col-md-9">
                <h2>
                  {movieDetails.original_title}
                </h2>

                <p>
                  {movieDetails.overview}
                 
                </p>
                 Movie Status : {movieDetails.status}
                   
                   <p>
                   {movieDetails.adult}
                 
                </p>
                  </div>
              </div>
              
       
          </div>
            </>


         )
        }
      }

    return renderMovieDetails()
 
};

export default MovieView;
