import "./App.css";
import { useState,useEffect } from "react";
import Navbar from "./component/navbar.js";
import Home from "./component/home.js";
import Aboutus from "./component/Aboutus";
import { Switch, Route } from "react-router-dom";
import SearchView from "./component/SearchView";
import MovieView from "./component/MovieView";
import Trailer from "./component/Trailer";
import Error404 from "./component/Error404";
import axios from "axios";
import React from "react";
import Hero from "./component/hero.js";

//  api   392abf4ab05c43770ed746e97a16742b

function App() { 

const [searchResults,setSearchResults]= useState([]);
const [searchText,setSearchText]=useState('');


useEffect(()=>{
  if(searchText){
  
   
    // fetch(`https://api.themoviedb.org/3/search/movie?api_key=392abf4ab05c43770ed746e97a16742b&language=en-US&query=${searchText}&page=1&include_adult=false`)
    // .then(response=>response.json())
    // .then(data=>{
    //   setSearchResults(data.results )
    //  console.log(data.results)
    // })

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=392abf4ab05c43770ed746e97a16742b&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(response => {
    console.log(response.data);
    //  const repo=response.data;
    setSearchResults(response.data.results)
    });









  }
},[searchText])
    class Tabtwo extends React.Component{
      render(){
        return  (
          <>
          <Hero text="Hello World"/>
          
        </>
        )
      }
    }






  return (
    <div>
      <Navbar searchtext={searchText} setSearchText={setSearchText}/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
          <Route path="/about" component={Aboutus} />
        <Route path="/Search" exact>
        <SearchView keyword={searchText} searchResults={searchResults}/>
       
        </Route>

        <Route path="/movies/:id" component={MovieView}/>
        <Route path="/Second" component={Aboutus}/>
        <Route path="/Trailer" component={Trailer}/>
        <Route path="/Tabtwo" component={Tabtwo}/>
        <Route path="/Movie-database" component={Home}/>
        <Route path="*" component={Error404} />

      </Switch>
    </div>
  );
}

export default App;
